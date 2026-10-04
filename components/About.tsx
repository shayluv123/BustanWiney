import type { Dictionary } from "@/content";

// Fills a full screen with the text centered, so the section reads as its own "page" while scrolling.
export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="flex min-h-svh items-center justify-center px-4 py-[100px]">
      <div className="max-w-[810px] space-y-[1.2em] text-center text-[19.8px] md:text-[23.1px]">
        {dict.about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
