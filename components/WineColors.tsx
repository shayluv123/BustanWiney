import Link from "next/link";
import { type Dictionary, type WineColor } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import Bottle from "./Bottle";

// Left-to-right order as in the design, regardless of page direction.
const order: WineColor[] = ["red", "rose", "white"];

export default function WineColors({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  // On phones the padding is shifted so the gaps About→bottles and bottles→email are equal
// (the bottom gets a little extra for the phone's hidden browser bars).
  return (
    <section id="wines" className="px-4 pt-[247px] pb-[72px] md:pt-[100px] md:pb-[188px]">
      <ul dir="ltr" className="flex items-center justify-center gap-10 sm:gap-20 md:gap-[150px]">
        {order.map((color) => (
          <li key={color}>
            <Link
              href={localePath(lang, `/wines/${color}`)}
              className="block transition-transform duration-300 hover:-translate-y-2"
            >
              <Bottle
                color={color}
                alt={dict.wines.colors[color].name}
                className="h-[clamp(220px,25.2vw,363px)]"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
