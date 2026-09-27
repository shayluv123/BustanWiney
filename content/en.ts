import type { Dictionary } from "./types";

// TODO: replace placeholder copy with the final texts.
const en: Dictionary = {
  meta: {
    title: "Bustan HaGalil Winery",
    description: "Bustan HaGalil Winery — red, white and rosé wines from the heart of the Galilee.",
  },
  nav: { about: "About", wines: "Our Wines", contact: "Contact", home: "Home" },
  languageSwitch: { label: "עברית", target: "עבור לעברית" },
  hero: {
    title: "Bustan HaGalil Winery",
    tagline: "Wine from the heart of the Galilee",
  },
  about: {
    heading: "About",
    paragraphs: ["The about text will be added soon."],
  },
  wines: {
    heading: "Our Wines",
    cta: "Discover",
    colors: {
      red: { name: "Red", tagline: "Red wines", description: "A description of our red wines will be added soon." },
      white: { name: "White", tagline: "White wines", description: "A description of our white wines will be added soon." },
      rose: { name: "Rosé", tagline: "Rosé wines", description: "A description of our rosé wines will be added soon." },
    },
  },
  winePage: { back: "Back to wines" },
  contact: {
    heading: "Contact",
    text: "We'd love to hear from you",
    email: "info@example.com",
  },
  footer: { rights: "All rights reserved" },
  notFound: { heading: "Page not found", text: "The page you're looking for doesn't exist.", back: "Back to home" },
};

export default en;
