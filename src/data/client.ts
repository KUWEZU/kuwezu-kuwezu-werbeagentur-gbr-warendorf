/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:45:16.658Z
 * Kundennummer: 141
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Autoglas und Fahrwerksservice",
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
    ueberschrift: "Autoglas und Fahrwerksservice in Warendorf",
    ueberschriftHighlight: "Autoglas und Fahrwerksservice",
    untertext: "Von der Steinschlagreparatur über präzise Achsvermessung bis zum Ersatzwagen – alles aus einer Hand für Ihre Mobilität.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/141/ueber-uns.webp",
    ueberschrift: "Ihre Experten für Autoglas und Fahrwerk in Warendorf",
    text1: "Als KUWEZU Werbeagentur GbR in Warendorf verbinden wir handwerkliche Präzision mit kundenorientiertem Service. Unser Schwerpunkt liegt auf professioneller Autoglasreparatur, computergestützter Achsvermessung und zuverlässiger Ersatzwagenstellung. Wir sorgen dafür, dass Sie schnell und sicher wieder mobil sind.",
    text2: "Qualität und Termintreue stehen bei uns an erster Stelle. Wir arbeiten mit modernster Technik und nehmen uns Zeit für individuelle Beratung. Ihre Zufriedenheit ist unser Antrieb.",
    tags: ["Schneller Service", "Moderne Technik", "Faire Preise", "Ersatzwagen inklusive"],
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
      description: "Professionelle Steinschlagreparatur und Scheibenersatz für alle Fahrzeugtypen. Wir arbeiten mit Originalqualität und beraten Sie kompetent zu Versicherungsabwicklung und Kaskoschäden.",
      highlights: ["Steinschlagreparatur in 30 Min", "Scheibenwechsel vor Ort möglich", "Direkte Versicherungsabrechnung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Computergestützte Achsvermessung mit modernster 3D-Technologie für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß. Präzise Einstellung aller relevanten Fahrwerksparameter.",
      highlights: ["3D-Vermessung modernste Technik", "Dokumentation mit Protokoll", "Optimierung Reifenverschleiß"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Kostenloser Ersatzwagen während der Reparatur, damit Sie mobil bleiben. Unkomplizierte Übergabe und flexible Nutzungsdauer je nach Reparaturumfang.",
      highlights: ["Kostenlose Bereitstellung", "Sofort verfügbar", "Flexible Nutzungsdauer"],
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
