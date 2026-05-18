/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T09:17:13.918Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Werbeagentur",
  ort: "Warendorf",
  slogan: "Autoglas und Fahrwerk",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "info@kuwezu.de",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/67/logo.png",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/67/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Werkstatt für Autoglas und Fahrwerk",
    ueberschriftHighlight: "Autoglas und Fahrwerk",
    untertext: "Professionelle Reparatur und Service in Warendorf. Von der Scheibenreparatur bis zur präzisen Achsvermessung – schnell, zuverlässig, fair.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Fachwerkstatt in Warendorf",
    text1: "Die KUWEZU Werbeagentur GbR steht in Warendorf für kompetenten Kfz-Service mit Schwerpunkt auf Autoglas, Bremsen und Fahrwerkstechnik. Mit moderner Ausstattung und fundiertem Fachwissen kümmern wir uns um Ihr Fahrzeug – von der kleinen Steinschlagreparatur bis zur komplexen Achsvermessung. Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.",
    text2: "Wir arbeiten präzise, transparent und nehmen uns Zeit für persönliche Beratung. Faire Preise und verlässliche Termine sind für uns selbstverständlich. Ihr Auto ist bei uns in besten Händen.",
    tags: ["Meisterbetrieb", "Moderne Technik", "Faire Preise", "Persönliche Beratung"],
    stats: [
      { value: "10+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Von der Steinschlagreparatur bis zum kompletten Scheibenwechsel – wir kümmern uns um alle Autoglas-Arbeiten. Mit Originalscheiben und professioneller Kalibrierung moderner Fahrassistenzsysteme.",
      highlights: ["Steinschlagreparatur", "Scheibenwechsel alle Marken", "Kalibrierung Assistenzsysteme"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sicherheit geht vor: Wir prüfen, warten und erneuern Ihre Bremsanlage nach Herstellervorgaben. Vom Bremsbelag über Bremsscheiben bis zur Bremsflüssigkeit – alles aus einer Hand.",
      highlights: ["Bremsbeläge & Bremsscheiben", "Bremsflüssigkeitswechsel", "Komplette Bremsanlagen"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise 3D-Achsvermessung mit modernster Computertechnik für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß. Inklusive Einstellung und Dokumentation.",
      highlights: ["3D-Achsvermessung", "Fahrwerkseinstellung", "Spureinstellung alle Achsen"],
    }
  ],

  // ── Karriere ───────────────────────────────────────────────────────────────
  karriere: {
    jobs: [
      { title: "Fachkraft (m/w/d)",       type: "Vollzeit",   experience: "Berufserfahrung erwünscht"  },
      { title: "Auszubildende (m/w/d)",    type: "Ausbildung", experience: "Schulabschluss erforderlich" },
    ],
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: false as boolean,
  oeffnungszeiten: {
    mo_fr: "" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Nach Vereinbarung"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  "Test" as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "+4917621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
