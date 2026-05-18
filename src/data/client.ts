/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T09:32:24.862Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Werbeagentur",
  ort: "Warendorf",
  slogan: "Ihre Marke",
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
    ueberschrift: "Kreative Werbung die Ihre Marke stärkt",
    ueberschriftHighlight: "Ihre Marke",
    untertext: "Mit frischen Ideen und durchdachten Konzepten machen wir Ihr Unternehmen in Warendorf und Umgebung sichtbar. Persönlich, kreativ, erfolgreich.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Werbeagentur aus Warendorf",
    text1: "Als KUWEZU Werbeagentur GbR entwickeln wir in Warendorf maßgeschneiderte Werbelösungen für Unternehmen jeder Größe. Von der ersten Idee bis zur finalen Umsetzung begleiten wir Sie mit kreativen Konzepten, durchdachtem Design und zielgerichteter Kommunikation. Unser Team verbindet langjährige Erfahrung mit frischem Denken.",
    text2: "Wir hören zu, denken mit und setzen um – partnerschaftlich und verlässlich. Dabei legen wir Wert auf ehrliche Beratung, transparente Prozesse und Ergebnisse, die wirklich funktionieren. Ihre Ziele sind unser Antrieb.",
    tags: ["Kreative Konzepte", "Persönliche Betreuung", "Regionale Expertise", "Verlässlicher Partner"],
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
      description: "Professionelle Autoglaslösungen für Fahrzeuge aller Art. Vom Steinschlag bis zum kompletten Scheibentausch – schnell, sauber und fachgerecht ausgeführt.",
      highlights: ["Steinschlagreparatur", "Scheibenwechsel", "Schnelle Terminvergabe"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Zuverlässiger Bremsservice für Ihre Sicherheit im Straßenverkehr. Wir prüfen, warten und erneuern Bremsanlagen nach Herstellervorgaben.",
      highlights: ["Bremsbelagwechsel", "Bremsscheibenerneuerung", "Bremsenprüfung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung für optimale Fahrstabilität und geringen Reifenverschleiß. Mit moderner Technik sorgen wir für exakte Fahrwerkseinstellung.",
      highlights: ["3D-Achsvermessung", "Spureinstellung", "Fahrwerksdiagnose"],
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
