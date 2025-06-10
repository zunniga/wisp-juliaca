import type { Metadata } from "next"
import Proyect from "@/components/home/proyect"

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
      <Proyect />
    </>
  )
}
