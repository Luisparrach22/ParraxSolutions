import { HomeScreen, homeMetadata } from '@/screens/HomeScreen';

export const metadata = homeMetadata('en');

export default function Page() {
  return <HomeScreen lang="en" />;
}
