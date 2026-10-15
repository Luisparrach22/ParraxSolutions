import { AvisoLegalScreen, avisoLegalMetadata } from '@/screens/AvisoLegalScreen';

export const metadata = avisoLegalMetadata('es');

export default function Page() {
  return <AvisoLegalScreen lang="es" />;
}
