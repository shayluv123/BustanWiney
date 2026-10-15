import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";

// Fills a full screen with the text centered, so the section reads as its own "page" while scrolling.
// On phones the extra top padding nudges the text down to sit in the visual center (below the browser bar).
// English uses the email's typewriter font (the Hebrew font has no Latin letters).
export default function About({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const text = lang === "en" ? "font-typewriter text-[18px] md:text-[20px]" : "text-[21.8px] md:text-[23.1px]";
  return (
    <section id="about" className="flex min-h-svh items-center justify-center px-4 pt-[164px] pb-[100px] md:pt-[100px]">
      <div className={`max-w-[810px] space-y-[1.2em] text-center ${text}`}>
        {dict.about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
