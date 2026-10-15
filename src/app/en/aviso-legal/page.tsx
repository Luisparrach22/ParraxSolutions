import { AvisoLegalScreen, avisoLegalMetadata } from '@/screens/AvisoLegalScreen';

export const metadata = avisoLegalMetadata('en');

export default function Page() {
  return <AvisoLegalScreen lang="en" />;
}
