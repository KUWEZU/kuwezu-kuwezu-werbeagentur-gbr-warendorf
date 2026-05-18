/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T09:54:27.592Z
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
    untertext: "Professionelle Reparatur und Wartung in Warendorf. Von Steinschlag bis Achsvermessung – wir sorgen für Ihre Sicherheit.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Fachwerkstatt im Herzen von Warendorf",
    text1: "Bei KUWEZU in Warendorf sind Sie richtig, wenn es um Autoglas, Bremsen und Fahrwerk geht. Mit langjähriger Erfahrung und modernster Technik kümmern wir uns um alle Reparaturen und Wartungsarbeiten an Ihrem Fahrzeug. Ob Steinschlag-Reparatur, Bremsenwechsel oder präzise Achsvermessung – wir arbeiten schnell, zuverlässig und zu fairen Preisen.",
    text2: "Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. Wir nehmen uns Zeit für eine ehrliche Beratung und transparente Kostenkalkulation. Ihr Fahrzeug ist bei uns in den besten Händen.",
    tags: ["Meisterbetrieb", "Moderne Technik", "Faire Preise", "Schneller Service"],
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
      description: "Von der Steinschlag-Reparatur bis zum kompletten Scheibenwechsel – wir kümmern uns um alle Autoglasschäden. Schnelle Terminvergabe und Direktabrechnung mit Ihrer Versicherung.",
      highlights: ["Steinschlag-Reparatur", "Scheibenwechsel", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sicherheit geht vor: Wir prüfen, warten und tauschen Ihre Bremsanlage mit Originalteilen oder hochwertigen Alternativen. Für optimale Bremswirkung und Ihre Sicherheit im Straßenverkehr.",
      highlights: ["Bremsbeläge & -scheiben", "Bremsflüssigkeit", "Bremsprüfung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung mit moderner 3D-Technologie sorgt für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß. Spart Sprit und schont Ihre Reifen.",
      highlights: ["3D-Achsvermessung", "Spureinstellung", "Fahrwerkscheck"],
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
