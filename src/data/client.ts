/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-05T16:19:39.021Z
 * Kundennummer: 60
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "starke Markenauftritte",
  adresse: "Bernhardstraße 4c, 48231 Warendorf",
  telefon: "0176 21575303",
  email: "",
  website: "",
  logo: null,
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#FFCC00",
    secondary: "#F8A600",
    accent: "#394448",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/60/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Werbeagentur für starke Markenauftritte",
    ueberschriftHighlight: "starke Markenauftritte",
    untertext: "Von der kreativen Idee bis zur professionellen Umsetzung – KUWEZU Werbeagentur macht Ihr Unternehmen in Warendorf und Umgebung sichtbar.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/60/ueber-uns.webp",
    ueberschrift: "KUWEZU – Ihre Werbeagentur aus Warendorf",
    text1: "Als inhabergeführte Werbeagentur in Warendorf entwickeln wir maßgeschneiderte Werbelösungen für Unternehmen jeder Größe. Von der Fahrzeugbeschriftung über Werbetechnik bis zur digitalen Kommunikation – wir setzen Ihre Marke wirkungsvoll in Szene. Unser erfahrenes Team verbindet kreatives Design mit handwerklicher Präzision.",
    text2: "Wir arbeiten eng mit unseren Kunden zusammen und legen Wert auf persönliche Beratung. Qualität, Termintreue und faire Preise sind für uns selbstverständlich. Ihre Zufriedenheit ist unser Anspruch.",
    tags: ["Inhabergeführt", "Kreative Konzepte", "Faire Preise", "Persönliche Beratung"],
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
      description: "Professionelle Autoglasfolierung und Fahrzeugbeschriftung für Firmenfahrzeuge und Privatwagen. Wir gestalten und montieren individuelle Werbebotschaften, die Ihr Unternehmen mobil machen.",
      highlights: ["Individuelle Fahrzeugbeschriftung", "Werbefolierung nach Maß", "Professionelle Montage"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Durchschlagende Werbewirkung durch kreative Kampagnen und starke Kommunikation. Wir entwickeln Konzepte, die Ihre Zielgruppe erreichen und Ihre Marke nachhaltig stärken.",
      highlights: ["Kreative Kampagnenentwicklung", "Markenentwicklung & Branding", "Print- und Digitalwerbung"],
    },
    {
      slug: "elektronik",
      title: "Elektronik",
      bild: "https://r2.kuwezu.de/bibliothek/Elektronik/1777878497653-leistung_multimeter.webp",
      description: "Moderne digitale Werbelösungen und elektronische Displays für Ihre Außenwerbung. Von LED-Displays bis zu interaktiven Präsentationssystemen – Technik, die begeistert.",
      highlights: ["LED-Displays & Leuchtwerbung", "Digitale Werbesysteme", "Interaktive Präsentationen"],
    },
    {
      slug: "elektroautos",
      title: "Elektroautos",
      bild: "https://r2.kuwezu.de/bibliothek/Elektroautos/1777878408924-leistung_elektroautos.webp",
      description: "Spezialisierte Fahrzeugbeschriftung für Elektrofahrzeuge und E-Mobilität-Branding. Setzen Sie ein Zeichen für Nachhaltigkeit mit umweltbewusster Werbung auf Ihren E-Autos.",
      highlights: ["E-Mobility Branding", "Nachhaltige Werbelösungen", "Zukunftsorientierte Gestaltung"],
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
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
