import Awakening, { metadata as awakeningMeta } from './Awakening';

// Post type definition
export type Post = {
  Component: React.ComponentType;
  name: string;
  slug: string;
  excerpt?: string;
  keywords?: string[];
  date: Date;
};

// List of posts
export const posts: Post[] = [
  {
    Component: Awakening,
    ...awakeningMeta,
  },
];

// Optional: sort posts by date
export function sortPosts(p: Post[]) {
  return [...p].sort((a, b) => b.date.getTime() - a.date.getTime());
}
