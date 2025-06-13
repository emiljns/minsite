import type { ReactNode } from 'react';

export abstract class Post {
  readonly name!: string;
  readonly slug!: string;
  readonly date!: Date;
  readonly hidden!: boolean;
  readonly excerpt!: string;
  readonly keywords!: string[];

  toJSON() {
    return {
      name: this.name,
      slug: this.slug,
      date: this.date.toISOString(),
      hidden: this.hidden,
      excerpt: this.excerpt,
      keywords: this.keywords,
    };
  }

  toTinyJSON() {
    return {
      name: this.name,
      slug: this.slug,
      date: this.date.toISOString(),
      excerpt: this.excerpt,
    };
  }

  abstract render(): ReactNode;
}

