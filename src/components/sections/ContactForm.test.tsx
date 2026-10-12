// @vitest-environment jsdom
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { AnchorHTMLAttributes } from 'react';
import { es } from '@/content/es';
import { ContactForm } from './ContactForm';

// next/link necesita el router de Next; en aislamiento basta con un <a>.
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

const t = es.contact.form;
let fetchMock: ReturnType<typeof vi.fn>;

beforeAll(() => {
  // jsdom no implementa scrollIntoView (lo usa la pantalla de éxito).
  Element.prototype.scrollIntoView = vi.fn();
});

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal('fetch', fetchMock);
  window.location.hash = '';
});

afterEach(() => {
  cleanup();
});

function fillValidForm() {
  fireEvent.change(screen.getByLabelText(new RegExp(`^${t.name}`)), { target: { value: 'Ana López' } });
  fireEvent.change(screen.getByLabelText(new RegExp(`^${t.company}`)), { target: { value: 'Acme SL' } });
  fireEvent.change(screen.getByLabelText(new RegExp(`^${t.email}`)), { target: { value: 'ana@acme.es' } });
  fireEvent.change(screen.getByLabelText(/^¿Qué quieres resolver\?/), {
    target: { value: 'Necesitamos automatizar la facturación mensual.' },
  });
  fireEvent.click(screen.getByLabelText(t.urgency[1].label));
  fireEvent.click(screen.getByRole('checkbox'));
}

const submit = () => fireEvent.click(screen.getByRole('button', { name: t.submit }));

describe('ContactForm · validación en cliente', () => {
  it('no envía un formulario vacío, muestra el resumen y enfoca el primer campo con error', () => {
    render(<ContactForm t={t} />);
    submit();

    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.getByText(t.errors.summary)).toBeTruthy();
    for (const msg of [t.errors.name, t.errors.company, t.errors.email, t.errors.message, t.errors.urgency, t.errors.privacy]) {
      expect(screen.getByText(msg)).toBeTruthy();
    }
    expect(document.activeElement).toBe(screen.getByLabelText(new RegExp(`^${t.name}`)));
  });

  it('marca los campos inválidos con aria-invalid y los vincula con su error', () => {
    render(<ContactForm t={t} />);
    submit();
    const name = screen.getByLabelText(new RegExp(`^${t.name}`));
    expect(name.getAttribute('aria-invalid')).toBe('true');
    const errId = name.getAttribute('aria-describedby');
    expect(errId && document.getElementById(errId)?.textContent).toContain(t.errors.name);
  });

  it('limita la longitud de los campos con los mismos máximos que el servidor', () => {
    render(<ContactForm t={t} />);
    expect(screen.getByLabelText(new RegExp(`^${t.name}`)).getAttribute('maxlength')).toBe('120');
    expect(screen.getByLabelText(new RegExp(`^${t.company}`)).getAttribute('maxlength')).toBe('160');
    expect(screen.getByLabelText(new RegExp(`^${t.email}`)).getAttribute('maxlength')).toBe('200');
    expect(screen.getByLabelText(/^¿Qué quieres resolver\?/).getAttribute('maxlength')).toBe('4000');
  });

  it('muestra un contador de caracteres en el mensaje', () => {
    render(<ContactForm t={t} />);
    expect(screen.getByText('0/4000')).toBeTruthy();
    fireEvent.change(screen.getByLabelText(/^¿Qué quieres resolver\?/), { target: { value: 'Hola' } });
    expect(screen.getByText('4/4000')).toBeTruthy();
  });

  it('muestra el error de un campo al perder el foco', () => {
    render(<ContactForm t={t} />);
    const email = screen.getByLabelText(new RegExp(`^${t.email}`));
    fireEvent.change(email, { target: { value: 'ana@' } });
    expect(screen.queryByText(t.errors.email)).toBeNull();
    fireEvent.blur(email);
    expect(screen.getByText(t.errors.email)).toBeTruthy();
  });
});

describe('ContactForm · envío', () => {
  it('envía los datos a /api/contact, muestra «Enviando…» y después el éxito', async () => {
    let resolveFetch!: (r: Response) => void;
    fetchMock.mockReturnValue(new Promise<Response>((r) => (resolveFetch = r)));
    render(<ContactForm t={t} />);
    fillValidForm();
    submit();

    const sending = await screen.findByRole('button', { name: t.sending });
    expect((sending as HTMLButtonElement).disabled).toBe(true);

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('/api/contact');
    expect(init.method).toBe('POST');
    expect(init.headers).toEqual({ 'Content-Type': 'application/json' });
    expect(init.signal).toBeInstanceOf(AbortSignal);
    expect(JSON.parse(init.body as string)).toEqual({
      type: 'sesion',
      name: 'Ana López',
      company: 'Acme SL',
      email: 'ana@acme.es',
      message: 'Necesitamos automatizar la facturación mensual.',
      urgency: t.urgency[1].value,
      privacy: true,
      website: '',
    });

    resolveFetch(new Response('{"ok":true}', { status: 200 }));
    expect(await screen.findByText(t.success.title)).toBeTruthy();
    expect(screen.getByRole('status')).toBeTruthy();
  });

  it('no envía dos veces mientras la petición está en curso', async () => {
    fetchMock.mockReturnValue(new Promise<Response>(() => {}));
    render(<ContactForm t={t} />);
    fillValidForm();
    submit();
    const sending = await screen.findByRole('button', { name: t.sending });
    fireEvent.click(sending);
    expect(fetchMock).toHaveBeenCalledOnce();
  });

  // API-001: cada error de la API tiene su propio mensaje.
  it.each([
    [400, 'invalid_json', t.errors.server],
    [422, 'validation', t.errors.validation],
    [429, 'rate_limited', t.errors.rateLimited],
    [502, 'send_failed', t.errors.server],
  ])('con respuesta %i (%s) muestra su mensaje y conserva los datos', async (status, error, message) => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: false, error }), { status }));
    render(<ContactForm t={t} />);
    fillValidForm();
    submit();

    expect((await screen.findByRole('alert')).textContent).toBe(message);
    expect((screen.getByLabelText(new RegExp(`^${t.name}`)) as HTMLInputElement).value).toBe('Ana López');
    expect(screen.getByRole('button', { name: t.submit })).toBeTruthy();
  });

  it('usa el mensaje genérico si la respuesta de error no es JSON', async () => {
    fetchMock.mockResolvedValue(new Response('<html>Bad Gateway</html>', { status: 504 }));
    render(<ContactForm t={t} />);
    fillValidForm();
    submit();
    expect((await screen.findByRole('alert')).textContent).toBe(t.errors.server);
  });

  it('si la API no responde a tiempo sale del estado «Enviando…» con el mensaje genérico', async () => {
    fetchMock.mockRejectedValue(new DOMException('The operation timed out.', 'TimeoutError'));
    render(<ContactForm t={t} />);
    fillValidForm();
    submit();
    expect((await screen.findByRole('alert')).textContent).toBe(t.errors.server);
    expect(screen.getByRole('button', { name: t.submit })).toBeTruthy();
  });

  it('muestra el error de conexión si la red falla', async () => {
    fetchMock.mockRejectedValue(new TypeError('Failed to fetch'));
    render(<ContactForm t={t} />);
    fillValidForm();
    submit();
    expect((await screen.findByRole('alert')).textContent).toBe(t.errors.network);
  });

  it('«Enviar otra solicitud» vuelve a un formulario vacío', async () => {
    fetchMock.mockResolvedValue(new Response('{"ok":true}', { status: 200 }));
    render(<ContactForm t={t} />);
    fillValidForm();
    submit();
    fireEvent.click(await screen.findByRole('button', { name: t.success.again }));

    expect((screen.getByLabelText(new RegExp(`^${t.name}`)) as HTMLInputElement).value).toBe('');
    expect((screen.getByRole('checkbox') as HTMLInputElement).checked).toBe(false);
    expect(screen.queryByText(t.errors.summary)).toBeNull();
  });
});

describe('ContactForm · tipo de solicitud', () => {
  it('por defecto selecciona «sesión»', () => {
    render(<ContactForm t={t} />);
    expect((screen.getByLabelText(t.types[0].label) as HTMLInputElement).checked).toBe(true);
  });

  it('preselecciona «auditoría» si se llega con #solicitar-auditoria', () => {
    window.location.hash = '#solicitar-auditoria';
    render(<ContactForm t={t} />);
    expect((screen.getByLabelText(t.types[1].label) as HTMLInputElement).checked).toBe(true);
  });

  it('cambia el tipo al pulsar un enlace a #solicitar-auditoria', async () => {
    render(
      <>
        <a href="/#solicitar-auditoria">Solicitar auditoría</a>
        <ContactForm t={t} />
      </>,
    );
    fireEvent.click(screen.getByText('Solicitar auditoría'));
    await waitFor(() => expect((screen.getByLabelText(t.types[1].label) as HTMLInputElement).checked).toBe(true));
  });
});
