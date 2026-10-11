import { Fragment } from 'react';

/**
 * Renderiza texto convirtiendo los fragmentos entre [corchetes] en placeholders
 * visibles (borde discontinuo + monoespaciada). Así un dato pendiente de
 * confirmar nunca pasa desapercibido en producción.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('[') && part.endsWith(']') ? (
          <span key={i} className="ph" title="Dato pendiente de confirmar">
            {part.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Texto plano sin corchetes (para atributos, metadatos, aria-label). */
export function plain(text: string) {
  return text.replace(/\[([^\]]+)\]/g, '$1');
}
