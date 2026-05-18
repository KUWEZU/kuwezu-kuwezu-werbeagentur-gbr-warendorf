/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T09:20:19.114Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Werbeagentur",
  ort: "Warendorf",
  slogan: "Autoglas und Fahrwerk",
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
    ueberschrift: "Ihre Werkstatt für Autoglas und Fahrwerk",
    ueberschriftHighlight: "Autoglas und Fahrwerk",
    untertext: "Professionelle Reparaturen und Wartung in Warendorf. Vom Steinschlag bis zur perfekten Spur – wir kümmern uns um Ihr Fahrzeug.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Kfz-Profis aus Warendorf",
    text1: "KUWEZU Werbeagentur GbR steht für zuverlässige Kfz-Dienstleistungen in Warendorf und Umgebung. Unser Team verfügt über langjährige Erfahrung in der Autoglas-Reparatur, Bremsenwartung und präzisen Achsvermessung. Wir arbeiten mit moderner Technik und setzen auf Qualität bei jedem Handgriff.",
    text2: "Ehrliche Beratung und faire Preise sind für uns selbstverständlich. Wir nehmen uns Zeit für Ihre Anliegen und sorgen dafür, dass Sie sicher unterwegs sind. Vertrauen Sie auf unsere Kompetenz.",
    tags: ["Meisterbetrieb", "Moderne Technik", "Faire Preise", "Schneller Service"],
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
      description: "Von der Steinschlag-Reparatur bis zum kompletten Scheibenaustausch – wir kümmern uns um alle Autoglas-Schäden. Schnell, sauber und mit Garantie für Ihre Sicherheit.",
      highlights: ["Steinschlag-Reparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Funktionsfähige Bremsen sind lebenswichtig. Wir prüfen, warten und erneuern Ihre Bremsanlage nach Herstellervorgaben für optimale Sicherheit auf jeder Fahrt.",
      highlights: ["Bremsbeläge wechseln", "Bremsflüssigkeit prüfen", "Bremscheiben erneuern"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Mit modernster Messtechnik vermessen wir die Achsgeometrie Ihres Fahrzeugs präzise. Das spart Sprit, schont die Reifen und sorgt für sicheres Fahrverhalten.",
      highlights: ["3D-Achsvermessung", "Spur einstellen", "Reifenverschleiß minimieren"],
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
