/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T12:00:48.547Z
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
    untertext: "Professionelle Karosserie- und Bremsarbeiten, zuverlässiger Ersatzwagen-Service. Ihre Mobilität ist unsere Priorität.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/66/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihre Werkstatt-Profis in Warendorf",
    text1: "Als erfahrene Autowerkstatt in Warendorf sind wir Ihre Ansprechpartner für Karosseriearbeiten, Bremsenwartung und vieles mehr. Mit Fachwissen und modernem Equipment bringen wir Ihr Fahrzeug wieder in Top-Form. Damit Sie mobil bleiben, stellen wir Ihnen bei Bedarf einen Ersatzwagen zur Verfügung.",
    text2: "Faire Preise, transparente Kommunikation und echte Handwerksqualität – darauf können Sie sich bei uns verlassen. Wir nehmen uns Zeit für Ihre Anliegen und finden gemeinsam die beste Lösung für Ihr Fahrzeug.",
    tags: ["Meisterbetrieb", "Faire Preise", "Ersatzwagen", "Schnelle Termine"],
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
      description: "Von Beulen und Kratzern bis zu kompletten Unfallreparaturen – unsere Karosseriearbeiten machen Ihr Fahrzeug wieder wie neu. Wir arbeiten präzise, sauber und verwenden ausschließlich hochwertige Materialien.",
      highlights: ["Unfallreparaturen", "Delle & Kratzer beseitigen", "Lackarbeiten"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie während der Reparatur mobil bleiben, stellen wir Ihnen einen zuverlässigen Ersatzwagen zur Verfügung. Unkompliziert organisiert, damit Ihr Alltag weiterlaufen kann.",
      highlights: ["Sofort verfügbar", "Unkomplizierte Abwicklung", "Versicherungsabrechnung möglich"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit liegt uns am Herzen. Wir prüfen, warten und reparieren Ihre Bremsanlage fachgerecht und gründlich. Von Bremsbelägen bis zur kompletten Bremsanlage – alles aus einer Hand.",
      highlights: ["Bremsen-Check", "Bremsbeläge wechseln", "Bremsflüssigkeit prüfen"],
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
