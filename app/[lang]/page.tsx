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
      <Contact dict={dict} />
    </>
  );
}
