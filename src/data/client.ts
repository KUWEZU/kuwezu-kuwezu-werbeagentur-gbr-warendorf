/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:30:36.066Z
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
    ueberschrift: "Ihr Spezialist für Autoglas in Warendorf",
    ueberschriftHighlight: "Autoglas",
    untertext: "Professioneller Service rund um Scheiben, Fahrwerk und Mobilität – schnell, zuverlässig und direkt vor Ort.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/141/ueber-uns.webp",
    ueberschrift: "Ihre Experten für Autoglas und Fahrzeugtechnik in Warendorf",
    text1: "Als kompetente Anlaufstelle in Warendorf bieten wir Ihnen umfassenden Service für Ihr Fahrzeug. Von der professionellen Autoglasreparatur über präzise Achsvermessung bis zum zuverlässigen Ersatzwagen – wir sorgen dafür, dass Sie sicher und komfortabel unterwegs bleiben. Unser Leistungsspektrum deckt alle wichtigen Bereiche ab.",
    text2: "Wir legen Wert auf schnelle Terminvergabe, fachgerechte Ausführung und persönliche Beratung. Ihre Zufriedenheit und Sicherheit stehen bei uns an erster Stelle – das gilt für jede einzelne Dienstleistung.",
    tags: ["Schneller Service", "Fachgerechte Ausführung", "Persönliche Beratung", "Faire Preise"],
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
      description: "Von der Steinschlagreparatur bis zum kompletten Scheibentausch – wir kümmern uns um alle Autoglasschäden. Schnelle Abwicklung, direkt in Warendorf.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Vermessung und Einstellung Ihrer Fahrzeugachsen für optimales Fahrverhalten und geringen Reifenverschleiß. Modernste Messtechnik garantiert exakte Ergebnisse.",
      highlights: ["Modernste Messtechnik", "Fahrwerkseinstellung", "Reifenverschleiß minimieren"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Bleiben Sie mobil, auch wenn Ihr Fahrzeug in der Werkstatt ist. Wir stellen Ihnen unkompliziert einen Ersatzwagen zur Verfügung.",
      highlights: ["Unkomplizierte Bereitstellung", "Verschiedene Fahrzeugklassen", "Flexible Mietdauer"],
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
