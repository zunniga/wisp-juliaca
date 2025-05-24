import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery/gallery-grid"
import GalleryBanner from "@/components/gallery/gallery-banner"

export const metadata: Metadata = {
  title: "Gallery - Glow Unisex Salon",
  description: "View our gallery of hairstyles, nail art, makeup looks, and more from Glow Unisex Salon.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryBanner />
      <div className="py-16">
        <div className="container-custom">
          <GalleryGrid />
        </div>
      </div>
    </>
  )
}
