/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-14T09:48:53.402Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Werbeagentur",
  ort: "Warendorf",
  slogan: "Autoglas und Fahrwerksservice",
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
    ueberschrift: "Ihre Werkstatt für Autoglas und Fahrwerksservice",
    ueberschriftHighlight: "Autoglas und Fahrwerksservice",
    untertext: "Professionelle Autoreparaturen in Warendorf. Von Glasschäden über Bremsen bis zur Achsvermessung – alles aus einer Hand.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Kfz-Experten aus Warendorf",
    text1: "Bei KUWEZU stehen Qualität und Präzision im Mittelpunkt. Unser Team in Warendorf bietet Ihnen umfassende Kfz-Services: von der fachgerechten Autoglasreparatur über Bremsenservice bis hin zur exakten Achsvermessung. Mit modernem Equipment und langjähriger Erfahrung sorgen wir dafür, dass Ihr Fahrzeug sicher und zuverlässig unterwegs ist.",
    text2: "Wir nehmen uns Zeit für eine gründliche Diagnose und transparente Beratung. Faire Preise, schnelle Terminvergabe und handwerkliche Sorgfalt – darauf können Sie sich bei uns verlassen. Ihr Fahrzeug ist bei uns in besten Händen.",
    tags: ["Meisterbetrieb", "Moderne Technik", "Faire Preise", "Schnelle Termine"],
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
      description: "Steinschlag oder Riss? Wir reparieren und tauschen Autoglas aller Fahrzeugtypen fachgerecht aus. Schnell, sauber und mit Garantie – für klare Sicht und Ihre Sicherheit.",
      highlights: ["Steinschlagreparatur", "Scheibentausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sichere Bremsen sind lebenswichtig. Wir prüfen, warten und erneuern Ihre Bremsanlage mit Markenbauteilen. Professionell und präzise – für maximale Sicherheit im Straßenverkehr.",
      highlights: ["Bremsbeläge wechseln", "Bremsflüssigkeit prüfen", "Bremssystem-Check"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Ungleicher Reifenverschleiß oder Spurprobleme? Mit computergestützter Achsvermessung stellen wir die Fahrwerksgeometrie exakt ein. Für optimales Fahrverhalten und längere Reifenlebensdauer.",
      highlights: ["3D-Achsvermessung", "Spureinstellung", "Fahrwerks-Diagnose"],
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
