import type { Dictionary } from "./types";

// TODO: replace placeholder copy with the final texts.
const he: Dictionary = {
  meta: {
    title: "יקב בוסתן הגליל",
    description: "יקב בוסתן הגליל — יינות אדום, לבן ורוזה מלב הגליל.",
  },
  nav: { about: "אודות", wines: "היינות שלנו", contact: "צור קשר", home: "דף הבית" },
  languageSwitch: { label: "English", target: "Switch to English" },
  hero: {
    title: "יקב בוסתן הגליל",
    tagline: "יין מלב הגליל",
  },
  about: {
    heading: "אודות",
    paragraphs: ["טקסט האודות יתווסף בקרוב."],
  },
  wines: {
    heading: "היינות שלנו",
    cta: "לגלות עוד",
    colors: {
      red: { name: "אדום", tagline: "יינות אדומים", description: "תיאור היינות האדומים יתווסף בקרוב." },
      white: { name: "לבן", tagline: "יינות לבנים", description: "תיאור היינות הלבנים יתווסף בקרוב." },
      rose: { name: "רוזה", tagline: "יינות רוזה", description: "תיאור יינות הרוזה יתווסף בקרוב." },
    },
  },
  winePage: { back: "חזרה ליינות" },
  contact: {
    heading: "צור קשר",
    text: "נשמח לשמוע מכם",
    email: "info@example.com",
  },
  footer: { rights: "כל הזכויות שמורות" },
  notFound: { heading: "הדף לא נמצא", text: "הדף שחיפשתם אינו קיים.", back: "חזרה לדף הבית" },
};

export default he;
