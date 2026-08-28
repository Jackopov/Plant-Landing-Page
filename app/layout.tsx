import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Botanique Privé — Rare Tropical Plants for Exclusive Interiors",
  description:
    "Curated collection of extraordinary tropical specimens for luxury residences, boutique hotels, and penthouse gardens. White-glove botanical concierge service.",
  keywords: [
    "luxury plants",
    "tropical plants",
    "interior design",
    "botanical concierge",
    "rare plants",
    "monstera",
    "philodendron",
  ],
  openGraph: {
    title: "Botanique Privé",
    description: "Living sculptures for discerning interiors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
