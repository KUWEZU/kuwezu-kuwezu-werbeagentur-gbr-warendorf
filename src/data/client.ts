/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T15:33:04.124Z
 * Kundennummer: 67
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "besten Händen",
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
    ueberschrift: "Ihr Fahrzeug in besten Händen in Warendorf",
    ueberschriftHighlight: "besten Händen",
    untertext: "Von Autoglas über Bremsen bis zur Achsvermessung – professionelle Werkstattleistungen für Ihre Sicherheit und Mobilität.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/67/ueber-uns.webp",
    ueberschrift: "KUWEZU Werbeagentur – Ihre Kfz-Experten in Warendorf",
    text1: "Als zuverlässige Werkstatt in Warendorf kümmern wir uns um alle wichtigen Services rund um Ihr Fahrzeug. Ob es um den fachgerechten Austausch von Autoglas, die Wartung Ihrer Bremsen oder die präzise Achsvermessung geht – wir arbeiten mit modernem Equipment und langjähriger Erfahrung. Bei uns steht die Sicherheit Ihres Fahrzeugs an erster Stelle.",
    text2: "Wir nehmen uns Zeit für eine gründliche Diagnose und transparente Beratung. Faire Preise und zuverlässige Arbeit sind für uns selbstverständlich. Ihr Vertrauen ist unser Antrieb, Tag für Tag.",
    tags: ["Fachgerechte Arbeit", "Moderne Ausstattung", "Transparente Beratung", "Faire Preise"],
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
      description: "Steinschlag oder Riss? Wir reparieren oder tauschen Ihre Autoscheiben fachgerecht aus. Schnelle Terminvergabe und Direktabrechnung mit Ihrer Versicherung möglich.",
      highlights: ["Steinschlagreparatur", "Scheibentausch alle Marken", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Bremsen sind das wichtigste Sicherheitssystem im Auto. Wir prüfen, warten und erneuern Bremsbeläge, Bremsscheiben und die gesamte Bremsanlage nach Herstellervorgaben.",
      highlights: ["Bremsbeläge & Scheiben", "Bremsenprüfung", "Alle Fahrzeugtypen"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Eine exakte Achsvermessung sorgt für optimalen Geradeauslauf, gleichmäßigen Reifenverschleiß und sicheres Fahrverhalten. Wir vermessen und justieren präzise mit modernster Technik.",
      highlights: ["3D-Achsvermessung", "Fahrwerkseinstellung", "Reifenschonung"],
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
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
