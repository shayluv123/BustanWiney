import type { Dictionary } from "./types";

// TODO: English copy is a draft translation of the Hebrew design text — needs the owner's review.
const en: Dictionary = {
  meta: {
    title: "Bustan HaGalil Winery",
    description: "Bustan HaGalil Winery — red, white and rosé wines from the heart of the Galilee.",
  },
  languageSwitch: { label: "עברית", target: "עבור לעברית" },
  about: {
    paragraphs: [
      "Bustan HaGalil Winery is the work of winemaker and grower Shay Lavi",
      "Our wines are made with a philosophy of minimal intervention, organic and biodynamic farming",
      "The winery produces a limited quantity of wine, combining meticulous vineyard work, modern equipment and the guidance of some of Israel's finest winemakers and growers, in pursuit of wine that is delicious, precise and local",
    ],
  },
  wines: {
    colors: {
      red: {
        name: "Red wine",
        wines: [
          {
            name: "Syrah",
            description: ["A red wine from Syrah grapes, from a unique vineyard near Merhavia in the Jezreel Valley"],
          },
          {
            name: "Petit Verdot & Syrah Blend",
            description: [
              "A powerful red blend with real presence, based on Petit Verdot from a vineyard in the Golan Heights, near the Chateau Golan vineyards. 40% of the wine comes from the Syrah of our first wine",
            ],
          },
        ],
      },
      rose: {
        name: "Rosé wine",
        wines: [
          {
            name: "Grenache Rosé",
            description: ["A light, clean rosé from quality Grenache grapes grown in Moshav HaYogev, made as an ", { latin: "Estate" }, " wine"],
          },
          {
            name: "Cinsault Rosé",
            description: [
              "A rosé from carefully grown Golan Heights Cinsault, made in a natural, ",
              { latin: "unfiltered & hazy" },
              " style with no additives or fining agents — to keep the grape's flavors just as they are. Old world meets new in every bottle",
            ],
          },
        ],
      },
      white: {
        name: "White wine",
        wines: [
          {
            name: "Roussanne",
            description: [
              "A dry white from hand-harvested Golan Heights Roussanne, made at Pelech with a natural, unfiltered approach. The wine stays close to the soil — no shortcuts and no fining chemicals — just the grape itself, as it is",
            ],
          },
          {
            name: "Chenin Blanc",
            description: [
              "A dry white from a vineyard in Beit Lehem HaGlilit, made in the ",
              { latin: "Fumé" },
              " style in a large French oak barrel. Unlike the natural, minimal-intervention Roussanne, this is a precise, carefully crafted wine that highlights the variety's natural minerality and elegance",
            ],
          },
        ],
      },
    },
  },
  winePage: { back: "Back" },
  contact: { email: "bustanhagalilwinery@gmail.com" },
  notFound: { heading: "Page not found", text: "The page you're looking for doesn't exist.", back: "Back to home" },
};

export default en;
