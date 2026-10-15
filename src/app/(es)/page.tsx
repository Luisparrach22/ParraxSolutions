import { HomeScreen, homeMetadata } from '@/screens/HomeScreen';

export const metadata = homeMetadata('es');

export default function Page() {
  return <HomeScreen lang="es" />;
}
