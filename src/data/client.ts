/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-13T12:53:24.534Z
 * Kundennummer: 66
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
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Rundum-Service",
    ueberschriftHighlight: "Rundum-Service",
    untertext: "Von Karosseriearbeiten über Bremsenwartung bis zum Ersatzwagen – wir halten Ihr Fahrzeug zuverlässig in Schuss.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/66/ueber-uns.webp",
    ueberschrift: "Ihre Werkstatt-Partner in Warendorf",
    text1: "Bei KUWEZU in Warendorf bekommen Sie kompetente Kfz-Reparaturen aus einer Hand. Wir kümmern uns um Karosserieschäden, Bremsenservice und sorgen mit Ersatzfahrzeugen dafür, dass Sie mobil bleiben. Unser Team arbeitet präzise, ehrlich und mit modernster Technik.",
    text2: "Wir nehmen uns Zeit für Ihre Anliegen und erklären jeden Arbeitsschritt verständlich. Faire Preise und Termintreue sind für uns selbstverständlich – damit Sie sicher weiterfahren können.",
    tags: ["Meisterbetrieb", "Ersatzwagen inklusive", "Schnelle Termine", "Faire Preise"],
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
      description: "Vom kleinen Kratzer bis zum Unfallschaden – wir reparieren Ihre Karosserie fachgerecht und bringen Ihr Fahrzeug wieder in Form. Lackierung, Dellen und Rostbeseitigung gehören zu unseren Stärken.",
      highlights: ["Unfallreparaturen", "Lackierarbeiten", "Dellenentfernung"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie während der Reparatur mobil bleiben, stellen wir Ihnen unkompliziert einen Ersatzwagen zur Verfügung. So müssen Sie auf nichts verzichten.",
      highlights: ["Sofort verfügbar", "Faire Konditionen", "Verschiedene Fahrzeugklassen"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sicherheit geht vor – wir prüfen, warten und erneuern Ihre Bremsanlage nach Herstellervorgaben. Für zuverlässiges Bremsen in jeder Situation.",
      highlights: ["Bremsscheiben & Beläge", "Bremsflüssigkeitswechsel", "Funktionsprüfung"],
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
