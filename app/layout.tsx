import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container";
import AsiderRight from "@/components/Asider-right";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Página Inícial / X",
  description: "Twitter o seu portal de notícias",
  keywords: ["twitter", "X", "notícias", "novidades", "tendencias"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Container>
          <div className="flex min-h-screen bg-red-300 relative">
            <AsiderRight />
            <main>{children}</main>
          </div>
        </Container>
      </body>
    </html>
  );
}
