/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-05T06:40:03.740Z
 * Kundennummer: 57
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "professionell & zuverlässig",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/57/logo.png",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#95c11f",
    secondary: "#f7a600",
    accent: "#636363",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/57/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: " — professionell & zuverlässig",
    ueberschriftHighlight: "professionell & zuverlässig",
    untertext: "Ihr Partner für alle Belange rund um  in Warendorf und Umgebung.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/57/ueber-uns.webp",
    ueberschrift: "KUWEZU Werbeagentur GbR — Ihr Partner in Warendorf",
    text1: "Als erfahrener -Betrieb in Warendorf bieten wir unseren Kunden seit Jahren zuverlässigen Service und kompetente Beratung. Mit Fachkompetenz und modernen Methoden lösen wir Ihre Anliegen effizient und zuverlässig.",
    text2: "Wir setzen auf höchste Qualität, transparente Preise und persönlichen Service — damit Sie rundum zufrieden sind.",
    tags: ["Qualität", "Zuverlässigkeit", "Faire Preise", "Erfahrung"],
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
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Professionelle Achsvermessung — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Professionelle Autoglas — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Professionelle Bremsen — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "elektroautos",
      title: "Elektroautos",
      bild: "https://r2.kuwezu.de/bibliothek/Elektroautos/1777878408924-leistung_elektroautos.webp",
      description: "Professionelle Elektroautos — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
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
  tuev_termine: true as boolean,
  oeffnungszeiten: {
    mo_fr: "09:00 – 18:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 09:00 – 18:00"],
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
