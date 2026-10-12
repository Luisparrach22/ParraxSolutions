/**
 * Serializa datos estructurados para un <script type="application/ld+json">.
 * Escapa `<` para que un valor con `</script>` no pueda cerrar la etiqueta (SEC-015).
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
