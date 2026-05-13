/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T14:54:21.394Z
 * Kundennummer: 66
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "mit Herz",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "info@kuwezu.de",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/66/logo.png",
  standort_bild: "https://r2.kuwezu.de/kunden/66/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#024089",
    secondary: "#ffd100",
    accent: "#ffd100",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/66/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Herz",
    ueberschriftHighlight: "mit Herz",
    untertext: "Professionelle Reparaturen, zuverlässiger Service und faire Preise – Ihr Auto ist bei uns in besten Händen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/66/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihre Werkstatt-Partner in Warendorf",
    text1: "Als etablierte Autowerkstatt in Warendorf kümmern wir uns um alle Belange rund um Ihr Fahrzeug. Von Karosseriearbeiten über Bremsenwartung bis hin zur kompletten Fahrzeuginstandsetzung – unser erfahrenes Team arbeitet präzise, schnell und zu fairen Konditionen. Damit Sie mobil bleiben, stellen wir Ihnen bei Bedarf einen Ersatzwagen zur Verfügung.",
    text2: "Ehrliche Beratung und transparente Arbeitsweise sind für uns selbstverständlich. Wir nehmen uns Zeit für Ihre Anliegen und finden gemeinsam die beste Lösung für Ihr Fahrzeug. Vertrauen Sie auf unsere Kompetenz und Erfahrung.",
    tags: ["Meisterbetrieb", "Moderne Werkstatt", "Persönliche Beratung", "Familiengeführt"],
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
      description: "Von kleinen Dellen bis zu Unfallschäden – wir bringen Ihre Karosserie wieder in Form. Mit modernster Technik und fachgerechter Ausführung sorgen wir für erstklassige Ergebnisse.",
      highlights: ["Unfallreparaturen", "Delle & Kratzer", "Lackierarbeiten"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Während Ihr Fahrzeug bei uns in der Werkstatt ist, bleiben Sie mobil. Wir stellen Ihnen unkompliziert einen Ersatzwagen zur Verfügung – damit Ihr Alltag nicht ins Stocken gerät.",
      highlights: ["Sofort verfügbar", "Unkomplizierte Abwicklung", "Faire Konditionen"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit hat oberste Priorität. Wir prüfen, warten und reparieren Ihre Bremsanlage fachgerecht mit Originalteilen und dokumentieren alle Arbeiten lückenlos.",
      highlights: ["Bremsscheiben & Beläge", "Bremsflüssigkeitswechsel", "Vollständige Inspektion"],
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
    mo_fr: "" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Nach Vereinbarung"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  "https://www.facebook.com/KUWEZU/" as string | null,
    instagram: "https://www.instagram.com/kuwezu_werbeagentur/" as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "+4917621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
