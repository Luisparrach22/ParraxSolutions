import type { ReactNode } from 'react';
import { RootShell, rootMetadata, rootViewport } from '@/screens/RootShell';

export const metadata = rootMetadata('es');
export const viewport = rootViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
