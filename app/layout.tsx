import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIGITALYNX",
  description: "Découvrez Digitalynx , L'artisan de votre succès en ligne. Nous sommes une équipe passionnée, spécialisée dans le marketing digital, avec une expertise pointue en création de sites web. Chez Digitalynx, nous croyons fermement en la puissance d'une présence en ligne pour propulser les entreprises vers de nouveaux sommets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
