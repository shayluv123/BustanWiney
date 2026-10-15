import Link from "next/link";
import type { Dictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = { en: "EN", he: "HE" };

// Minimal "EN | HE" switch in the hero's top-left corner, in the crest's gold.
// The active language is solid; the other is faded. Light weight (300) so the letters can be a bit
// larger while keeping the same thin strokes.
export default function LanguageToggle({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const order: Locale[] = ["en", "he"];
  return (
    <nav
      dir="ltr"
      aria-label="Language"
      className="absolute top-5 left-5 z-10 flex items-center gap-1 font-latin text-[16px] font-light tracking-[2px] text-gold md:top-[35px] md:left-[45px] md:text-[17px]"
    >
      {order.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">|</span>}
          {l === lang ? (
            <span aria-current="true">{labels[l]}</span>
          ) : (
            <Link
              href={localePath(l)}
              hrefLang={l}
              title={dict.languageSwitch.target}
              className="opacity-50 transition-opacity hover:opacity-90"
            >
              {labels[l]}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
