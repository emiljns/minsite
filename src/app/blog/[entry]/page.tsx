import { notFound } from 'next/navigation';
import entries from '../entries';
import { PageProps } from '@/lib/types';

export async function generateMetadata({ params }: PageProps) {
  const entry = entries.find((e) => e.slug === params.entry);
  if (!entry) return {};

  return {
    title: entry.name,
    description: entry.excerpt,
    keywords: entry.keywords,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const entry = entries.find((e) => e.slug === params.entry);
  if (!entry) notFound();

  const Page = (await import(`../entries/${entry.slug}.tsx`)).default;
  return <Page />;
}
