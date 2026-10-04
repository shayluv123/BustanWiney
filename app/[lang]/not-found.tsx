import Link from "next/link";
import { lang as rootLang } from "next/root-params";
import { getDictionary } from "@/content";
import { defaultLocale, hasLocale, localePath } from "@/lib/i18n";

export default async function NotFound() {
  const param = await rootLang();
  const lang = param && hasLocale(param) ? param : defaultLocale;
  const dict = getDictionary(lang).notFound;

  return (
    <section className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-4xl">{dict.heading}</h1>
      <p className="mt-4 text-lg">{dict.text}</p>
      <Link href={localePath(lang)} className="mt-8 inline-block text-copper-muted hover:text-copper">
        {dict.back}
      </Link>
    </section>
  );
}
