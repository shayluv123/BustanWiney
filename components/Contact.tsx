import type { Dictionary } from "@/content";

export default function Contact({ dict, className }: { dict: Dictionary; className: string }) {
  const { email } = dict.contact;
  return (
    <section id="contact" className={`text-center ${className}`}>
      <a
        href={`mailto:${email}`}
        dir="ltr"
        className="font-typewriter text-[20px] text-copper-muted transition-colors hover:text-copper"
      >
        {email}
      </a>
    </section>
  );
}
