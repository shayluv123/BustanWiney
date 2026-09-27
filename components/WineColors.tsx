import Link from "next/link";
import { wineColors, type Dictionary, type WineColor } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";

// Placeholder swatches until real imagery is provided.
const swatch: Record<WineColor, string> = {
  red: "bg-wine-800",
  white: "bg-white-wine",
  rose: "bg-rose",
};

export default function WineColors({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section id="wines" className="scroll-mt-20 bg-wine-100 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-wine-900 md:text-4xl">{dict.wines.heading}</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {wineColors.map((color) => {
            const wine = dict.wines.colors[color];
            return (
              <li key={color}>
                <Link
                  href={localePath(lang, `/wines/${color}`)}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
                >
                  <div className={`aspect-[4/3] ${swatch[color]}`} />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-wine-900">{wine.name}</h3>
                    <span className="mt-2 inline-block text-wine-700 group-hover:underline">{dict.wines.cta}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
