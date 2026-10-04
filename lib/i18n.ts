export const locales = ["he", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "he";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const dir = (locale: Locale) => (locale === "he" ? "rtl" : "ltr");

/**
 * Builds a public URL path for a locale. Hebrew (default) has no prefix,
 * English lives under /en. `path` must start with "/".
 */
export function localePath(locale: Locale, path = "/") {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Strips the locale prefix (if any) from a public pathname. */
export function stripLocale(pathname: string) {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bustanwinery.com";
