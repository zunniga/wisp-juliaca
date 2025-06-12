import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import {Footer} from "@/components/layout/footer";
import WhatsAppWidget from "@/components/widgets/whatsapp-widget";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Wisp - Soluciones en Telecomunicaciones de Alta Calidad",
  description:
    "Wisp es una empresa peruana especializada en brindar soluciones integrales en telecomunicaciones, ofreciendo servicios de internet, redes y conectividad para hogares y empresas.",
  keywords:
    "Wisp, telecomunicaciones Perú, internet empresarial, servicios de conectividad, redes inalámbricas, soluciones en telecomunicaciones, Wisp Perú",
  openGraph: {
    title: "Wisp - Soluciones en Telecomunicaciones de Alta Calidad",
    description:
      "Wisp brinda servicios de telecomunicaciones en Perú, con soluciones personalizadas de internet, redes y conectividad para hogares, negocios e instituciones.",
    images: ["/images/og-image.jpg"],
    type: "website",
    locale: "es_PE",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans ${poppins.variable}`} suppressHydrationWarning>
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
          <GoogleAnalytics />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
