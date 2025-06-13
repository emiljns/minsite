'use client';

import { useLanyardWS } from 'use-lanyard';
import Image from 'next/image';
import { MessageBubble } from '@/components/messages';

export function Spotify() {
  const { spotify } = useLanyardWS('1168912708561805424') || {};

  return (
    <MessageBubble>
      {spotify ? (
        <a
          href={`https://open.spotify.com/track/${spotify.track_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white"
        >
          <Image
            src={spotify.album_art_url ?? ''}
            alt={`Album art for ${spotify.song}`}
            width={48}
            height={48}
            className="rounded-md"
          />
          <div className="text-sm leading-tight">
            <div className="text-xs text-zinc-400">Now Playing</div>
            <div className="font-semibold">{spotify.song}</div>
            <div className="text-xs text-zinc-400">{spotify.artist}</div>
          </div>
        </a>
      ) : (
        <div className="text-sm text-zinc-400">Currently not listening to anything 🎧</div>
      )}
    </MessageBubble>
  );
}
