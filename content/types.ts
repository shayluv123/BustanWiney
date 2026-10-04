export const wineColors = ["red", "white", "rose"] as const;
export type WineColor = (typeof wineColors)[number];

export const isWineColor = (value: string): value is WineColor =>
  (wineColors as readonly string[]).includes(value);

/** Text with optional Latin-script terms (e.g. "Estate"), which the design sets in Crimson Pro bold. */
export type RichText = (string | { latin: string })[];

export type Wine = {
  name: string;
  description: RichText;
};

export type WineColorContent = {
  /** Used for the bottle's alt text and the page title. */
  name: string;
  wines: Wine[];
};

export type Dictionary = {
  meta: { title: string };
  languageSwitch: { label: string; target: string };
  about: { paragraphs: string[] };
  wines: { colors: Record<WineColor, WineColorContent> };
  winePage: { back: string };
  contact: { email: string };
  notFound: { heading: string; text: string; back: string };
};
