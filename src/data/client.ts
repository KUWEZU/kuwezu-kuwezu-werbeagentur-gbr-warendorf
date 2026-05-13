/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T15:58:48.824Z
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
    ueberschrift: "Ihr Kfz-Profi in Warendorf für Sicherheit",
    ueberschriftHighlight: "Sicherheit",
    untertext: "Autoglas, Bremsen und Achsvermessung – präzise Arbeit für Ihr Fahrzeug. Schnelle Termine und zuverlässiger Service direkt vor Ort.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihr Partner in Warendorf",
    text1: "Als etablierte Kfz-Werkstatt in Warendorf kümmern wir uns um alle sicherheitsrelevanten Arbeiten an Ihrem Fahrzeug. Von der professionellen Autoglasreparatur über Bremsenwartung bis zur präzisen Achsvermessung – bei uns ist Ihr Auto in guten Händen. Unser erfahrenes Team arbeitet mit moderner Technik und kennt sich mit allen Fahrzeugmarken aus.",
    text2: "Wir nehmen uns Zeit für eine ehrliche Beratung und transparente Kostenvoranschläge. Qualität, Zuverlässigkeit und faire Preise stehen bei uns an erster Stelle. Ihre Zufriedenheit und Ihre Sicherheit im Straßenverkehr sind unser Antrieb.",
    tags: ["Faire Preise", "Schnelle Termine", "Erfahrenes Team", "Alle Marken"],
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
      description: "Vom Steinschlag bis zum kompletten Scheibentausch – wir reparieren und erneuern Autoglas aller Art. Schnell, fachgerecht und mit Direktabrechnung über Ihre Versicherung.",
      highlights: ["Steinschlag-Reparatur", "Scheibentausch alle Marken", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sichere Bremsen retten Leben. Wir prüfen, warten und erneuern Bremsbeläge, Bremsscheiben und die komplette Bremsanlage nach Herstellervorgaben.",
      highlights: ["Bremsbeläge & Scheiben", "Bremsleitungen", "Bremsflüssigkeitswechsel"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung für optimalen Fahrkomfort und gleichmäßigen Reifenverschleiß. Mit modernster Messtechnik stellen wir die Spur exakt ein.",
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
