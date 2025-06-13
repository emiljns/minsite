import type { ReactNode } from 'react';

export default function EntryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-20 pb-24 text-zinc-800 dark:text-zinc-200">
      {children}
    </div>
  );
}
