/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T18:58:02.447Z
 * Kundennummer: 140
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
    bild: "https://r2.kuwezu.de/kunden/140/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Rundum-Service",
    ueberschriftHighlight: "Rundum-Service",
    untertext: "Von präziser Achsvermessung über Autoglasreparatur bis zum Ersatzwagen – wir halten Sie mobil.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/140/ueber-uns.webp",
    ueberschrift: "KUWEZU Werbeagentur – Ihre Werkstatt-Partner in Warendorf",
    text1: "Als erfahrene Autowerkstatt in Warendorf bieten wir Ihnen professionelle Fahrzeugpflege und -reparatur aus einer Hand. Unsere Kernkompetenzen liegen in der Fahrwerksvermessung, Autoglasservice und der Bereitstellung zuverlässiger Ersatzfahrzeuge. Mit modernster Technik und handwerklichem Können sorgen wir dafür, dass Ihr Fahrzeug sicher unterwegs ist.",
    text2: "Wir arbeiten transparent, zuverlässig und lösungsorientiert. Jeder Auftrag wird mit der gleichen Sorgfalt behandelt – egal ob Kleinreparatur oder umfangreiche Instandsetzung. Ihre Zufriedenheit und Mobilität stehen bei uns an erster Stelle.",
    tags: ["Modernste Technik", "Faire Preise", "Schneller Service", "Persönliche Beratung"],
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
      description: "Mit computergestützter Achsvermessung bringen wir Ihr Fahrwerk auf den Punkt. Optimale Spureinstellung bedeutet gleichmäßiger Reifenverschleiß, besseres Fahrverhalten und mehr Sicherheit.",
      highlights: ["Computergestützte Vermessung", "Spureinstellung präzise", "Reduziert Reifenverschleiß"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Ob Steinschlag-Reparatur oder kompletter Scheibenaustausch – wir kümmern uns schnell und fachgerecht um alle Autoglasschäden. Direkte Abrechnung mit Ihrer Versicherung möglich.",
      highlights: ["Steinschlag-Reparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Während Ihr Fahrzeug bei uns in der Werkstatt ist, bleiben Sie mobil. Wir stellen Ihnen zuverlässige Ersatzwagen zur Verfügung, damit Sie Ihre Termine wahrnehmen können.",
      highlights: ["Zuverlässige Fahrzeuge", "Flexibel verfügbar", "Keine Einschränkung"],
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
