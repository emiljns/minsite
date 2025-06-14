import Awakening, { metadata as awakeningMeta } from "./Awakening";

export const posts = [
  {
    Component: Awakening,
    ...awakeningMeta,
  },
] as const;

export function sortPosts(p: typeof posts) {
  return [...p].sort((a, b) => b.date.getTime() - a.date.getTime());
}
