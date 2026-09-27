import type { MetadataRoute } from "next";
import { wineColors } from "@/content";
import { localePath, locales, siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...wineColors.map((color) => `/wines/${color}`)];
  return paths.map((path) => ({
    url: `${siteUrl}${localePath("he", path)}`,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localePath(l, path)}`])),
    },
  }));
}
