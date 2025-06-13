import React from 'react';
import { Messages, MessageGroup, MessageBubble } from '@/components/messages';
import { Spotify } from '@/components/Spotify';
import { posts, sortPosts } from '@/content/posts';
import Link from 'next/link';

export default function HomePage() {
  const sorted = sortPosts(posts);

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl space-y-10 py-16">
        <Messages>
          <MessageGroup>
            <MessageBubble>
              <div className="space-y-2">
                <div>Hey there 👋 I’m <strong className="font-serif">Emil</strong>.</div>
                <div>Gaming at night 🎮, debugging at dawn 💻.</div>
                <div>Currently learning to code one late night tab at a time 😵‍💫📚.</div>
                <div>Powered by Monster 🥤, memes 🐸, and way too many console.logs.</div>
              </div>
            </MessageBubble>
          </MessageGroup>

          <MessageGroup>
            <MessageBubble>
              <div className="space-y-4 text-sm">
                <p>I try to write every now and then.</p>
                <hr className="border-zinc-700" />
                <ul className="space-y-4">
                  {sorted.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block hover:underline text-zinc-200"
                      >
                        <em>{post.name}</em>
                      </Link>
                      <p className="text-zinc-400">{post.excerpt}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </MessageBubble>
          </MessageGroup>

          <MessageGroup>
            <MessageBubble>
              <div>I’m on a few social platforms</div>
            </MessageBubble>

            <MessageBubble>
              <div className="flex items-center gap-2 flex-wrap">
                <span>
                  My Discord{' '}
                  is{' '}
                  <strong>@kivijj</strong>, currently I am{' '}
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-500 inline-block animate-pulse" />
                    <span className="text-green-400">online</span>
                  </span>
                </span>
              </div>
            </MessageBubble>

            <MessageBubble>
              <div className="flex items-center gap-2 flex-wrap">
                <span>
                  I&apos;m @emiljns on GitHub{' '}
                </span>
              </div>
            </MessageBubble>

            <MessageBubble>
              <div className="flex items-center gap-2 flex-wrap">
                <span>
                  I&apos;m LegoWarrior on Steam{' '}
                </span>
              </div>
            </MessageBubble>
          </MessageGroup>

          <MessageGroup>
            <MessageBubble>
              <Spotify />
            </MessageBubble>
          </MessageGroup>
        </Messages>
      </div>
    </main>
  );
}
