export const wineColors = ["red", "white", "rose"] as const;
export type WineColor = (typeof wineColors)[number];

export const isWineColor = (value: string): value is WineColor =>
  (wineColors as readonly string[]).includes(value);

export type WineColorContent = {
  name: string;
  tagline: string;
  description: string;
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { about: string; wines: string; contact: string; home: string };
  languageSwitch: { label: string; target: string };
  hero: { title: string; tagline: string };
  about: { heading: string; paragraphs: string[] };
  wines: { heading: string; cta: string; colors: Record<WineColor, WineColorContent> };
  winePage: { back: string };
  contact: { heading: string; text: string; email: string };
  footer: { rights: string };
  notFound: { heading: string; text: string; back: string };
};
