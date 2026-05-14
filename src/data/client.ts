/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-14T09:46:45.265Z
 * Kundennummer: 67
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
    ueberschrift: "Ihr Fahrzeug in besten Händen",
    ueberschriftHighlight: "besten Händen",
    untertext: "Von Autoglas über Bremsen bis zur Achsvermessung – Ihr Kfz-Profi in Warendorf sorgt für Sicherheit und perfekte Fahrbarkeit.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Kfz-Werkstatt mitten in Warendorf",
    text1: "Bei KUWEZU in Warendorf dreht sich alles um die Sicherheit und Zuverlässigkeit Ihres Fahrzeugs. Wir sind spezialisiert auf Autoglasreparaturen, Bremsenwartung und präzise Achsvermessungen. Mit moderner Werkstattausstattung und fundiertem Fachwissen kümmern wir uns um Ihr Auto, damit Sie sicher unterwegs sind.",
    text2: "Ehrliche Beratung und sorgfältige Arbeit sind für uns selbstverständlich. Wir nehmen uns Zeit für Sie und Ihr Fahrzeug – ohne unnötige Verkaufsgespräche, dafür mit transparenten Preisen und verlässlichen Terminen.",
    tags: ["Fachwerkstatt", "Moderne Technik", "Faire Preise", "Schnelle Termine"],
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
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren und tauschen Autoglas fachgerecht aus – schnell, sauber und mit direkter Abwicklung über Ihre Versicherung.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sicherheit beginnt beim Bremsen. Wir prüfen, warten und erneuern Ihre Bremsanlage komplett – von Bremsbelägen über Scheiben bis zur Bremsflüssigkeit.",
      highlights: ["Bremsbeläge erneuern", "Bremsscheiben wechseln", "Bremsflüssigkeit prüfen"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß führen wir computergestützte Achsvermessungen durch und stellen die Spur präzise ein.",
      highlights: ["3D-Achsvermessung", "Spureinstellung", "Fahrwerksdiagnose"],
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
