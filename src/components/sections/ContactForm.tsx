'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import type { Dictionary } from '@/i18n/config';
import { cn } from '@/lib/cn';
import { CONTACT_LIMITS, CONTACT_REQUEST_TIMEOUT_MS, invalidContactFields, type ContactField, type ContactResponse, type ContactType } from '@/lib/contact-schema';
import { Button, NodeDot, Rich } from '@/components/ui';

type FormT = Dictionary['contact']['form'];
type Values = {
  type: string;
  name: string;
  company: string;
  email: string;
  message: string;
  urgency: string;
  privacy: boolean;
  website: string; // honeypot anti-spam
};
type Field = ContactField;
type SubmitError = 'server' | 'rateLimited' | 'validation' | 'network';
type Errors = Partial<Record<Field, string>>;

const FIELD_ORDER: Field[] = ['name', 'company', 'email', 'message', 'urgency', 'privacy'];

/** Anclas de los CTA que preseleccionan el tipo de solicitud. */
const ANCHOR_TYPES: Record<string, ContactType> = {
  '#solicitar-auditoria': 'auditoria',
  '#agendar-sesion': 'sesion',
};

function validate(v: Values, t: FormT): Errors {
  const invalid = invalidContactFields({
    name: v.name.trim(),
    company: v.company.trim(),
    email: v.email.trim(),
    message: v.message.trim(),
    urgency: v.urgency,
    privacy: v.privacy,
  });
  return Object.fromEntries(invalid.map((f) => [f, t.errors[f]]));
}

export function ContactForm({ t }: { t: FormT }) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Values>({
    type: 'sesion',
    name: '',
    company: '',
    email: '',
    message: '',
    urgency: '',
    privacy: false,
    website: '',
  });
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<SubmitError>('server');

  const errors = validate(values, t);
  const show = (f: Field) => (touched[f] || submitted) && errors[f];

  // Los CTA apuntan a #solicitar-auditoria o #agendar-sesion y preseleccionan el tipo.
  // La navegación interna (scrollToAnchor) emite hashchange, así que basta con escuchar ese evento.
  useEffect(() => {
    const sync = () => {
      const type = ANCHOR_TYPES[window.location.hash];
      if (type) setValues((v) => (v.type === type ? v : { ...v, type }));
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  useEffect(() => {
    if (status !== 'success' || !successRef.current) return;
    successRef.current.focus({ preventScroll: true });
    successRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [status]);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => setValues((v) => ({ ...v, [key]: value }));
  const blur = (f: Field) => setTouched((t) => ({ ...t, [f]: true }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate(values, t);
    const first = FIELD_ORDER.find((f) => errs[f]);
    if (first) {
      const el = formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`);
      el?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(CONTACT_REQUEST_TIMEOUT_MS),
      });
      if (res.ok) {
        setStatus('success');
        return;
      }
      const data = (await res.json().catch(() => null)) as ContactResponse | null;
      const code = data && !data.ok ? data.error : undefined;
      setSubmitError(code === 'rate_limited' ? 'rateLimited' : code === 'validation' ? 'validation' : 'server');
      setStatus('error');
    } catch (err) {
      // Si se agota el tiempo, la solicitud pudo llegar: no se sugiere un problema de conexión.
      setSubmitError((err as { name?: unknown } | null)?.name === 'TimeoutError' ? 'server' : 'network');
      setStatus('error');
    }
  }

  function reset() {
    // Se conserva el tipo elegido (OPT-002).
    setValues((v) => ({ type: v.type, name: '', company: '', email: '', message: '', urgency: '', privacy: false, website: '' }));
    setTouched({});
    setSubmitted(false);
    setStatus('idle');
  }

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex min-h-[380px] flex-col items-start justify-center p-5 outline-none sm:p-8 md:p-10">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700">
          <NodeDot size="md" />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">{t.success.title}</h3>
        <p className="mt-2.5 max-w-[48ch] text-sm text-slate-400 sm:text-base">
          <Rich text={t.success.text} />
        </p>
        <button type="button" onClick={reset} className="mt-6 text-xs sm:text-sm font-medium text-white underline decoration-slate-600 underline-offset-4 hover:decoration-node">
          {t.success.again}
        </button>
      </div>
    );
  }

  const hasErrors = submitted && Object.keys(errors).length > 0;

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="space-y-5 p-4 sm:space-y-6 sm:p-7 md:p-10" aria-describedby={hasErrors ? `${uid}-summary` : undefined}>
      {hasErrors && (
        <p id={`${uid}-summary`} role="alert" className="flex items-center gap-2 rounded border border-red-400/40 bg-red-400/5 px-3.5 py-2.5 text-xs sm:text-sm text-red-200">
          <ErrorIcon />
          {t.errors.summary}
        </p>
      )}

      {/* Tipo de solicitud */}
      <fieldset>
        <legend className="text-sm font-medium text-white">{t.typeLegend}</legend>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {t.types.map((opt) => (
            <Choice
              key={opt.value}
              name="type"
              value={opt.value}
              label={opt.label}
              checked={values.type === opt.value}
              onChange={() => set('type', opt.value)}
            />
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <TextField id={`${uid}-name`} field="name" label={t.name} placeholder={t.namePh} autoComplete="name" maxLength={CONTACT_LIMITS.name.max} value={values.name} error={show('name')} required={t.required} onChange={(v) => set('name', v)} onBlur={() => blur('name')} />
        <TextField id={`${uid}-company`} field="company" label={t.company} placeholder={t.companyPh} autoComplete="organization" maxLength={CONTACT_LIMITS.company.max} value={values.company} error={show('company')} required={t.required} onChange={(v) => set('company', v)} onBlur={() => blur('company')} />
      </div>

      <TextField id={`${uid}-email`} field="email" type="email" inputMode="email" label={t.email} placeholder={t.emailPh} autoComplete="email" maxLength={CONTACT_LIMITS.email.max} value={values.email} error={show('email')} required={t.required} onChange={(v) => set('email', v)} onBlur={() => blur('email')} />

      <TextField id={`${uid}-message`} field="message" multiline label={t.message} placeholder={t.messagePh} maxLength={CONTACT_LIMITS.message.max} value={values.message} error={show('message')} required={t.required} onChange={(v) => set('message', v)} onBlur={() => blur('message')} />

      {/* Urgencia */}
      <fieldset aria-describedby={show('urgency') ? `${uid}-urgency-err` : undefined} aria-invalid={show('urgency') ? true : undefined}>
        <legend className="text-sm font-medium text-white">
          {t.urgencyLegend} <span className="sr-only">({t.required})</span>
        </legend>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {t.urgency.map((opt, i) => (
            <Choice
              key={opt.value}
              name="urgency"
              value={opt.value}
              label={opt.label}
              checked={values.urgency === opt.value}
              invalid={!!show('urgency')}
              dataField={i === 0 ? 'urgency' : undefined}
              onChange={() => {
                set('urgency', opt.value);
                blur('urgency');
              }}
            />
          ))}
        </div>
        {show('urgency') && <FieldError id={`${uid}-urgency-err`}>{errors.urgency}</FieldError>}
      </fieldset>

      {/* Honeypot: oculto a personas y lectores de pantalla */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Web
          <input tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set('website', e.target.value)} />
        </label>
      </div>

      {/* Privacidad (RGPD) */}
      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-400">
          <input
            type="checkbox"
            data-field="privacy"
            checked={values.privacy}
            onChange={(e) => {
              set('privacy', e.target.checked);
              blur('privacy');
            }}
            aria-invalid={show('privacy') ? true : undefined}
            aria-describedby={show('privacy') ? `${uid}-privacy-err` : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-sm border border-slate-600 bg-obsidian bg-center bg-no-repeat checked:border-node checked:bg-node checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M4%208.5l2.5%202.5L12%205.5%22%20fill%3D%22none%22%20stroke%3D%22%23090D16%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] aria-[invalid=true]:border-red-400 sm:mt-1 sm:h-4 sm:w-4"
          />
          <span>
            {t.privacyA}{' '}
            <Link href="/politica-de-privacidad" className="text-white underline decoration-slate-600 underline-offset-4 hover:decoration-node">
              {t.privacyLink}
            </Link>
            {t.privacyB}
          </span>
        </label>
        {show('privacy') && <FieldError id={`${uid}-privacy-err`}>{errors.privacy}</FieldError>}
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded border border-red-400/40 bg-red-400/5 px-4 py-3 text-sm text-red-200">
          {t.errors[submitError]}
        </p>
      )}

      <Button type="submit" size="lg" arrow disabled={status === 'sending'} className="w-full sm:w-auto">
        {status === 'sending' ? t.sending : t.submit}
      </Button>
    </form>
  );
}

/* ---------- Subcomponentes ---------- */

type TextFieldProps = {
  id: string;
  field: Field;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  inputMode?: 'email' | 'text';
  autoComplete?: string;
  maxLength?: number;
  multiline?: boolean;
  error?: string | false | undefined;
  required: string;
  onChange: (v: string) => void;
  onBlur: () => void;
};

function TextField({ id, field, label, value, placeholder, type = 'text', inputMode, autoComplete, maxLength, multiline, error, required, onChange, onBlur }: TextFieldProps) {
  const errId = `${id}-err`;
  const cls = cn(
    'mt-2 block w-full rounded border bg-obsidian px-3.5 sm:px-4 text-base sm:text-[0.9375rem] text-white placeholder:text-slate-500 transition-colors',
    'focus:border-node focus:outline-none focus-visible:outline-none focus:ring-1 focus:ring-node',
    error ? 'border-red-400' : 'border-slate-700 hover:border-slate-600',
    multiline ? 'min-h-[120px] sm:min-h-[132px] resize-y py-3 leading-6' : 'h-11 sm:h-12',
  );
  const common = {
    id,
    'data-field': field,
    value,
    placeholder,
    autoComplete,
    maxLength,
    'aria-required': true as const,
    'aria-invalid': error ? (true as const) : undefined,
    'aria-describedby': error ? errId : undefined,
    onBlur,
    className: cls,
  };
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label} <span className="sr-only">({required})</span>
      </label>
      {multiline ? (
        <textarea {...common} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input {...common} type={type} inputMode={inputMode} onChange={(e) => onChange(e.target.value)} />
      )}
      {multiline && maxLength && (
        <p className="mt-1.5 text-right font-mono text-xs text-slate-500">
          {value.length}/{maxLength}
        </p>
      )}
      {error && <FieldError id={errId}>{error}</FieldError>}
    </div>
  );
}

function Choice({
  name,
  value,
  label,
  checked,
  invalid,
  dataField,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  invalid?: boolean;
  dataField?: string;
  onChange: () => void;
}) {
  return (
    <label
      className={cn(
        'flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded border px-3.5 py-2.5 text-sm transition-colors [-webkit-tap-highlight-color:transparent] sm:px-4 sm:py-3 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-node',
        checked ? 'border-slate-500 bg-white/[0.03] text-white' : invalid ? 'border-red-400/60 text-slate-300' : 'border-slate-700 text-slate-300 hover:border-slate-600',
      )}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} data-field={dataField} className="sr-only" />
      <span aria-hidden="true" className={cn('flex h-4 w-4 shrink-0 items-center justify-center rounded-full border', checked ? 'border-node' : 'border-slate-600')}>
        {checked && <span className="h-2 w-2 rounded-full bg-node" />}
      </span>
      <span>{label}</span>
    </label>
  );
}

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-red-300">
      <ErrorIcon />
      {children}
    </p>
  );
}

function ErrorIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="6.25" />
      <path d="M8 4.75v4M8 11h.01" strokeLinecap="round" />
    </svg>
  );
}
