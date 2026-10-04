import type { Dictionary } from "@/content";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="px-4 py-[100px]">
      <div className="mx-auto max-w-[736px] space-y-[1.2em] pt-12 text-center text-lg md:text-[21px]">
        {dict.about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
