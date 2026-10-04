import Image from "next/image";
import type { Dictionary } from "@/content";

// hero.png is the design's full "Sunset hero" export (sky, sea, color overlay and fade), 1440×808 @3x.
export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative h-[clamp(480px,56.1vw,808px)] overflow-hidden bg-night">
      <Image src="/images/hero.png" alt="" fill priority sizes="100vw" className="object-cover" />
      <Image
        src="/images/logo.png"
        alt={dict.meta.title}
        width={791}
        height={1024}
        priority
        sizes="159px"
        className="absolute top-[calc(50%-32px)] left-1/2 h-auto w-[clamp(109px,11vw,159px)] -translate-1/2 motion-safe:animate-fade-in"
      />
    </section>
  );
}
