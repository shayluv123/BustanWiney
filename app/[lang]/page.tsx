import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { hasLocale } from "@/lib/i18n";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WineColors from "@/components/WineColors";
import Contact from "@/components/Contact";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <WineColors lang={lang} dict={dict} />
      {/* lvh = screen height with the phone's browser bars hidden (as they are when scrolled to the bottom),
          so the email fills the screen alone without the bottles peeking in. */}
      <Contact dict={dict} className="flex min-h-lvh items-center justify-center px-4" />
    </>
  );
}
