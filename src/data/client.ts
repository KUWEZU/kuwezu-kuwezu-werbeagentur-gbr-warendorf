/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:39:51.908Z
 * Kundennummer: 141
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Autoglas",
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
    ueberschrift: "Ihre Experten für Autoglas in Warendorf",
    ueberschriftHighlight: "Autoglas",
    untertext: "Professionelle Reparatur und Austausch von Autoglas, präzise Achsvermessung und zuverlässige Ersatzwagen – alles aus einer Hand.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/141/ueber-uns.webp",
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Rundum-Service",
    text1: "Als kompetente Werkstatt in Warendorf kümmern wir uns um alle wichtigen Dienstleistungen rund um Ihr Fahrzeug. Von der fachgerechten Autoglas-Reparatur über die exakte Achsvermessung bis zum zuverlässigen Ersatzwagen – bei uns erhalten Sie alles aus einer Hand. Qualität und Kundenzufriedenheit stehen für uns an erster Stelle.",
    text2: "Wir arbeiten mit modernen Geräten und geschultem Personal, um Ihnen schnelle und präzise Lösungen zu bieten. Ihre Mobilität ist uns wichtig – deshalb sorgen wir dafür, dass Sie immer sicher unterwegs sind.",
    tags: ["Autoglas-Profis", "Moderne Technik", "Zuverlässig", "Kundenservice"],
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
      description: "Wir reparieren und tauschen Autoglas fachgerecht aus – ob Steinschlag oder Totalschaden. Mit hochwertigen Materialien sorgen wir für klare Sicht und Ihre Sicherheit.",
      highlights: ["Steinschlag-Reparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung mit modernster Technik für optimalen Fahrkomfort und gleichmäßigen Reifenverschleiß. Wir stellen Ihr Fahrwerk exakt ein.",
      highlights: ["3D-Vermessung", "Fahrwerkseinstellung", "Reifenschonung"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie mobil bleiben, stellen wir Ihnen während der Reparatur einen zuverlässigen Ersatzwagen zur Verfügung. Unkompliziert und kundenfreundlich.",
      highlights: ["Sofort verfügbar", "Gepflegte Fahrzeuge", "Faire Konditionen"],
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
