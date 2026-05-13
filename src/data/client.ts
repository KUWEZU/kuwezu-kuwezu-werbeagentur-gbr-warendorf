/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T11:56:21.659Z
 * Kundennummer: 66
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "Qualität",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "info@kuwezu.de",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/66/logo.png",
  standort_bild: "https://r2.kuwezu.de/kunden/66/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#024089",
    secondary: "#ffd100",
    accent: "#ffd100",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/66/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Qualität",
    ueberschriftHighlight: "Qualität",
    untertext: "Von Karosserie bis Bremsen – professionelle Reparatur und Service mit Ersatzwagen für Ihre Mobilität.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/66/ueber-uns.webp",
    ueberschrift: "Ihre zuverlässige Autowerkstatt in Warendorf",
    text1: "KUWEZU Werbeagentur GbR steht für kompetente Kfz-Reparaturen in Warendorf. Unser Team verbindet handwerkliches Können mit moderner Technik – ob Karosseriearbeiten, Bremsenwartung oder andere Reparaturen. Wir sorgen dafür, dass Ihr Fahrzeug sicher und zuverlässig läuft.",
    text2: "Damit Sie mobil bleiben, bieten wir Ihnen während der Reparatur einen Ersatzwagen an. Ehrliche Beratung, faire Preise und termingerechte Arbeit sind für uns selbstverständlich.",
    tags: ["Meisterbetrieb", "Ersatzwagen inklusive", "Faire Preise", "Schneller Service"],
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
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Vom kleinen Kratzer bis zum großen Unfallschaden – wir reparieren Ihre Karosserie fachgerecht. Mit präziser Arbeit und hochwertigen Materialien bringen wir Ihr Fahrzeug wieder in Form.",
      highlights: ["Unfallreparaturen", "Lackierarbeiten", "Dellen und Beulen"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Bleiben Sie während der Reparatur mobil. Wir stellen Ihnen einen Ersatzwagen zur Verfügung, damit Sie Ihren Alltag ohne Einschränkungen meistern können.",
      highlights: ["Sofort verfügbar", "Unkomplizierte Abwicklung", "Für die gesamte Reparaturdauer"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Funktionierende Bremsen sind lebenswichtig. Wir prüfen, warten und reparieren Ihre Bremsanlage mit höchster Sorgfalt für maximale Sicherheit im Straßenverkehr.",
      highlights: ["Bremsenwartung", "Bremsbeläge wechseln", "Bremsflüssigkeit prüfen"],
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
    facebook:  "https://www.facebook.com/KUWEZU/" as string | null,
    instagram: "https://www.instagram.com/kuwezu_werbeagentur/" as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "+4917621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
