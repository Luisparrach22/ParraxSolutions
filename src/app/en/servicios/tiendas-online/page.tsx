import { StoreScreen, storeMetadata } from '@/screens/StoreScreen';

export const metadata = storeMetadata('en');

export default function Page() {
  return <StoreScreen lang="en" />;
}
