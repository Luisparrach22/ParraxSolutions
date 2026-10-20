import { describe, expect, it } from 'vitest';
import { buildContactEmail } from './email-template';
import type { ValidContactRequest } from './validation';

const base: ValidContactRequest = {
  need: '',
  name: 'Ana López',
  company: 'Acme SL',
  email: 'ana@acme.es',
  message: 'Necesitamos automatizar la facturación.\nSegunda línea.',
  urgency: '3-meses',
  privacy: true,
};

describe('buildContactEmail', () => {
  it('compone el asunto con lo que necesita, o «Sesión estratégica» si no lo indicó', () => {
    expect(buildContactEmail(base).subject).toBe('Nueva solicitud: Sesión estratégica · Acme SL');
    expect(buildContactEmail({ ...base, need: 'tienda' }).subject).toBe('Nueva solicitud: Tienda online · Acme SL');
  });

  it('incluye la necesidad en el texto y en el HTML', () => {
    expect(buildContactEmail(base).text).toContain('Necesita: Sin indicar');
    const { text, html } = buildContactEmail({ ...base, need: 'automatizacion' });
    expect(text).toContain('Necesita: Automatizar un proceso');
    expect(html).toContain('<b>Necesita:</b> Automatizar un proceso');
  });

  it('incluye todos los datos y la etiqueta de urgencia en la versión de texto', () => {
    const { text } = buildContactEmail(base);
    expect(text).toContain('Nombre: Ana López');
    expect(text).toContain('Empresa: Acme SL');
    expect(text).toContain('Email: ana@acme.es');
    expect(text).toContain('Urgencia: En los próximos 3 meses');
    expect(text.endsWith(base.message)).toBe(true);
  });

  it('escapa el HTML de todos los campos controlados por el usuario', () => {
    const payload = `<script>alert("x")</script>&'`;
    const { html } = buildContactEmail({
      ...base,
      name: payload,
      company: payload,
      email: payload,
      message: payload,
    });
    expect(html).not.toContain('<script>');
    expect(html).not.toContain(`"x"`);
    expect(html).toContain('&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;&amp;&#39;');
    // Nombre, empresa (también en el asunto ×2: <h2>), email y mensaje
    expect(html.match(/&lt;script&gt;/g)?.length).toBeGreaterThanOrEqual(4);
  });

  it('mantiene el mensaje sin escapar en la versión de texto plano', () => {
    const { text } = buildContactEmail({ ...base, message: 'Uso <b> y & en mi texto, más de 20 chars' });
    expect(text).toContain('Uso <b> y & en mi texto');
  });

  it('conserva los saltos de línea del mensaje en HTML mediante white-space', () => {
    const { html } = buildContactEmail(base);
    expect(html).toContain('<p style="white-space:pre-wrap">Necesitamos automatizar la facturación.\nSegunda línea.</p>');
  });
});
