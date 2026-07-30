import { mkdir, readFile, writeFile } from "node:fs/promises";

const routes = {
  agriturismo: {
    title: "Agriturismo sul Lago di Bracciano | Tra Lago e Cielo",
    description:
      "Vista lago, giardino, piscina e salone: scopri gli spazi di Tra Lago e Cielo a Bracciano.",
  },
  matrimoni: {
    title: "Matrimoni ed eventi a Bracciano | Tra Lago e Cielo",
    description:
      "Una tenuta vista lago per matrimoni ed eventi: rito civile in villa, giardino di 40.000 mq e salone fino a 110 persone.",
  },
  vini: {
    title: "Produzione vini e degustazioni | Tra Lago e Cielo",
    description:
      "Vermentino, Merlot e Chardonnay: scopri le etichette e richiedi informazioni sulle degustazioni.",
  },
  contatti: {
    title: "Contatti e indicazioni | Tra Lago e Cielo",
    description:
      "Contatta Tra Lago e Cielo, richiedi disponibilità o organizza una visita alla tenuta di Bracciano.",
  },
};

const source = await readFile(
  new URL("../index.html", import.meta.url),
  "utf8",
);
for (const [slug, meta] of Object.entries(routes)) {
  let html = source.replace(
    '<meta charset="UTF-8" />',
    '<meta charset="UTF-8" />\n    <base href="../" />',
  );
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  const replaceMeta = (markup, key, value) =>
    markup.replace(
      new RegExp(`<meta\\s+${key}\\s+content="[^"]*"\\s*\\/>`, "s"),
      `<meta ${key} content="${value}" />`,
    );
  html = replaceMeta(html, 'name="description"', meta.description);
  html = replaceMeta(html, 'property="og:title"', meta.title);
  html = replaceMeta(html, 'property="og:description"', meta.description);
  html = replaceMeta(
    html,
    'property="og:url"',
    `https://tralagoecielo.it/${slug}/`,
  );
  html = replaceMeta(html, 'name="twitter:title"', meta.title);
  html = replaceMeta(html, 'name="twitter:description"', meta.description);
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/s,
    `<link rel="canonical" href="https://tralagoecielo.it/${slug}/" />`,
  );
  await mkdir(new URL(`../${slug}/`, import.meta.url), { recursive: true });
  await writeFile(
    new URL(`../${slug}/index.html`, import.meta.url),
    html,
    "utf8",
  );
}
