/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T18:27:48.740Z
 * Kundennummer: 135
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
    bild: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Rundum-Service",
    ueberschriftHighlight: "Rundum-Service",
    untertext: "Präzise Achsvermessung, schneller Ersatzwagen und professionelle Autoglas-Reparatur. Alles aus einer Hand für Ihr Fahrzeug.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ueberschrift: "KUWEZU – Ihre Werkstatt in Warendorf",
    text1: "Bei KUWEZU in Warendorf kümmern wir uns um alle Belange rund um Ihr Fahrzeug. Von der präzisen Achsvermessung über Autoglas-Reparaturen bis hin zur Bereitstellung von Ersatzwagen – wir bieten Ihnen umfassenden Service. Unser Team arbeitet mit moderner Technik und langjähriger Erfahrung für Ihre Mobilität.",
    text2: "Wir legen Wert auf ehrliche Beratung, faire Preise und zuverlässige Arbeit. Ihr Auto ist bei uns in guten Händen – versprochen. Damit Sie schnell wieder sicher unterwegs sind.",
    tags: ["Erfahrenes Team", "Moderne Technik", "Kundenorientiert", "Schneller Service"],
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
      description: "Mit moderner Messtechnik bringen wir Ihre Achsen wieder in die perfekte Spur. Präzise Vermessung für optimale Fahreigenschaften und reduzierten Reifenverschleiß.",
      highlights: ["Computergestützte Vermessung", "Optimaler Reifenschutz", "Verbessertes Fahrverhalten"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie mobil bleiben, stellen wir Ihnen während der Reparatur einen Ersatzwagen zur Verfügung. Unkompliziert, zuverlässig und zu fairen Konditionen.",
      highlights: ["Schnelle Verfügbarkeit", "Gepflegte Fahrzeuge", "Flexible Mietdauer"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren oder tauschen Ihr Autoglas fachgerecht aus. Schnelle Terminvergabe und direkte Abrechnung mit Ihrer Versicherung.",
      highlights: ["Steinschlag-Reparatur", "Scheibentausch", "Versicherungsabwicklung"],
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
