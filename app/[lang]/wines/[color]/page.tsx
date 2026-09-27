import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isWineColor, wineColors } from "@/content";
import { hasLocale, localePath, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return wineColors.map((color) => ({ color }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/wines/[color]">): Promise<Metadata> {
  const { lang, color } = await params;
  if (!hasLocale(lang) || !isWineColor(color)) return {};
  const wine = getDictionary(lang).wines.colors[color];
  const path = `/wines/${color}`;
  return {
    title: wine.tagline,
    description: wine.description,
    alternates: {
      canonical: localePath(lang, path),
      languages: Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
    },
  };
}

// Placeholder layout — to be designed once the wine page spec is ready.
export default async function WineColorPage({ params }: PageProps<"/[lang]/wines/[color]">) {
  const { lang, color } = await params;
  if (!hasLocale(lang) || !isWineColor(color)) notFound();
  const dict = getDictionary(lang);
  const wine = dict.wines.colors[color];

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Link href={`${localePath(lang)}#wines`} className="text-sm text-wine-700 hover:underline">
        {dict.winePage.back}
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-wine-900 md:text-5xl">{wine.tagline}</h1>
      <p className="mt-6 text-lg leading-relaxed">{wine.description}</p>
    </section>
  );
}
