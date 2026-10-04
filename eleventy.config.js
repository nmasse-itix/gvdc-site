import { load as chargerYaml } from "js-yaml";

export default function (eleventyConfig) {
  // Fichiers de données modifiés via Pages CMS (src/_data/*.yml)
  eleventyConfig.addDataExtension("yml,yaml", (contenu) => chargerYaml(contenu));

  // Images et autres fichiers statiques copiés tels quels
  eleventyConfig.addPassthroughCopy("src/*.{png,jpg,jpeg,webp,svg,ico}");

  // "29,80" ou "29.8" → { euros: "29", centimes: "80" }
  eleventyConfig.addFilter("prix", (valeur) => {
    const [euros, centimes = ""] = String(valeur).trim().replace(".", ",").split(",");
    // Espace insécable avant « : ; ! ? » (typographie française)
  eleventyConfig.addFilter("nbsp", (texte) =>
    String(texte).replace(/ ([:;!?»])/g, "\u00a0$1").replace(/« /g, "«\u00a0")
  );

  return { euros, centimes: centimes.padEnd(2, "0") };
  });

  // "06 20 17 47 54" → "+33620174754" (pour les liens tel:)
  eleventyConfig.addFilter("tel", (numero) => {
    const chiffres = String(numero).replace(/[^\d+]/g, "");
    return chiffres.startsWith("0") ? "+33" + chiffres.slice(1) : chiffres;
  });

  // Espace insécable avant « : ; ! ? » (typographie française)
  eleventyConfig.addFilter("nbsp", (texte) =>
    String(texte).replace(/ ([:;!?»])/g, "\u00a0$1").replace(/« /g, "«\u00a0")
  );

  return {
    dir: { input: "src", output: "_site" },
  };
}
