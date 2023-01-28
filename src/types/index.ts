export type CountryCode = "gb" | "au" | "us" | "fr" | "in";

export interface Country {
  code: CountryCode;
  name: string;
}

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}
