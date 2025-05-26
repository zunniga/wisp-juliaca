import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import ServicesOverview from "@/components/home/graduates-view";
import WhyChooseUsSection from "@/components/home/courses-view";
import TestimonialsSection from "@/components/home/testimonials-section";
import FirstSection from "@/components/home/first-section";
import InstagramSection from "@/components/home/instagram-section";
import CTASection from "@/components/home/cta-section";
import CounterNumbers from "@/components/home/counter-number";
import ContactView from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "INALTA",
  icons: {
    icon: "/prisma.png",
  },
  description:
    "Corporación INALTA es una empresa dedicada a la enzeñanza de diplomas y cursos de alta calidad en el área de la salud y la educación. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el sector. Nuestro objetivo es brindar una formación integral y actualizada a nuestros estudiantes, para que puedan destacar en su campo laboral.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FirstSection />
      <ServicesOverview />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <CounterNumbers />
      {/* <ContactView /> */}
    </>
  );
}
