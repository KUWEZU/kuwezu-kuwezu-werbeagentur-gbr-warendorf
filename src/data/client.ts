/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T08:45:25.027Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Werbeagentur",
  ort: "Warendorf",
  slogan: "Fahrwerksprofi",
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
    ueberschrift: "Ihr Autoglas- und Fahrwerksprofi in Warendorf",
    ueberschriftHighlight: "Fahrwerksprofi",
    untertext: "Von Autoglasreparatur über Bremsenservice bis zur präzisen Achsvermessung – wir sorgen für Ihre Sicherheit auf der Straße.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihr zuverlässiger Partner in Warendorf",
    text1: "Die KUWEZU Werbeagentur GbR hat sich auf hochwertige Kfz-Dienstleistungen spezialisiert. Mit unserer Expertise in den Bereichen Autoglas, Bremsen und Achsvermessung bieten wir Fahrzeughaltern in Warendorf und Umgebung professionelle Lösungen für mehr Sicherheit und Fahrkomfort.",
    text2: "Wir arbeiten präzise, transparent und verlässlich. Jeder Auftrag wird mit modernster Technik und handwerklichem Können ausgeführt – damit Sie sicher unterwegs sind.",
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
      description: "Professionelle Reparatur und Austausch von Autoscheiben aller Art. Wir beheben Steinschläge schnell und fachgerecht oder tauschen beschädigte Scheiben durch Originalteile aus.",
      highlights: ["Steinschlag-Reparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Kompetenter Bremsenservice für alle Fahrzeugtypen. Von der Inspektion über Bremsbelagwechsel bis zur kompletten Bremsanlage – wir sorgen für optimale Bremskraft.",
      highlights: ["Bremsbeläge & Scheiben", "Bremsflüssigkeitswechsel", "Bremsenprüfung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung mit modernster 3D-Technologie. Für optimalen Geradeauslauf, gleichmäßigen Reifenverschleiß und sicheres Fahrverhalten.",
      highlights: ["3D-Achsvermessung", "Spur- und Sturzeinstellung", "Fahrwerksdiagnose"],
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
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
