import { CookiesScreen, cookiesMetadata } from '@/screens/CookiesScreen';

export const metadata = cookiesMetadata('en');

export default function Page() {
  return <CookiesScreen lang="en" />;
}
