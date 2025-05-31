import type { Metadata } from "next"
import GraduateList from "@/components/graduates/graduatesView"

export const metadata: Metadata = {
  title: "INALTA",
  icons: {
    icon: "/icon-inalta.png",
  },
  description:
    "Corporación INALTA es una empresa dedicada a la enzeñanza de diplomas y cursos de alta calidad en el área de la salud y la educación. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el sector. Nuestro objetivo es brindar una formación integral y actualizada a nuestros estudiantes, para que puedan destacar en su campo laboral.",
};

export default function ServicesPage() {
  return (
    <>    
      <GraduateList />
    </>
  )
}
