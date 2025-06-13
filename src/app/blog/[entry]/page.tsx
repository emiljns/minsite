import { notFound } from 'next/navigation';
import { posts } from '@/content/posts';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageProps } from 'next/app'; // import correct type

type Params = {
  entry: string;
};

// It's okay if this stays a normal function, no async needed
export function generateStaticParams() {
  return posts.map((post) => ({
    entry: post.slug,
  }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find((p) => p.slug === params.entry);
  if (!post) return {};
  return {
    title: post.name,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

// Use the correct PageProps type
export default function BlogPostPage({ params }: PageProps<{ entry: string }>) {
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
