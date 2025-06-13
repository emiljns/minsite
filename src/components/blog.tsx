'use client';

import Link from 'next/link';
import { MessageBubble } from './messages';

export function Blog({
  title,
  summary,
  href,
}: {
  title: string;
  summary: string;
  href: string;
}) {
  return (
    <MessageBubble className="px-0 py-0 overflow-hidden">
      <Link href={href} className="block px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {summary}
        </p>
      </Link>
    </MessageBubble>
  );
}
