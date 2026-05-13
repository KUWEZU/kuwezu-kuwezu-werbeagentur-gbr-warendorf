/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T15:46:24.807Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Autoglas-Experte",
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
    ueberschrift: "Ihr Autoglas-Experte für Warendorf und Umgebung",
    ueberschriftHighlight: "Autoglas-Experte",
    untertext: "Professionelle Reparatur und Austausch von Autoscheiben, Bremsenwartung und präzise Achsvermessung. Schnell, zuverlässig und vor Ort für Sie da.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihre Fachwerkstatt in Warendorf",
    text1: "Die KUWEZU Werbeagentur GbR steht in Warendorf für kompetenten Service rund um Ihr Fahrzeug. Wir haben uns auf Autoglasreparaturen, Bremsenwartung und präzise Achsvermessung spezialisiert. Mit moderner Technik und fachlichem Know-how sorgen wir dafür, dass Ihr Fahrzeug sicher und zuverlässig unterwegs ist.",
    text2: "Wir legen Wert auf ehrliche Beratung und transparente Preise. Jeder Auftrag wird sorgfältig ausgeführt – damit Sie sich auf Ihr Fahrzeug verlassen können. Ihre Zufriedenheit und Sicherheit stehen bei uns an erster Stelle.",
    tags: ["Schneller Service", "Faire Preise", "Erfahrene Techniker", "Modernste Ausstattung"],
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
      description: "Vom kleinen Steinschlag bis zum kompletten Scheibentausch – wir reparieren und ersetzen Ihre Autoscheiben fachgerecht. Schnelle Abwicklung direkt mit Ihrer Versicherung.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Funktionsfähige Bremsen sind lebenswichtig. Wir prüfen, warten und erneuern Ihre Bremsanlage mit Originalteilen oder hochwertigen Alternativen.",
      highlights: ["Bremsbeläge wechseln", "Bremsflüssigkeit prüfen", "Bremscheiben erneuern"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Eine präzise Achsvermessung sorgt für optimales Fahrverhalten und geringeren Reifenverschleiß. Wir justieren Ihr Fahrwerk mit modernster Messtechnik.",
      highlights: ["Computergestützte Vermessung", "Fahrwerkseinstellung", "Reifenverschleiß minimieren"],
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
