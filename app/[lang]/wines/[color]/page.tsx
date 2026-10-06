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
  // Sealing-wax burgundy: lighter top-right, deep shadow bottom-left.
  red: "bg-[linear-gradient(210.26deg,rgb(114,32,40)_0%,rgb(86,23,30)_45%,rgb(58,14,20)_100%)]",
  // Around "Mystic" #D65282: the pure tone in the bottom-left corner, deepening toward the top-right
  // so the copper text stays readable in the middle.
  rose: "bg-[linear-gradient(35.21deg,rgb(214,82,130)_0%,rgb(176,62,104)_38%,rgb(122,38,70)_100%)]",
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
      <span key={i} dir="ltr" className="font-latin text-[15px] font-bold tracking-[0.5px] md:text-[20px] md:tracking-[1px]">
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
    <div className={`flex min-h-svh flex-col ${backgrounds[color]}`}>
      <nav dir="ltr" className="flex h-16 shrink-0 items-center px-4 md:px-10">
        <Link
          href={`${localePath(lang)}#wines`}
          className="flex items-center font-hebrew text-[18px] text-copper transition-opacity hover:opacity-70"
        >
          <Image src="/images/chevron-left.svg" alt="" width={20} height={20} />
          <span dir={dir(lang)}>{dict.winePage.back}</span>
        </Link>
      </nav>

      <h1 className="sr-only">{content.name}</h1>

      {/* Rows alternate as in the design: text–bottle, then bottle–text, on every screen size.
          The rows are centered between the nav and the email, and the bottles shrink with the
          window height so the whole page fits on one screen (smaller sizes on phones). */}
      <div dir="ltr" className="flex flex-1 flex-col justify-center gap-[min(40px,4svh)] px-4 py-2 md:gap-[min(64px,6svh)] md:py-4">
        {content.wines.map((wine, i) => {
          const bottleFirst = i % 2 === 1;
          return (
            <article
              key={wine.name}
              className="flex items-center justify-center gap-4 md:gap-12"
            >
              <Bottle
                color={color}
                alt={wine.name}
                className={`h-[min(200px,27svh)] md:h-[min(313px,32svh)] ${bottleFirst ? "order-1" : "order-3"}`}
              />
              <div className="order-2 h-[80px] w-px shrink-0 bg-copper/30 md:h-[118px]" />
              <div
                dir={dir(lang)}
                className={`min-w-0 flex-1 text-start md:max-w-[300px] ${bottleFirst ? "order-3" : "order-1"}`}
              >
                <h2 className="text-[18px] md:text-[23px]">{wine.name}</h2>
                <p className="mt-2 text-[14px] leading-[18px] md:mt-[17px] md:text-[18px] md:leading-[22px]">
                  <Rich text={wine.description} />
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <Contact dict={dict} className="shrink-0 pt-4 pb-8 md:pt-8 md:pb-10" />
    </div>
  );
}
