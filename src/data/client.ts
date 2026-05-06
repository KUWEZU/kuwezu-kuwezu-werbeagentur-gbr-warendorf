/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-06T08:54:03.080Z
 * Kundennummer: 61
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "alle Marken",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/61/logo.png",
  standort_bild: "https://r2.kuwezu.de/kunden/61/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/61/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf für alle Marken",
    ueberschriftHighlight: "alle Marken",
    untertext: "Von der Achsvermessung bis zur E-Auto-Wartung – präzise Diagnosen und zuverlässige Reparaturen für Ihr Fahrzeug.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/61/ueber-uns.webp",
    ueberschrift: "Ihre Fachwerkstatt im Herzen von Warendorf",
    text1: "Als KUWEZU Werbeagentur GbR betreiben wir eine moderne Autowerkstatt in Warendorf mit umfassendem Leistungsspektrum. Wir verbinden handwerkliches Können mit modernster Diagnosetechnik – egal ob Klassiker oder Elektrofahrzeug. Unser Team kümmert sich um Bremsen, Autoglasschäden, präzise Achsvermessungen und die fachgerechte Wartung von E-Autos.",
    text2: "Bei uns steht ehrliche Beratung an erster Stelle. Wir nehmen uns Zeit für Ihre Anliegen, erklären verständlich die notwendigen Arbeiten und setzen diese gewissenhaft um. Ihr Vertrauen ist unser Antrieb.",
    tags: ["Markenunabhängig", "Moderne Technik", "Faire Preise", "Schnelle Termine"],
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
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Mit modernster 3D-Vermessungstechnik bringen wir Ihre Achsen millimetergenau in die richtige Spur. Das spart Reifenverschleiß, senkt den Spritverbrauch und sorgt für sicheres Fahrverhalten.",
      highlights: ["3D-Vermessung", "Reduzierter Reifenverschleiß", "Präzise Spureinstellung"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren kleinere Schäden schnell und kostengünstig oder tauschen Ihre Autoscheibe fachgerecht aus – inklusive Kalibrierung aller Assistenzsysteme.",
      highlights: ["Steinschlagreparatur", "Scheibentausch", "Assistenzsystem-Kalibrierung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit liegt uns am Herzen. Wir prüfen, warten und erneuern Bremsanlagen aller Fahrzeugtypen nach Herstellervorgaben – von Belägen über Scheiben bis zur kompletten Bremsflüssigkeit.",
      highlights: ["Bremsbeläge & Scheiben", "Bremsflüssigkeitswechsel", "Alle Fahrzeugtypen"],
    },
    {
      slug: "elektroautos",
      title: "Elektroautos",
      bild: "https://r2.kuwezu.de/bibliothek/Elektroautos/1777878408924-leistung_elektroautos.webp",
      description: "Elektromobilität erfordert spezielles Know-how. Unser geschultes Team führt Wartungen, Hochvolt-Prüfungen und Reparaturen an E-Autos und Hybriden durch – sicher und nach aktuellen Standards.",
      highlights: ["Hochvolt-Qualifikation", "E-Auto & Hybrid-Service", "Herstellergerechte Wartung"],
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
