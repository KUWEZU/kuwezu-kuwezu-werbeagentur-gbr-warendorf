/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:44:24.496Z
 * Kundennummer: 141
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "besten Händen",
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
    ueberschrift: "Ihr Fahrzeug in besten Händen",
    ueberschriftHighlight: "besten Händen",
    untertext: "Von Autoglasreparatur über präzise Achsvermessung bis zum Ersatzwagen – wir sorgen für Ihre Mobilität in Warendorf.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/141/ueber-uns.webp",
    ueberschrift: "Ihre Werkstatt für Autoglas und mehr in Warendorf",
    text1: "Als etablierte Fachwerkstatt in Warendorf kümmern wir uns um alle Belange rund um Ihr Fahrzeug. Ob Steinschlag im Autoglas, notwendige Achsvermessung oder ein zuverlässiger Ersatzwagen – wir bieten Ihnen schnelle, kompetente Lösungen. Mit moderner Technik und geschultem Personal stellen wir sicher, dass Sie schnell wieder sicher unterwegs sind.",
    text2: "Ihre Zufriedenheit und Sicherheit stehen bei uns an erster Stelle. Wir arbeiten präzise, transparent und nehmen uns Zeit für eine ehrliche Beratung. Vertrauen Sie auf unsere Erfahrung und persönlichen Service direkt vor Ort.",
    tags: ["Schneller Service", "Moderne Technik", "Faire Preise", "Persönliche Beratung"],
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
      description: "Steinschlag oder Glasbruch? Wir reparieren und tauschen Autoglas schnell und fachgerecht aus. Mit hochwertigen Materialien sorgen wir für klare Sicht und Ihre Sicherheit.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch aller Marken", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Eine präzise Achsvermessung verhindert ungleichmäßigen Reifenverschleiß und verbessert Ihre Fahrsicherheit. Mit modernster Messtechnik stellen wir die optimale Fahrwerksgeometrie her.",
      highlights: ["Computergestützte Vermessung", "Fahrwerkseinstellung", "Reifenschutz"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Während Ihr Fahrzeug bei uns in Reparatur ist, bleiben Sie mobil. Wir stellen Ihnen zuverlässige Ersatzwagen zur Verfügung, damit Sie keine Termine verpassen.",
      highlights: ["Gepflegte Fahrzeuge", "Flexible Mietdauer", "Unkomplizierte Abwicklung"],
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
