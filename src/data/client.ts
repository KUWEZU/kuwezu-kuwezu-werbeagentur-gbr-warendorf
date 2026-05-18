/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T08:23:47.567Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Werbeagentur",
  ort: "Warendorf",
  slogan: "Ihre Kunden",
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
    ueberschrift: "Kreative Werbung die Ihre Kunden überzeugt",
    ueberschriftHighlight: "Ihre Kunden",
    untertext: "Von der ersten Idee bis zur fertigen Kampagne – KUWEZU Werbeagentur in Warendorf macht Ihre Marke sichtbar und erfolgreich.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Werbeagentur in Warendorf mit Leidenschaft für starke Marken",
    text1: "KUWEZU Werbeagentur steht für kreative Werbelösungen aus Warendorf, die ankommen. Wir entwickeln individuelle Konzepte für Unternehmen jeder Größe – von der visuellen Gestaltung über Print bis hin zu digitalen Kampagnen. Mit Erfahrung, frischen Ideen und lokalem Know-how bringen wir Ihre Botschaft genau dorthin, wo sie wirkt.",
    text2: "Wir arbeiten eng mit unseren Kunden zusammen und setzen auf ehrliche Beratung statt leerer Versprechen. Unser Anspruch: Werbung, die nicht nur gut aussieht, sondern echte Ergebnisse liefert. Persönlich, verlässlich und immer auf Augenhöhe.",
    tags: ["Inhabergeführt", "Kreative Konzepte", "Persönliche Betreuung", "Regionale Expertise"],
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
      description: "Professionelle Autoglasbeschriftung und Fahrzeugwerbung für maximale Sichtbarkeit im Straßenverkehr. Wir gestalten und realisieren auffällige Designs, die Ihr Unternehmen mobil machen.",
      highlights: ["Individuelle Fahrzeuggestaltung", "Hochwertige Folierung", "Langlebige Materialien"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Entwicklung durchschlagender Markenkommunikation, die im Gedächtnis bleibt. Von der Strategie bis zur Umsetzung sorgen wir dafür, dass Ihre Marke die richtigen Bremspunkte setzt.",
      highlights: ["Strategische Markenführung", "Zielgruppengerechte Ansprache", "Messbare Kampagnenerfolge"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Ausrichtung Ihrer Kommunikationsstrategie für optimale Marktpositionierung. Wir analysieren, justieren und bringen Ihre Werbemaßnahmen exakt auf Kurs.",
      highlights: ["Strategische Positionierung", "Markt- und Zielgruppenanalyse", "Optimierte Kommunikationswege"],
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
