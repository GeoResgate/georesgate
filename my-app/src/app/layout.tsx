import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeoResgate",
  description: "Sistema de resposta a emergências",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white m-0 p-0">{children}</body>
    </html>
  );
}
