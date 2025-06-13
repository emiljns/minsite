import type { ReactNode } from 'react';

export function MDXContent({ children }: { children: ReactNode }) {
  return <article className="prose dark:prose-invert">{children}</article>;
}
