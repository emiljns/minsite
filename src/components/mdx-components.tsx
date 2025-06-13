import Image from 'next/image';
import { ReactNode } from 'react';

export function MDXContent({ children }: { children: ReactNode }) {
  return (
    <article className="[&>p]:mb-4 [&>h2]:mt-8 [&>h2]:mb-2 [&>img]:rounded-lg">
      {children}
    </article>
  );
}

export const mdxComponents = {
  Image,
};
