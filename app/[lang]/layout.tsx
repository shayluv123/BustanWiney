import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crimson_Pro, Special_Elite } from "next/font/google";
import localFont from "next/font/local";
import { getDictionary } from "@/content";
import { dir, hasLocale, localePath, locales, siteUrl } from "@/lib/i18n";
import "../globals.css";

const mechonat = localFont({ src: "../fonts/FbMechonatDfus-Regular.woff", variable: "--font-mechonat" });
const crimson = Crimson_Pro({ variable: "--font-crimson", subsets: ["latin"], weight: ["400", "700"] });
const specialElite = Special_Elite({ variable: "--font-special-elite", subsets: ["latin"], weight: "400" });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.title, template: `%s | ${dict.meta.title}` },
    // No description on purpose: link previews (e.g. WhatsApp) should show only the winery name.
    // The share image is app/[lang]/opengraph-image.jpg (logo on the sunset).
    openGraph: { title: dict.meta.title, type: "website", locale: lang === "he" ? "he_IL" : "en_US" },
    alternates: {
      canonical: localePath(lang),
      languages: Object.fromEntries(locales.map((l) => [l, localePath(l)])),
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} dir={dir(lang)} className={`${mechonat.variable} ${crimson.variable} ${specialElite.variable} antialiased`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
