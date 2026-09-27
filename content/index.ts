import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";
import he from "./he";
import en from "./en";

const dictionaries: Record<Locale, Dictionary> = { he, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];

export * from "./types";
