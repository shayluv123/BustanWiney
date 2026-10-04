import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isWineColor, wineColors, type RichText, type WineColor } from "@/content";
import { dir, hasLocale, localePath, locales } from "@/lib/i18n";
import Bottle from "@/components/Bottle";
import Contact from "@/components/Contact";

// Page background per wine color, from the Figma design.
const backgrounds: Record<WineColor, string> = {
  red: "bg-[linear-gradient(210.26deg,rgb(129,20,22)_1.23%,rgb(84,7,35)_56.29%)]",
  rose: "bg-[linear-gradient(35.21deg,rgb(160,55,74)_12.03%,rgb(87,28,38)_100%)]",
  white: "bg-[linear-gradient(210.26deg,rgb(173,44,9)_1.23%,rgb(94,36,46)_56.29%)]",
};

export function generateStaticParams() {
  return wineColors.map((color) => ({ color }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/wines/[color]">): Promise<Metadata> {
  const { lang, color } = await params;
  if (!hasLocale(lang) || !isWineColor(color)) return {};
  const content = getDictionary(lang).wines.colors[color];
  const path = `/wines/${color}`;
  return {
    title: content.name,
    description: content.wines.map((wine) => wine.name).join(" · "),
    alternates: {
      canonical: localePath(lang, path),
      languages: Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
    },
  };
}

function Rich({ text }: { text: RichText }) {
  return text.map((part, i) =>
    typeof part === "string" ? (
      part
    ) : (
      <span key={i} dir="ltr" className="font-latin text-[20px] font-bold tracking-[1px]">
        {part.latin}
      </span>
    ),
  );
}

export default async function WineColorPage({ params }: PageProps<"/[lang]/wines/[color]">) {
  const { lang, color } = await params;
  if (!hasLocale(lang) || !isWineColor(color)) notFound();
  const dict = getDictionary(lang);
  const content = dict.wines.colors[color];

  return (
    <div className={`min-h-screen ${backgrounds[color]}`}>
      <nav dir="ltr" className="flex h-16 items-center px-4 md:px-10">
        <Link
          href={`${localePath(lang)}#wines`}
          className="flex items-center font-nav text-[17px] text-copper transition-opacity hover:opacity-70"
        >
          <Image src="/images/chevron-left.svg" alt="" width={20} height={20} />
          <span dir={dir(lang)}>{dict.winePage.back}</span>
        </Link>
      </nav>

      <h1 className="sr-only">{content.name}</h1>

      {/* Rows alternate in the design: text–bottle, then bottle–text. On mobile they stack. */}
      <div dir="ltr" className="mt-12 flex flex-col gap-16 px-4 md:mt-[120px]">
        {content.wines.map((wine, i) => {
          const bottleFirst = i % 2 === 1;
          return (
            <article
              key={wine.name}
              className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12"
            >
              <Bottle
                color={color}
                alt={wine.name}
                className={`h-[260px] md:h-[313px] ${bottleFirst ? "md:order-1" : "md:order-3"}`}
              />
              <div className="hidden h-[118px] w-px bg-copper/30 md:order-2 md:block" />
              <div
                dir={dir(lang)}
                className={`w-full max-w-[300px] text-center ${bottleFirst ? "md:order-3 md:text-right" : "md:order-1 md:text-left"}`}
              >
                <h2 className="text-[23px]">{wine.name}</h2>
                <p className="mt-[17px] text-[18px] leading-[22px]">
                  <Rich text={wine.description} />
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <Contact dict={dict} className="pt-40 pb-24 md:pt-[411px] md:pb-[186px]" />
    </div>
  );
}
