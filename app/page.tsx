import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import { Clients } from "@/components/home/graduates-view";
import WhyChooseUsSection from "@/components/home/courses-view";
import TestimonialsSection from "@/components/home/testimonials-section";
import { FirstSection } from "@/components/home/first-section";
import InstagramSection from "@/components/home/instagram-section";
import CTASection from "@/components/home/cta-section";
import CounterNumbers from "@/components/home/counter-number";
import { ContactView } from "@/components/home/contact-view";

export const metadata: Metadata = {
  title: "WISP",
  icons: {
    icon: "/icon-inalta.png",
  },
  description: "Empresa de Telecomunicaciones",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FirstSection />

      <CounterNumbers />
      <Clients />

      <TestimonialsSection />

      <ContactView />
    </>
  );
}
