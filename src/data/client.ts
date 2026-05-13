/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T15:00:01.214Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Sicherheit",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "info@kuwezu.de",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/67/logo.png",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/67/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihr Kfz-Spezialist in Warendorf für Sicherheit",
    ueberschriftHighlight: "Sicherheit",
    untertext: "Professionelle Autoglas-Reparatur, Bremsenservice und präzise Achsvermessung. Damit Sie sicher unterwegs sind.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "Ihre Kfz-Experten mitten in Warendorf",
    text1: "Als KUWEZU Werbeagentur GbR in Warendorf haben wir uns auf sicherheitsrelevante Kfz-Services spezialisiert. Von der Autoglasreparatur über Bremsenwartung bis zur computergestützten Achsvermessung – wir sorgen dafür, dass Ihr Fahrzeug verkehrssicher bleibt. Mit moderner Technik und fundiertem Fachwissen betreuen wir Privat- und Firmenkunden aus der Region.",
    text2: "Transparente Beratung und faire Preise sind für uns selbstverständlich. Wir nehmen uns Zeit für Ihre Anliegen und arbeiten sorgfältig – denn Ihre Sicherheit steht bei uns an erster Stelle.",
    tags: ["Fachwerkstatt", "Moderne Technik", "Faire Preise", "Schneller Service"],
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
      description: "Steinschlag oder Riss? Wir reparieren oder tauschen Ihre Autoscheiben fachgerecht aus. Schnell, sauber und mit Direktabrechnung mit Ihrer Versicherung.",
      highlights: ["Steinschlag-Reparatur", "Scheibentausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Funktionierende Bremsen sind lebenswichtig. Wir prüfen, warten und erneuern Bremsbeläge, Bremsscheiben und die gesamte Bremsanlage nach Herstellervorgaben.",
      highlights: ["Bremsbeläge wechseln", "Bremsscheiben erneuern", "Bremsencheck"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Ungleicher Reifenverschleiß oder Spurprobleme? Mit modernster Messtechnik vermessen wir Ihre Achsen präzise und stellen sie optimal ein.",
      highlights: ["Computergestützte Vermessung", "Spureinstellung", "Fahrwerks-Check"],
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
  tuev_termine: true as boolean,
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
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
