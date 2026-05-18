/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T08:52:44.940Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Werbeagentur",
  ort: "Warendorf",
  slogan: "Fachwerkstatt",
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
    ueberschrift: "Ihre Fachwerkstatt in Warendorf für Autoglas",
    ueberschriftHighlight: "Fachwerkstatt",
    untertext: "Professionelle Autoglas-Reparatur, Bremsenwartung und präzise Achsvermessung. Schnell, zuverlässig und zu fairen Preisen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Autowerkstatt in Warendorf",
    text1: "Als erfahrene Fachwerkstatt in Warendorf kümmern wir uns um alle Belange rund um Ihr Fahrzeug. Von der professionellen Autoglas-Reparatur über Bremsenwartung bis zur präzisen Achsvermessung bieten wir Ihnen einen Rundum-Service für Ihre Mobilität. Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.",
    text2: "Wir arbeiten mit modernster Technik und geschultem Fachpersonal. Transparente Kostenvoranschläge, kurze Wartezeiten und ehrliche Beratung sind für uns selbstverständlich. Ihr Auto ist bei uns in guten Händen.",
    tags: ["Meisterbetrieb", "Moderne Werkstatt", "Faire Preise", "Schneller Service"],
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
      description: "Wir reparieren und tauschen Autoscheiben aller Marken schnell und fachgerecht aus. Ob Steinschlag oder Komplettschaden – wir kümmern uns um die direkte Abwicklung mit Ihrer Versicherung.",
      highlights: ["Steinschlag-Reparatur", "Scheibentausch alle Marken", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit liegt uns am Herzen. Wir prüfen, warten und erneuern Ihre Bremsanlage mit Originalteilen oder hochwertigen Alternativen. Schnelle Termine und verlässliche Arbeit garantiert.",
      highlights: ["Bremsbelag-Wechsel", "Bremsscheiben-Service", "Bremsenprüfung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Mit moderner 3D-Technik vermessen wir die Achsgeometrie Ihres Fahrzeugs präzise und stellen sie optimal ein. Das sorgt für sicheres Fahren, gleichmäßigen Reifenverschleiß und optimalen Fahrkomfort.",
      highlights: ["3D-Achsvermessung", "Spureinstellung", "Fahrwerks-Check"],
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
