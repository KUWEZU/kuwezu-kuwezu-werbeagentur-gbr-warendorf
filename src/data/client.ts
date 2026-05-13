/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T15:28:24.637Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Qualität",
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
    ueberschrift: "Ihr Kfz-Partner in Warendorf für Qualität",
    ueberschriftHighlight: "Qualität",
    untertext: "Von Autoglas über Bremsen bis Achsvermessung – wir sorgen für Ihre Sicherheit auf der Straße. Kompetent, zuverlässig, fair.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Kfz-Profis mitten in Warendorf",
    text1: "Die KUWEZU Werbeagentur GbR steht in Warendorf für professionelle Kfz-Dienstleistungen auf höchstem Niveau. Ob Autoglasreparatur, Bremsenwartung oder präzise Achsvermessung – wir kümmern uns um die Sicherheit Ihres Fahrzeugs. Mit modernster Technik und langjähriger Erfahrung sind wir Ihr zuverlässiger Partner rund ums Auto.",
    text2: "Uns ist wichtig, dass Sie sicher unterwegs sind. Deshalb arbeiten wir gewissenhaft, transparent und nehmen uns Zeit für persönliche Beratung. Faire Preise und Qualität ohne Kompromisse – darauf können Sie sich verlassen.",
    tags: ["Meisterbetrieb", "Moderne Ausstattung", "Faire Preise", "Persönliche Beratung"],
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
      description: "Steinschlag oder Riss? Wir reparieren oder tauschen Ihre Autoscheiben fachgerecht aus. Mit Originalqualität und schnellem Service kommen Sie sicher wieder auf die Straße.",
      highlights: ["Steinschlagreparatur", "Scheibentausch alle Marken", "Direktabrechnung mit Versicherung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Funktionierende Bremsen sind lebenswichtig. Wir prüfen, warten und erneuern Ihre Bremsanlage mit Qualitätsteilen. Für maximale Sicherheit bei jeder Fahrt.",
      highlights: ["Bremsbeläge & Scheiben", "Bremsflüssigkeitswechsel", "Komplette Bremsanlagen-Inspektion"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung verhindert ungleichen Reifenverschleiß und optimiert Ihr Fahrverhalten. Mit computergestützter Technik stellen wir die Spur exakt ein.",
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
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
