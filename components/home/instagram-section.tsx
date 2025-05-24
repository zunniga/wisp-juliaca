import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const instagramPosts = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop&crop=focalpoint&auto=format&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop&crop=focalpoint&auto=format&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop&crop=focalpoint&auto=format&q=80",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=300&h=300&fit=crop&crop=focalpoint&auto=format&q=80",
]

export default function InstagramSection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-6">Join Our Instagram Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Follow us on Instagram for daily inspiration, behind-the-scenes content, and exclusive offers.
          </p>
          <div className="flex items-center justify-center mb-8">
            <Instagram className="w-12 h-12 text-primary mr-4" />
            <span className="text-4xl font-bold gradient-text">35K+ Followers</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={post || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <a href="https://www.instagram.com/glowsalon" target="_blank" rel="noopener noreferrer">
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
