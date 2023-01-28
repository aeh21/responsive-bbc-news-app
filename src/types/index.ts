export type CountryCode = "gb" | "au" | "us" | "fr" | "in";

export interface Country {
  code: CountryCode;
  name: string;
}
