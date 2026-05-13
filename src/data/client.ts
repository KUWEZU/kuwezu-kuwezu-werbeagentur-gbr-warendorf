/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T12:25:11.157Z
 * Kundennummer: 66
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "Autowerkstatt",
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
    ueberschrift: "Ihre Autowerkstatt in Warendorf seit Jahren",
    ueberschriftHighlight: "Autowerkstatt",
    untertext: "Von Karosserie bis Bremsen – professionelle Reparaturen und zuverlässiger Service. Ihr Ersatzwagen steht bereit.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/66/ueber-uns.webp",
    ueberschrift: "Ihre Werkstatt-Profis aus Warendorf",
    text1: "Als etablierte Autowerkstatt in Warendorf kümmern wir uns um alle Belange rund um Ihr Fahrzeug. Unsere Kernkompetenzen liegen in der Karosseriereparatur, Bremsenservice und umfassenden Wartungsarbeiten. Mit modernster Technik und langjähriger Erfahrung bringen wir Ihr Auto wieder in Bestform.",
    text2: "Ehrliche Beratung und faire Preise sind für uns selbstverständlich. Damit Sie mobil bleiben, stellen wir Ihnen während der Reparatur gerne einen Ersatzwagen zur Verfügung. Ihr Vertrauen ist uns wichtig.",
    tags: ["Meisterbetrieb", "Ersatzwagen inklusive", "Moderne Werkstatt", "Faire Preise"],
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
      description: "Von kleinen Dellen bis zu größeren Unfallschäden – wir reparieren Ihre Karosserie fachgerecht. Mit präziser Arbeit und hochwertigen Materialien stellen wir den Originalzustand wieder her.",
      highlights: ["Unfallreparaturen", "Dellenbeseitigung", "Lackierarbeiten"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Während Ihr Fahrzeug bei uns in der Werkstatt ist, bleiben Sie mobil. Wir stellen Ihnen einen zuverlässigen Ersatzwagen zur Verfügung – unkompliziert und zu fairen Konditionen.",
      highlights: ["Verschiedene Fahrzeugklassen", "Schnelle Verfügbarkeit", "Faire Mietpreise"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit hat Priorität. Wir prüfen, warten und reparieren Ihre Bremsanlage mit größter Sorgfalt. Von Bremsbelägen über Bremsscheiben bis zur kompletten Bremsanlage – alles aus einer Hand.",
      highlights: ["Bremsbeläge & Bremsscheiben", "Bremsleitungen", "Bremsflüssigkeitswechsel"],
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
