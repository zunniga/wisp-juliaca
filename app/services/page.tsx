import type { Metadata } from "next"
import GraduateList from "@/components/graduates/graduatesView"

export const metadata: Metadata = {
  title: "WISP",
  icons: {
    icon: "/icon-inalta.png",
  },
  description:
    "Empresa de Telecomunicaciones",
};

export default function ServicesPage() {
  return (
    <>    
      <GraduateList />
    </>
  )
}
