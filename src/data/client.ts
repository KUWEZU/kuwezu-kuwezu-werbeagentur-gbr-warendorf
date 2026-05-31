/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-31T19:25:24.813Z
 * Kundennummer: 141
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KUWEZU Werbeagentur GbR",
  branche: "",
  ort: "Warendorf",
  slogan: "Autoglas und Fahrwerksservice",
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
    ueberschrift: "Autoglas und Fahrwerksservice in Warendorf",
    ueberschriftHighlight: "Autoglas und Fahrwerksservice",
    untertext: "Professionelle Autoglasreparatur, präzise Achsvermessung und zuverlässige Ersatzwagen – alles aus einer Hand für Ihre Mobilität.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/141/ueber-uns.webp",
    ueberschrift: "Ihre Experten für Autoglas und Fahrwerk in Warendorf",
    text1: "Die KUWEZU Werbeagentur GbR steht in Warendorf für kompetenten Service rund um Autoglas und Fahrwerk. Mit fundiertem Fachwissen kümmern wir uns um Steinschlagreparaturen, Scheibenaustausch und präzise Achsvermessungen. Dabei setzen wir auf moderne Technik und schnelle Terminvergabe, damit Sie zügig wieder sicher unterwegs sind.",
    text2: "Unser Anspruch ist es, Ihnen verlässlichen Service ohne Umwege zu bieten. Während Ihr Fahrzeug bei uns ist, stellen wir Ihnen gerne einen Ersatzwagen zur Verfügung – so bleiben Sie mobil und flexibel.",
    tags: ["Schnelle Terminvergabe", "Moderne Werkstattausstattung", "Ersatzwagen inklusive", "Faire Preise"],
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
      description: "Von der Steinschlagreparatur bis zum kompletten Scheibentausch – wir sorgen für klare Sicht und Sicherheit. Mit Originalersatzglas und fachgerechter Montage.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch", "Originalersatzglas"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Vermessung und Einstellung Ihres Fahrwerks mit computergesteuerter Technik. Für optimalen Geradeauslauf, gleichmäßigen Reifenverschleiß und sicheres Fahrverhalten.",
      highlights: ["Computergestützte Vermessung", "Fahrwerkseinstellung", "Reifenverschleiß minimieren"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie während der Reparatur mobil bleiben, stellen wir Ihnen einen zuverlässigen Ersatzwagen zur Verfügung. Unkompliziert und planbar.",
      highlights: ["Sofort verfügbar", "Unkomplizierte Abwicklung", "Mobilität garantiert"],
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
