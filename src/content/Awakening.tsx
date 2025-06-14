// File: src/lib/types.ts
export type Metadata = {
  name: string;
  slug: string;
  date: Date;
  excerpt: string;
  keywords: string[];
};

// File: src/content/Awakening.tsx
import type { Metadata } from "@/lib/types";
import Image from "next/image";

export const metadata: Metadata = {
  name: "The Legend of Zelda: Link's Awakening",
  slug: "awakening",
  date: new Date("2025-06-12"),
  excerpt: "A beautiful game for the Nintendo Switch.",
  keywords: ["zelda", "switch", "nintendo", "link", "awakening"],
};

export default function Awakening() {
  return (
    <article className="space-y-6">
      <Image
        src="https://philips-blog-88o0raogu-philipcodes.vercel.app/assets/covers/links-awakening.jpg"
        alt="Link's Awakening key art"
        className="rounded-md my-6 w-full"
        width={1280}
        height={720}
      />
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">{metadata.name}</h1>
        <p className="text-sm text-zinc-500">
          {metadata.date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">{metadata.excerpt}</p>
      </header>
      <div className="space-y-4">
        <p>
          When the last Legend of Zelda wound up shaking up the whole series – and all open-world
          games, for that matter – that’s a hard act to follow.
        </p>
        <p>
          While we’ve since learned that a Breath of the Wild sequel is on the way, Nintendo has
          decided for the interim to return to a more traditional top-down Zelda – with all the
          dungeons and items we’ve known and loved in the series’ three decades.
        </p>
        <p>
          But when I say traditional, the Game Boy classic Link’s Awakening is still regarded as one
          of the weirdest entries, far away from Hyrule in a land where the presence of familiar
          Nintendo characters like Chain Chomps, Goombas and Yoshi felt positively alien. But if
          that weirdness now feels relatively safe compared to the still left-field bout of Majora’s
          Mask, it’s nonetheless a handsome update for the Switch.
        </p>
        <blockquote className="border-l-4 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
          “Castaway, you should know the truth!”
        </blockquote>
        <p>
          As Link, you awaken in a strange land away from Hyrule, where animals talk and monsters
          roam. To uncover the truth behind your whereabouts and rouse the legendary Wind Fish,
          explore Koholint Island and all its trap-ridden dungeons, reimagined in stunning detail
          for this new release of one of the most beloved The Legend of Zelda games. Along the way,
          you’ll meet a hilarious assortment of charming characters to which you’ll never want to
          say goodbye.
        </p>
        <p>
          In this new version of the game, the classic soundtrack has been reborn with new
          arrangements, and now you can equip more items at once, review key conversations, and
          navigate the map in new ways. Try your hand at the renovated mini-games to earn dolls
          based on the Super Mario series…or Chamber Stones. These unusual stones can be used to
          arrange your own Chamber Dungeons; each one is a puzzle in and of itself! Place chambers
          from dungeons found throughout the game on a series of objective-based grids… Where should
          the bosses go? How do you get from the entrance to the stairwell? They’re your dungeons,
          so arrange them however you see fit. To earn more Chamber Stones, you must conquer the
          main adventure’s dungeons and mini-games or tap any amiibo featuring a The Legend of Zelda
          character to unlock Chambers exclusive to amiibo.
        </p>
      </div>
    </article>
  );
}
