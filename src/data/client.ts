/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:19:47.706Z
 * Kundennummer: 141
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Autoglas und Fahrwerk",
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
    ueberschrift: "Ihr Partner für Autoglas und Fahrwerk",
    ueberschriftHighlight: "Autoglas und Fahrwerk",
    untertext: "Professionelle Autoglas-Reparatur, präzise Achsvermessung und zuverlässiger Ersatzwagen-Service in Warendorf. Kompetent, schnell und fair.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/141/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihr Kfz-Spezialist in Warendorf",
    text1: "Bei KUWEZU in Warendorf sind Sie richtig, wenn es um Autoglas, Fahrwerkseinstellungen und mehr geht. Als erfahrenes Team bieten wir Ihnen professionelle Lösungen rund um Ihr Fahrzeug. Von der Steinschlag-Reparatur über die computergestützte Achsvermessung bis zum Ersatzwagen – wir sorgen dafür, dass Sie sicher und komfortabel unterwegs sind.",
    text2: "Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. Wir arbeiten sorgfältig, verwenden hochwertige Materialien und nehmen uns Zeit für eine fachgerechte Ausführung. Verlassen Sie sich auf unsere Erfahrung und persönliche Beratung.",
    tags: ["Meisterbetrieb", "Schneller Service", "Faire Preise", "Persönliche Beratung"],
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
      description: "Von der Steinschlag-Reparatur bis zum kompletten Scheibentausch – wir kümmern uns um alle Autoglas-Schäden. Schnelle Terminvergabe, fachgerechte Ausführung und direkte Abrechnung mit Ihrer Versicherung.",
      highlights: ["Steinschlag-Reparatur", "Scheibentausch alle Marken", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise computergestützte Achsvermessung für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß. Mit modernster Messtechnik stellen wir Ihr Fahrwerk exakt ein – für mehr Sicherheit und Fahrkomfort.",
      highlights: ["Computergestützte Vermessung", "Fahrwerkseinstellung", "Reduziert Reifenverschleiß"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie mobil bleiben, stellen wir Ihnen während der Reparatur einen zuverlässigen Ersatzwagen zur Verfügung. Unkompliziert, gepflegt und zu fairen Konditionen – sprechen Sie uns einfach an.",
      highlights: ["Sofort verfügbar", "Gepflegte Fahrzeuge", "Faire Tagespreise"],
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
  whatsapp: "+4917621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
