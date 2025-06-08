import type { Metadata } from "next"
import CoverageContact from "@/components/home/cobertura"

export const metadata: Metadata = {
  title: "WISP",
  icons: {
    icon: "/log.png",
  },
  description:
    "Empresa de Telecomunicaciones",
};

export default function ServicesPage() {
  return (
    <>    
      <CoverageContact />
    </>
  )
}
