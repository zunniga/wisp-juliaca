import type { Metadata } from "next"
import ServicesTabs from "@/components/services/services-tabs"
import ServicesBanner from "@/components/services/services-banner"

export const metadata: Metadata = {
  title: "Our Services - Glow Unisex Salon",
  description:
    "Explore our wide range of beauty and grooming services for men and women, including haircuts, styling, nail care, and makeup.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesBanner />
      <div className="py-16">
        <div className="container-custom">
          <ServicesTabs />
        </div>
      </div>
    </>
  )
}
