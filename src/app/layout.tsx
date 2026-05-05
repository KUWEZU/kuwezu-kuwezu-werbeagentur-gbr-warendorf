import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KUWEZU Werbeagentur Warendorf | Werbung & Design",
  description: "Professionelle Werbelösungen aus Warendorf: Fahrzeugbeschriftung, Design, Werbetechnik & mehr. Persönliche Beratung & faire Preise. Jetzt anfragen!",
  openGraph: {
    title: "KUWEZU Werbeagentur Warendorf | Werbung & Design",
    description: "Professionelle Werbelösungen aus Warendorf: Fahrzeugbeschriftung, Design, Werbetechnik & mehr. Persönliche Beratung & faire Preise. Jetzt anfragen!",
    type: "website",
    locale: "de_DE",
  },

};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-brand-bg text-brand-text antialiased">
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        {children}
        <AccessibilityWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
