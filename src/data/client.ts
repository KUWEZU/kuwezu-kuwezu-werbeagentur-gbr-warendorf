/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T08:06:07.614Z
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
    untertext: "Von Steinschlagreparatur bis zur präzisen Achsvermessung – Ihre Fachwerkstatt in Warendorf für Sicherheit und Fahrkomfort.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Fachwerkstatt in Warendorf",
    text1: "KUWEZU ist Ihre zuverlässige Fachwerkstatt für Autoglas, Bremsen und Fahrwerk in Warendorf. Mit modernster Technik und langjähriger Erfahrung sorgen wir dafür, dass Ihr Fahrzeug sicher und zuverlässig unterwegs ist. Von der Steinschlagreparatur über den Bremsenwechsel bis zur computergestützten Achsvermessung bieten wir professionelle Lösungen.",
    text2: "Wir nehmen uns Zeit für Ihr Anliegen und beraten Sie ehrlich. Qualität, Termintreue und faire Preise sind für uns selbstverständlich. Ihr Auto ist bei uns in guten Händen.",
    tags: ["Meisterbetrieb", "Moderne Diagnosetechnik", "Faire Preise", "Schnelle Termine"],
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
      description: "Professionelle Autoglasreparatur und -austausch für alle Fahrzeugtypen. Wir kümmern uns um Steinschläge, Risse und komplette Scheibenwechsel – schnell und fachgerecht.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sicherheit beginnt beim Bremsen. Wir prüfen, warten und erneuern Bremsanlagen aller Art – von Bremsbelägen über Bremsscheiben bis zur kompletten Bremsanlage.",
      highlights: ["Bremsbeläge & Scheiben", "Bremsflüssigkeitswechsel", "Bremsenprüfung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise computergestützte Achsvermessung für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß. Für sicheres Fahrverhalten und längere Reifenlebensdauer.",
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
