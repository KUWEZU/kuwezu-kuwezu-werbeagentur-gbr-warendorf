/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T15:27:49.491Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Sicherheit",
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
    ueberschrift: "Ihr Kfz-Profi für Sicherheit in Warendorf",
    ueberschriftHighlight: "Sicherheit",
    untertext: "Von Autoglasreparatur über Bremsenwartung bis zur professionellen Achsvermessung – wir sorgen für Ihre sichere Fahrt.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihr zuverlässiger Partner in Warendorf",
    text1: "Als erfahrene Kfz-Profis in Warendorf sind wir Ihre Anlaufstelle für alle sicherheitsrelevanten Arbeiten an Ihrem Fahrzeug. Unser Team verbindet handwerkliches Können mit modernster Technik – von der Autoglasreparatur über Bremsenwartung bis zur präzisen Achsvermessung. Wir arbeiten herstellerunabhängig für alle Fahrzeugmarken.",
    text2: "Ehrliche Beratung und transparente Preise sind für uns selbstverständlich. Wir nehmen uns Zeit für Ihre Fragen und sorgen dafür, dass Sie sicher unterwegs sind. Ihr Vertrauen ist unser Antrieb.",
    tags: ["Markenunabhängig", "Modernste Technik", "Faire Preise", "Erfahrenes Team"],
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
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren oder tauschen Ihr Autoglas schnell und fachgerecht aus – für klare Sicht und Ihre Sicherheit.",
      highlights: ["Reparatur von Steinschlägen", "Scheibenwechsel aller Marken", "Direkte Abrechnung mit Versicherung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Funktionierende Bremsen sind lebenswichtig. Unsere Experten prüfen, warten und erneuern Ihre Bremsanlage mit Originalteilen oder hochwertigen Alternativen.",
      highlights: ["Bremsscheiben & Bremsbeläge", "Bremsflüssigkeitswechsel", "Komplette Bremsanlagenwartung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Ungleicher Reifenverschleiß oder zieht Ihr Auto zur Seite? Mit computergestützter Achsvermessung stellen wir die optimale Spureinstellung präzise her.",
      highlights: ["3D-Achsvermessung", "Fahrwerksgeometrie-Prüfung", "Spur- und Sturzeinstellung"],
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
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
