import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GeoResgate",
  description: "Sistema de alerta emergencial para enchentes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-poppins">{children}</body>
    </html>
  );
}