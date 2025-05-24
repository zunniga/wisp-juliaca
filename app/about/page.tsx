import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Glow Unisex Salon",
  description: "Learn about Glow Unisex Salon's history, mission, and our team of expert stylists.",
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light py-20 mb-12">
        <div className="container-custom">
          <h1 className="heading-xl text-white text-center mb-4">About Glow Salon</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            Discover our story, our passion for beauty, and our commitment to excellence.
          </p>
        </div>
      </div>
      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="heading-lg mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Glow Salon has been at the forefront of beauty and style in Mumbai. Our journey began
              with a simple vision: to provide top-quality beauty services in a welcoming, luxurious environment.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've grown from a small local salon to a renowned beauty destination, thanks to our
              commitment to excellence and our passionate team of skilled professionals.
            </p>
            <Button asChild className="mt-4">
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80"
              alt="Glow Salon Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Glow Salon, our mission is to enhance the natural beauty of every client, boost their confidence, and
            provide a relaxing and rejuvenating experience that leaves them feeling refreshed and radiant.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="heading-lg text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
            ].map((image, index) => (
              <div key={index} className="salon-card text-center p-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src={image || "/placeholder.svg"} alt={`Stylist ${index + 1}`} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Stylist Name</h3>
                <p className="text-gray-600 mb-4">Expert in haircuts, coloring, and styling</p>
                <Link href="/booking" className="text-primary hover:text-primary-dark transition-colors">
                  Book with this stylist
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="heading-lg mb-6">Experience the Glow Difference</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We invite you to visit Glow Salon and experience our commitment to beauty, style, and exceptional service
            firsthand.
          </p>
          <Button asChild size="lg">
            <Link href="/booking">Book Your Appointment Today</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
