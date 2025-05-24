import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import InstagramSection from "@/components/home/instagram-section"
import CTASection from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "INALTA",
  icons: {
    icon: "/prisma.png",
  },
  description:
    "Corporación INALTA es una empresa dedicada a la enzeñanza de diplomas y cursos de alta calidad en el área de la salud y la educación. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el sector. Nuestro objetivo es brindar una formación integral y actualizada a nuestros estudiantes, para que puedan destacar en su campo laboral.",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
    </>
  )
}
