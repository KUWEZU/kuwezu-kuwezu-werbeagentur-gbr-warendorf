/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-08T11:06:40.816Z
 * Kundennummer: 64
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "IT / EDV / Webentwicklung",
  ort: "Warendorf",
  slogan: "Digitale Lösungen",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "info@kuwezu.de",
  website: "https://kuwezu.de",
  logo: null,
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#FFCC00",
    secondary: "#F8A600",
    accent: "#394448",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/64/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Digitale Lösungen aus Warendorf",
    ueberschriftHighlight: "Digitale Lösungen",
    untertext: "Ihre Werbeagentur für professionelles Webdesign, zielgerichtetes Marketing und durchdachte Kommunikationsstrategien. Persönlich betreut, regional verwurzelt.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/64/ueber-uns.webp",
    ueberschrift: "Ihre Werbeagentur aus Warendorf",
    text1: "Als kreatives Team entwickeln wir für Unternehmen aus Warendorf und Umgebung maßgeschneiderte Kommunikationslösungen. Von der ersten Idee über die technische Umsetzung bis zur langfristigen Betreuung stehen wir unseren Kunden als verlässlicher Partner zur Seite. Unser Fokus liegt auf Webentwicklung, die funktioniert und Ergebnisse liefert.",
    text2: "Wir arbeiten eng mit unseren Kunden zusammen und sprechen eine klare Sprache ohne Fachchinesisch. Ehrliche Beratung, transparente Prozesse und messbare Erfolge sind unser Anspruch. Digital, aber mit persönlichem Kontakt.",
    tags: ["Persönliche Betreuung", "Faire Preise", "Regionale Verbundenheit", "Schnelle Umsetzung"],
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
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Professionelle Karosseriearbeiten für alle Fahrzeugtypen. Von Unfallschäden über Lackierungen bis zur Teilreparatur – präzise Arbeit und hochwertige Materialien.",
      highlights: ["Unfallreparaturen", "Lackierarbeiten", "Spot-Repair"],
    },
    {
      slug: "motorinstandsetzung",
      title: "Motorinstandsetzung",
      bild: "https://r2.kuwezu.de/bibliothek/Motorinstandsetzung/1777878536475-leistung_motor.webp",
      description: "Fachgerechte Motorinstandsetzung vom Zylinderkopf bis zum Komplettumbau. Wir holen das Maximum aus Ihrem Motor – mit moderner Diagnose und langjähriger Erfahrung.",
      highlights: ["Motordiagnose", "Zylinderkopfarbeiten", "Komplette Überholung"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Schneller Austausch und Reparatur von Autoglas aller Art. Steinschlag-Reparaturen oder kompletter Scheibenwechsel – wir kümmern uns auch um die Abwicklung mit Ihrer Versicherung.",
      highlights: ["Steinschlag-Reparatur", "Scheibentausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sichere Bremsen für Ihre Fahrt. Bremsenwartung, Belagwechsel und komplette Bremsanlagen-Überholung mit modernster Prüftechnik für maximale Sicherheit.",
      highlights: ["Bremsenwartung", "Belagwechsel", "Bremsscheibentausch"],
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
    mo_fr: "09:00 – 18:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 09:00 – 18:00"],
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
