import type { Dictionary } from "@/content";

// Placeholder hero — background image/video comes with the design artifacts.
export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-wine-900 to-wine-700 px-4 text-center text-white">
      <div>
        <h1 className="text-4xl font-bold md:text-6xl">{dict.hero.title}</h1>
        <p className="mt-4 text-lg text-wine-100 md:text-2xl">{dict.hero.tagline}</p>
      </div>
    </section>
  );
}
