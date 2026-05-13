/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T15:18:39.001Z
 * Kundennummer: 67
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
    ueberschrift: "Ihr Kfz-Profi in Warendorf für Service",
    ueberschriftHighlight: "Kfz-Profi",
    untertext: "Von Autoglasreparatur über Bremsenwartung bis zur präzisen Achsvermessung – bei uns ist Ihr Fahrzeug in besten Händen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihr Partner für Fahrzeugsicherheit in Warendorf",
    text1: "Die KUWEZU Werbeagentur GbR steht in Warendorf für kompetenten Kfz-Service auf höchstem Niveau. Wir kümmern uns um die sicherheitsrelevanten Komponenten Ihres Fahrzeugs: von Autoglas über Bremsen bis zur exakten Achsvermessung. Mit moderner Technik und fundiertem Fachwissen sorgen wir dafür, dass Sie sicher unterwegs sind.",
    text2: "Unser Team arbeitet präzise, zuverlässig und transparent. Wir nehmen uns Zeit für eine gründliche Analyse und beraten Sie ehrlich – ohne unnötige Reparaturen. Ihr Vertrauen und Ihre Sicherheit stehen bei uns an erster Stelle.",
    tags: ["Modernste Messtechnik", "Erfahrene Profis", "Faire Preise", "Schneller Service"],
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
      description: "Steinschlag oder Riss? Wir reparieren oder tauschen Ihr Autoglas professionell aus. Schnell, sauber und direkt mit Ihrer Versicherung abgerechnet.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit hängt von funktionierenden Bremsen ab. Wir prüfen, warten und reparieren alle Bremskomponenten fachgerecht und zuverlässig.",
      highlights: ["Bremsbeläge & Scheiben", "Bremsflüssigkeitswechsel", "Komplette Bremswartung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung für optimale Fahrstabilität und gleichmäßigen Reifenverschleiß. Mit modernster 3D-Messtechnik für exakte Ergebnisse.",
      highlights: ["3D-Achsvermessung", "Fahrwerkseinstellung", "Optimaler Reifenschutz"],
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
