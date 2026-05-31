/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:50:34.111Z
 * Kundennummer: 141
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
    ueberschrift: "Ihr Autoglas-Experte in Warendorf",
    ueberschriftHighlight: "Autoglas-Experte",
    untertext: "Professionelle Autoglasreparatur, präzise Achsvermessung und zuverlässige Ersatzwagen – alles aus einer Hand für Ihre Mobilität.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/141/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihr Partner für Fahrzeugservice in Warendorf",
    text1: "Als kompetente Werbeagentur mit technischer Expertise betreiben wir in Warendorf einen spezialisierten Fahrzeugservice. Unser Team kümmert sich um professionelle Autoglasreparaturen, hochpräzise Achsvermessungen und stellt Ihnen zuverlässige Ersatzfahrzeuge zur Verfügung. Mit moderner Technik und fundiertem Know-how sorgen wir dafür, dass Sie schnell wieder sicher unterwegs sind.",
    text2: "Wir arbeiten sorgfältig, transparent und kundennah. Ihre Zufriedenheit und Ihre Mobilität stehen bei uns im Mittelpunkt – darauf können Sie sich verlassen.",
    tags: ["Autoglas-Profis", "Moderne Technik", "Schneller Service", "Faire Preise"],
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
      description: "Steinschlag oder Riss? Wir reparieren und tauschen Autoglas fachgerecht aus. Mit Originalqualität und schneller Abwicklung bringen wir Sie wieder sicher auf die Straße.",
      highlights: ["Steinschlagreparatur", "Scheibentausch", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung mit modernster Computertechnik sorgt für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß. Für mehr Sicherheit und Fahrkomfort.",
      highlights: ["3D-Vermessungstechnik", "Fahrwerkeinstellung", "Reifenverschleiß minimieren"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Während Ihr Fahrzeug bei uns in Arbeit ist, bleiben Sie mobil. Wir stellen Ihnen unkompliziert und schnell einen zuverlässigen Ersatzwagen zur Verfügung.",
      highlights: ["Schnelle Bereitstellung", "Gepflegte Fahrzeuge", "Flexible Mietdauer"],
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
