/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T11:38:24.039Z
 * Kundennummer: 66
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "mit Herz",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "info@kuwezu.de",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/66/logo.png",
  standort_bild: "https://r2.kuwezu.de/kunden/66/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#ffd100",
    secondary: "#ffd100",
    accent: "#ffd100",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/66/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Herz",
    ueberschriftHighlight: "mit Herz",
    untertext: "Von Karosserieinstandsetzung bis Bremsenservice – bei uns ist Ihr Fahrzeug in besten Händen. Schnell, zuverlässig und fair.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/66/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihre Werkstatt-Partner in Warendorf",
    text1: "Als etablierte Autowerkstatt in Warendorf kümmern wir uns kompetent um alle Belange rund um Ihr Fahrzeug. Von professionellen Karosseriearbeiten über zuverlässigen Bremsenservice bis zur Bereitstellung von Ersatzwagen – wir bieten Ihnen das komplette Leistungsspektrum einer modernen Fachwerkstatt.",
    text2: "Unser Anspruch ist eine ehrliche Beratung und saubere Arbeit zu fairen Preisen. Wir nehmen uns Zeit für Sie und Ihr Auto, denn Vertrauen ist die Basis unserer Arbeit.",
    tags: ["Meisterbetrieb", "Faire Preise", "Persönliche Beratung", "Schneller Service"],
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
      description: "Professionelle Karosseriearbeiten für alle Fahrzeugtypen. Von der Dellenreparatur bis zur kompletten Unfallschadenbehebung bringen wir Ihr Auto wieder in Form.",
      highlights: ["Unfallschadenbehebung", "Lackierarbeiten", "Dellenbeseitigung"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie mobil bleiben, stellen wir Ihnen während der Reparatur einen zuverlässigen Ersatzwagen zur Verfügung. Unkompliziert und zu fairen Konditionen.",
      highlights: ["Gepflegte Fahrzeuge", "Flexible Buchung", "Faire Mietkonditionen"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit steht an erster Stelle. Wir prüfen, warten und reparieren Ihre Bremsanlage mit modernster Technik und Original-Ersatzteilen.",
      highlights: ["Bremsscheiben & Beläge", "Bremsleitungen", "Bremsflüssigkeitswechsel"],
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

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "+4917621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
