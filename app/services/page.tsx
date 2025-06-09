import type { Metadata } from "next"
import GraduateList from "@/components/graduates/servicesView"

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
      <GraduateList />
    </>
  )
}
