/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T18:39:59.655Z
 * Kundennummer: 137
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "Rundum-Service",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "info@kuwezu.de",
  website: "",
  logo: "https://r2.kuwezu.de/konzepte/autofit/logo.svg",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1600",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Rundum-Service",
    ueberschriftHighlight: "Rundum-Service",
    untertext: "Von der Achsvermessung bis zum Autoglas – wir kümmern uns um Ihr Fahrzeug. Mit Ersatzwagen bleiben Sie mobil.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ueberschrift: "KUWEZU – Ihre Werkstatt-Partner in Warendorf",
    text1: "Als etablierte Autowerkstatt in Warendorf bieten wir Ihnen umfassende Kfz-Dienstleistungen aus einer Hand. Unser Leistungsspektrum reicht von präziser Achsvermessung über professionelle Autoglas-Arbeiten bis hin zu allen gängigen Reparaturen. Damit Sie während der Werkstattzeit nicht auf Mobilität verzichten müssen, stellen wir Ihnen gerne einen Ersatzwagen zur Verfügung.",
    text2: "Wir arbeiten gewissenhaft, transparent und mit modernster Werkstatttechnik. Ihr Vertrauen ist uns wichtig – deshalb nehmen wir uns Zeit für Beratung und erklären Ihnen jeden Arbeitsschritt nachvollziehbar.",
    tags: ["Qualitätsarbeit", "Faire Preise", "Erfahrenes Team", "Moderne Ausstattung"],
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
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Bleiben Sie mobil, während Ihr Fahrzeug bei uns in der Werkstatt ist. Wir stellen Ihnen unkompliziert einen gepflegten Ersatzwagen zur Verfügung.",
      highlights: ["Schnelle Verfügbarkeit", "Gepflegte Fahrzeuge", "Faire Konditionen"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung mit modernster Technik für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß. Wir justieren Ihr Fahrwerk exakt nach Herstellervorgaben.",
      highlights: ["Computergestützte Messung", "Herstellervorgaben", "Längere Reifenlebensdauer"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Von kleinen Steinschlägen bis zum kompletten Scheibentausch – wir reparieren und erneuern Autoglas fachgerecht. Schnell, sauber und mit Qualitätsmaterialien.",
      highlights: ["Steinschlagreparatur", "Scheibentausch", "Versicherungsabwicklung"],
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
  whatsapp: "+49 17621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
