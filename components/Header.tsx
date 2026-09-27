import Link from "next/link";
import type { Dictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const home = localePath(lang);
  const links = [
    { href: `${home}#about`, label: dict.nav.about },
    { href: `${home}#wines`, label: dict.nav.wines },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-wine-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href={home} className="text-lg font-bold text-wine-900">
          {dict.meta.title}
        </Link>
        <div className="flex items-center gap-4 text-sm md:gap-6">
          <ul className="hidden gap-6 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-wine-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher lang={lang} label={dict.languageSwitch.label} title={dict.languageSwitch.target} />
        </div>
      </nav>
    </header>
  );
}
