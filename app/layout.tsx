import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Adriana Grando | Psicoterapia de Casal",
  description:
    "Psicoterapia de casal com base na IBCT. Adriana Grando, psicóloga CRP 08/46974. Atendimento presencial em Toledo-PR e online em todo o Brasil. Agende pelo WhatsApp.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0WF36LMBQB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0WF36LMBQB');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
