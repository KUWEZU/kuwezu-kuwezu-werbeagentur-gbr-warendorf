/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:53:48.124Z
 * Kundennummer: 141
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Kfz-Profi",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "info@kuwezu.de",
  website: "",
  logo: "https://r2.kuwezu.de/konzepte/autofit/autofit_logo.webp",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/141/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihr Kfz-Profi in Warendorf für Service",
    ueberschriftHighlight: "Kfz-Profi",
    untertext: "Von Autoglas über präzise Achsvermessung bis zum Ersatzwagen – bei uns sind Sie und Ihr Fahrzeug in besten Händen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/141/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihr verlässlicher Partner in Warendorf",
    text1: "Die KUWEZU Werbeagentur GbR steht in Warendorf für professionellen Kfz-Service mit Weitblick. Ob Steinschlag im Autoglas, notwendige Achsvermessung oder ein Ersatzwagen für die Überbrückszeit – wir bieten Ihnen kompetente Lösungen aus einer Hand. Mit Fachwissen und modernem Equipment sorgen wir dafür, dass Sie schnell wieder mobil sind.",
    text2: "Wir arbeiten präzise, transparent und kundennah. Ihr Vertrauen ist unsere Basis – deshalb setzen wir auf ehrliche Beratung, faire Preise und Termintreue. Bei uns zählt der Mensch, nicht nur das Fahrzeug.",
    tags: ["Schneller Service", "Faire Preise", "Persönliche Beratung", "Mobilitätsgarantie"],
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
      description: "Steinschlag oder Riss im Autoglas? Wir reparieren oder tauschen Windschutzscheiben und Seitenscheiben fachgerecht aus. Schnell, sauber und mit Garantie – oft übernimmt die Versicherung die Kosten komplett.",
      highlights: ["Reparatur & Austausch", "Versicherungsabwicklung", "Schnelle Terminvergabe"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Mit modernster Messtechnik vermessen wir Ihre Achsen präzise und stellen die optimale Spur ein. Das spart Reifen, senkt den Verbrauch und erhöht Ihre Fahrsicherheit merklich.",
      highlights: ["Computergestützte Vermessung", "Präzise Spureinstellung", "Mehr Fahrsicherheit"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Wenn Ihr Fahrzeug in die Werkstatt muss, bleiben Sie mit unserem Ersatzwagen mobil. Unkompliziert, zuverlässig und zu fairen Konditionen – damit Sie Ihren Alltag ohne Einschränkungen meistern.",
      highlights: ["Sofort verfügbar", "Faire Mietkonditionen", "Flexible Nutzungsdauer"],
    }
  ] as { slug: string; title: string; bild: string; description: string; highlights: string[] }[],

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
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
