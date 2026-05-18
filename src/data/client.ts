/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T09:21:32.107Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Werbeagentur",
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
    ueberschrift: "Ihre Kfz-Werkstatt in Warendorf für Sicherheit",
    ueberschriftHighlight: "Sicherheit",
    untertext: "Professionelle Autoglas-Reparatur, Bremsen-Service und präzise Achsvermessung. Ihr Fahrzeug in zuverlässigen Händen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Kfz-Spezialisten im Herzen von Warendorf",
    text1: "KUWEZU Werbeagentur GbR steht in Warendorf für kompetenten Service rund um Ihr Fahrzeug. Ob beschädigtes Autoglas, nachlassende Bremswirkung oder ungleichmäßiger Reifenverschleiß – wir sorgen mit Fachwissen und moderner Technik dafür, dass Sie sicher unterwegs sind. Unsere Werkstatt verbindet handwerkliche Präzision mit kundenorientierter Beratung.",
    text2: "Bei uns steht Qualität an erster Stelle. Wir nehmen uns Zeit für eine gründliche Diagnose und arbeiten transparent – Sie wissen immer, was gemacht wird und warum. Faire Preise und ehrliche Beratung sind für uns selbstverständlich.",
    tags: ["Erfahrene Meister", "Moderne Werkstatt", "Faire Preise", "Schneller Service"],
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
      description: "Von kleinen Steinschlägen bis zum kompletten Scheibentausch – wir reparieren und erneuern Ihr Autoglas fachgerecht. Schnell, sauber und mit Garantie.",
      highlights: ["Steinschlag-Reparatur", "Scheibenwechsel", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit hängt von funktionierenden Bremsen ab. Wir prüfen, warten und reparieren Bremsanlagen aller Fahrzeugtypen mit Originalteilen oder hochwertigen Alternativen.",
      highlights: ["Bremsbelag-Wechsel", "Bremsscheiben-Tausch", "Komplette Bremswartung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung verhindert einseitigen Reifenverschleiß und sorgt für optimales Fahrverhalten. Mit modernster 3D-Technologie stellen wir die Spur millimetergenau ein.",
      highlights: ["3D-Achsvermessung", "Spureinstellung", "Fahrwerksprüfung"],
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
