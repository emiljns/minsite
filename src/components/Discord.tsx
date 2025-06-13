'use client';

import { useEffect, useState } from 'react';

type LanyardResponse = {
  success: boolean;
  data: {
    discord_status: 'online' | 'dnd' | 'idle' | 'offline';
    activities: { name: string; type: number }[];
  };
};

export function Discord() {
  const [status, setStatus] = useState<'online' | 'dnd' | 'idle' | 'offline' | null>(null);
  const [activity, setActivity] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.lanyard.rest/v1/users/1168912708561805424')
      .then((res) => res.json())
      .then((json: LanyardResponse) => {
        if (json.success) {
          setStatus(json.data.discord_status);
          const firstActivity = json.data.activities[0];
          if (firstActivity?.name) setActivity(firstActivity.name);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  const statusEmojiMap: Record<string, string> = {
    online: '🟢 Online',
    dnd: '⛔ Do Not Disturb',
    idle: '🌙 Idle',
    offline: '⚫ Offline',
  };

  return (
    <div className="text-sm text-zinc-400">
      {error && <span className="text-red-500">Failed to fetch Discord status.</span>}
      {!error && status && (
        <span>
          Status: {statusEmojiMap[status]}
          {activity && ` — Playing ${activity}`}
        </span>
      )}
    </div>
  );
}
