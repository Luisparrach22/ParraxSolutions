/**
 * Desplaza hasta el elemento con ese id (suave salvo con prefers-reduced-motion),
 * actualiza el hash de la URL y emite `hashchange`, que history.pushState no emite,
 * para que los componentes que dependen del ancla (p. ej. ContactForm) se enteren.
 * Se emite siempre, también si el hash no cambia, porque la navegación se repite.
 *
 * Devuelve false si el elemento no existe (el llamante deja actuar al enlace).
 */
export function scrollToAnchor(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });

  const oldURL = window.location.href;
  if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`);
  window.dispatchEvent(new HashChangeEvent('hashchange', { oldURL, newURL: window.location.href }));
  return true;
}
