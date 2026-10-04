import Image from "next/image";
import type { WineColor } from "@/content";

// Bottle PNGs are the design exports, already cropped to the bottle.
const bottles: Record<WineColor, { src: string; width: number; height: number }> = {
  red: { src: "/images/bottle-red.png", width: 582, height: 1966 },
  rose: { src: "/images/bottle-rose.png", width: 606, height: 1966 },
  white: { src: "/images/bottle-white.png", width: 600, height: 1966 },
};

export default function Bottle({
  color,
  alt,
  className,
}: {
  color: WineColor;
  alt: string;
  /** Set the rendered height here; width follows the image's aspect ratio. */
  className: string;
}) {
  const { src, width, height } = bottles[color];
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="120px"
      className={`w-auto shrink-0 ${className}`}
    />
  );
}
