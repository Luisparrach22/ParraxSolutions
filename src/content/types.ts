/** Contenido de una página de servicio (/soluciones/[slug] y /servicios/tiendas-online). */
export type ServiceDetail = {
  lead: string;
  includes: string[];
  fit: string[];
  outcome: string;
  problem: { title: string; text: string; example: string };
  approach: { title: string; text: string }[];
  /** Puede llevar un marcador [TODO_LUIS: …] mientras no haya plazo confirmado. */
  timeline: string;
  faq: { q: string; a: string }[];
};

export type StorePage = ServiceDetail & {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
};
