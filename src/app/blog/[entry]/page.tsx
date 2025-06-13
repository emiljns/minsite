import { notFound } from 'next/navigation';
import { posts } from '@/content/posts';
import type { Metadata } from 'next';
import Link from 'next/link';

// Generate static paths (slugs)
export function generateStaticParams() {
  return posts.map((post) => ({
    entry: post.slug,
  }));
}

// Generate metadata (title, description, etc.)
export function generateMetadata({
  params,
}: {
  params: { entry: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.entry);
  if (!post) return {};
  return {
    title: post.name,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

// Render the actual blog post
export default function BlogPostPage({
  params,
}: {
  params: { entry: string };
}) {
  const post = posts.find((p) => p.slug === params.entry);
  if (!post) return notFound();

  const PostComponent = post.Component;

  return (
    <main className="prose dark:prose-invert mx-auto px-4 pt-24 pb-16 space-y-8">
      <Link href="/" className="text-xl text-zinc-500 font-mono mb-6 block">
        cd ../
      </Link>
      <PostComponent />
    </main>
  );
}
