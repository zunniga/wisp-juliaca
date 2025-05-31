import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppWidget from "@/components/widgets/whatsapp-widget";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Corporación Inalta - Formación Profesional de Alto Nivel",
  description:
    "Corporación Inalta es una empresa peruana especializada en ofrecer cursos y diplomados para profesionales de diversos sectores, promoviendo el desarrollo y la capacitación continua.",
  keywords:
    "Corporación Inalta, cursos profesionales, diplomados en Perú, capacitación continua, educación para profesionales, formación especializada, cursos en línea",
  openGraph: {
    title: "Corporación Inalta - Formación Profesional de Alto Nivel",
    description:
      "Corporación Inalta ofrece cursos y diplomados en Perú para profesionales de distintos rubros. Impulsa tu desarrollo con formación especializada y de calidad.",
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
      <body className={`font-sans ${poppins.variable}` }>
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
