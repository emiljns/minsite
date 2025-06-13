'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import Image from 'next/image';


export function MessageBubble({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={clsx('w-fit max-w-full', containerClassName)}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 20,
          mass: 0.5,
          delay: 0.1,
        }}
        className={clsx(
          'rounded-xl px-4 py-3 text-sm shadow-md',
          'bg-zinc-900 text-zinc-400 border border-zinc-900/40',
          'inline-block break-words w-fit max-w-[80%] sm:max-w-md',
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function MessageGroup({ children }: { children: ReactNode }) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 160,
        damping: 22,
        delay: 0.05,
      }}
      className="flex items-end gap-3"
    >
      <div className="flex flex-col justify-end">
        <Image
          src="https://avatars.githubusercontent.com/emiljns"
          alt="GitHub avatar"
          className="size-8 rounded-full border border-zinc-300 dark:border-zinc-900"
        />
      </div>
      <div className="space-y-3">{children}</div>
    </motion.li>
  );
}

export function Messages({ children }: { children: ReactNode }) {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      className="flex flex-col space-y-6"
    >
      {children}
    </motion.ul>
  );
}
