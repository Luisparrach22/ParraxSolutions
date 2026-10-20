import { pricing } from '@/config/site';
import { htmlLang, type Locale } from '@/i18n/config';

/** «1.500 USD» / «1,500 USD» para un paquete, o null si el precio aún no está definido. */
export function priceFrom(key: string, lang: Locale): string | null {
  const amount = pricing.from[key];
  if (amount == null) return null;
  return `${new Intl.NumberFormat(htmlLang[lang], { maximumFractionDigits: 0 }).format(amount)} ${pricing.currency}`;
}
