import type { ReactNode } from 'react';

export interface PostPartialJSON {
  name: string;
  slug: string;
  date: string;
  hidden: boolean;
  excerpt: string;
  keywords: string[];
}

export interface PostTinyJSON {
  name: string;
  slug: string;
  date: string;
  excerpt: string;
}

export abstract class Post {
  public abstract readonly name: string;
  public abstract readonly slug: string;
  public abstract readonly date: Date;
  public abstract readonly hidden: boolean;
  public abstract readonly excerpt: string;
  public abstract readonly keywords: string[];

  public toJSON(): PostPartialJSON {
    return {
      name: this.name,
      slug: this.slug,
      date: this.date.toISOString(),
      hidden: this.hidden,
      excerpt: this.excerpt,
      keywords: this.keywords,
    };
  }

  public toTinyJSON(): PostTinyJSON {
    return {
      name: this.name,
      slug: this.slug,
      date: this.date.toISOString(),
      excerpt: this.excerpt,
    };
  }

  public abstract render(): ReactNode;
}


export namespace Post {
  export interface PartialJSON {
    name: string;
    slug: string;
    date: string;
    hidden: boolean;
    excerpt: string;
    keywords: string[];
  }

  export interface TinyJSON {
    name: string;
    slug: string;
    date: string;
    excerpt: string;
  }
}
