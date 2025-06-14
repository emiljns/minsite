import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((post) => ({ entry: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { entry: string };
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.entry);
  if (!post) return {};
  return {
    title: post.name,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function Page({
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
        ← Back
      </Link>
      <PostComponent />
    </main>
  );
}
