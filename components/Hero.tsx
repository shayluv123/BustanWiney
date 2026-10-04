import Image from "next/image";
import type { Dictionary } from "@/content";
import Parallax from "./Parallax";

// hero.png is the design's full "Sunset hero" export (sky, sea, color overlay and fade), 1440×808 @3x.
// The hero fills the screen on every device, like the desktop design.
// Parallax: the background scrolls slowest, the logo a little faster, the page at normal speed.
export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative h-svh min-h-[480px] overflow-hidden bg-night">
      <Parallax speed={0.5} className="absolute inset-0">
        <Image src="/images/hero.png" alt="" fill priority sizes="100vw" className="object-cover" />
      </Parallax>
      {/* Static fade into the page color: the image's own fade moves down out of view with the parallax. */}
      <div className="absolute inset-x-0 bottom-0 h-[12%] bg-linear-to-t from-wine from-[28.927%] to-wine/0" />
      <Parallax speed={0.25} className="absolute inset-0">
        <Image
          src="/images/logo.png"
          alt={dict.meta.title}
          width={791}
          height={1024}
          priority
          sizes="151px"
          className="absolute top-[calc(50%-32px)] left-1/2 h-auto w-[clamp(88px,10.45vw,151px)] -translate-1/2 motion-safe:animate-fade-in"
        />
      </Parallax>
    </section>
  );
}
