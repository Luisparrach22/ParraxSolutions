import { SolutionScreen, solutionMetadata, solutionSlugs } from '@/screens/SolutionScreen';

type Props = { params: Promise<{ slug: string }> };

// Slug desconocido = ruta inexistente: lo resuelve la 404 global (global-not-found).
export const dynamicParams = false;

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  return solutionMetadata('es', (await params).slug);
}

export default async function Page({ params }: Props) {
  return <SolutionScreen lang="es" slug={(await params).slug} />;
}
