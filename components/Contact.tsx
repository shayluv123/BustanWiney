import type { Dictionary } from "@/content";

export default function Contact({ dict }: { dict: Dictionary }) {
  const { heading, text, email } = dict.contact;
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 text-center">
      <h2 className="text-3xl font-bold text-wine-900 md:text-4xl">{heading}</h2>
      <p className="mt-4 text-lg">{text}</p>
      <a
        href={`mailto:${email}`}
        dir="ltr"
        className="mt-6 inline-block text-xl font-medium text-wine-700 hover:underline"
      >
        {email}
      </a>
    </section>
  );
}
