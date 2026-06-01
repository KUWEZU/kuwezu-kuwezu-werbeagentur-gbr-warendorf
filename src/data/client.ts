/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-06-01T04:17:05.808Z
 * Kundennummer: 193
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "zuverlässig",
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
    bild: "https://r2.kuwezu.de/kunden/193/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf – zuverlässig",
    ueberschriftHighlight: "zuverlässig",
    untertext: "Von Autoglas über Achsvermessung bis Bremsen – professionelle Werkstattleistungen für Ihr Fahrzeug. Kompetent, fair und termingerecht.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/193/ueber-uns.webp",
    ueberschrift: "Ihre Werkstatt-Profis aus Warendorf",
    text1: "Als KUWEZU Werbeagentur GbR in Warendorf verbinden wir fachliche Kompetenz mit kundenorientiertem Service. Unsere Werkstatt ist Ihr Ansprechpartner für alle wichtigen Themen rund ums Fahrzeug – von der präzisen Achsvermessung über professionelle Bremsenwartung bis zum Autoglasservice.",
    text2: "Wir arbeiten gewissenhaft, transparent und mit modernem Equipment. Bei uns steht Ihr Fahrzeug in guten Händen – versprochen. Faire Preise und ehrliche Beratung sind für uns selbstverständlich.",
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
      description: "Professioneller Autoglasservice für alle Fahrzeugtypen. Ob Steinschlagreparatur oder kompletter Scheibentausch – wir sorgen für klare Sicht und Ihre Sicherheit.",
      highlights: ["Steinschlagreparatur", "Scheibenwechsel", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung mit modernster Technologie. Wir korrigieren Fahrwerkseinstellungen für optimalen Geradeauslauf, gleichmäßigen Reifenverschleiß und sicheres Fahrverhalten.",
      highlights: ["Computergestützte Vermessung", "Fahrwerkseinstellung", "Reifenschonung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Kompletter Bremsservice für maximale Sicherheit. Von der Inspektion über Belagwechsel bis zur Erneuerung der Bremsscheiben – Ihre Bremsen in Bestform.",
      highlights: ["Bremsbeläge wechseln", "Bremsscheiben erneuern", "Bremswartung"],
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
