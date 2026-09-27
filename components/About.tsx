import type { Dictionary } from "@/content";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-wine-900 md:text-4xl">{dict.about.heading}</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed">
          {dict.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
