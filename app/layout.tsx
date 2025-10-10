// Kacper - główny layout aplikacji
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COSTRUM - Mars & AI dla pozaziemskich zastosowań",
  description: "Misja kolonizacji Marsa - Miasto 14K do 2053 roku. Przyspieszamy ewolucję ludzkości w gatunek multiplanetarny.",
  keywords: ["Mars", "kolonizacja", "AI", "przestrzeń kosmiczna", "technologia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      {/* Michał - body z customowym tłem */}
      <body className="bg-black bg-stars">
        {children}
      </body>
    </html>
  );
}
