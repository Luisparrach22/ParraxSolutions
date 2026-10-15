import { CookiesScreen, cookiesMetadata } from '@/screens/CookiesScreen';

export const metadata = cookiesMetadata('es');

export default function Page() {
  return <CookiesScreen lang="es" />;
}
