"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, stripLocale, type Locale } from "@/lib/i18n";

// Links to the same page in the other language.
export default function LanguageSwitcher({
  lang,
  label,
  title,
}: {
  lang: Locale;
  label: string;
  title: string;
}) {
  const pathname = usePathname();
  const target: Locale = lang === "he" ? "en" : "he";
  const href = localePath(target, stripLocale(pathname));

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      title={title}
      className="rounded-full border border-wine-700 px-3 py-1 text-wine-700 transition hover:bg-wine-700 hover:text-white"
    >
      {label}
    </Link>
  );
}
