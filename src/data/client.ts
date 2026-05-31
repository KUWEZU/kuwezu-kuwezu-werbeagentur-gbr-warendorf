/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:56:11.539Z
 * Kundennummer: 142
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Präzision",
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
    bild: "https://r2.kuwezu.de/kunden/142/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Werkstatt für Präzision in Warendorf",
    ueberschriftHighlight: "Präzision",
    untertext: "Von exakter Achsvermessung über Autoglas-Service bis zum Ersatzwagen – wir halten Sie mobil und sicher unterwegs.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/142/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihr verlässlicher Partner in Warendorf",
    text1: "Als inhabergeführte Werkstatt in Warendorf stehen wir für präzise Arbeit und umfassenden Service rund um Ihr Fahrzeug. Unser Leistungsspektrum reicht von professioneller Achsvermessung über schnellen Autoglas-Service bis zur unkomplizierten Bereitstellung von Ersatzfahrzeugen. Seit Jahren vertrauen Autofahrer aus Warendorf und Umgebung auf unsere Kompetenz.",
    text2: "Wir nehmen uns Zeit für Ihre Anliegen und arbeiten mit moderner Technik und geschultem Fachpersonal. Ehrliche Beratung, faire Preise und zuverlässiger Service – darauf können Sie sich bei uns verlassen.",
    tags: ["Inhabergeführt", "Moderne Technik", "Faire Preise", "Schneller Service"],
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
      description: "Mit modernster Messtechnik vermessen wir Ihre Fahrzeugachsen präzise und korrigieren Abweichungen fachgerecht. So sorgen wir für optimales Fahrverhalten, gleichmäßigen Reifenverschleiß und maximale Sicherheit.",
      highlights: ["3D-Achsvermessung", "Fahrwerkseinstellung", "Reifenschonung"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Ob Steinschlag-Reparatur oder kompletter Scheibentausch – unser Autoglas-Service ist schnell, professionell und werkstattgerecht. Wir arbeiten mit Qualitätsglas und kümmern uns auf Wunsch um die Abwicklung mit Ihrer Versicherung.",
      highlights: ["Steinschlag-Reparatur", "Scheibentausch", "Versicherungsabwicklung"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie während Reparatur oder Wartung mobil bleiben, stellen wir Ihnen unkompliziert ein gepflegtes Ersatzfahrzeug zur Verfügung. Einfach reservieren und weiterfahren – so einfach geht das.",
      highlights: ["Gepflegte Fahrzeuge", "Spontane Verfügbarkeit", "Unkomplizierte Abwicklung"],
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
