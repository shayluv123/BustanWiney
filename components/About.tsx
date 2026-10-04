import type { Dictionary } from "@/content";

// Fills a full screen with the text centered, so the section reads as its own "page" while scrolling.
// On phones the extra top padding nudges the text down to sit in the visual center (below the browser bar).
export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="flex min-h-svh items-center justify-center px-4 pt-[164px] pb-[100px] md:pt-[100px]">
      <div className="max-w-[810px] space-y-[1.2em] text-center text-[21.8px] md:text-[23.1px]">
        {dict.about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
