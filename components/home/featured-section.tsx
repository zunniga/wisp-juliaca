import Image from "next/image"
import { Users, Award, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Stylists",
    description: "Our team of certified professionals brings years of experience and creativity to every service.",
    image: "/placeholder.svg?height=300&width=400&text=Expert+Stylists",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Premium Products",
    description: "We use only the highest quality, luxurious products to ensure the best results for our clients.",
    image: "/placeholder.svg?height=300&width=400&text=Premium+Products",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Personalized Experience",
    description: "Enjoy a tailored approach to beauty, with services customized to your unique style and needs.",
    image: "/placeholder.svg?height=300&width=400&text=Personalized+Experience",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Why Choose Glow Salon?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our commitment to excellence, luxury, and personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="salon-card overflow-hidden group hover-lift">
              <div className="relative h-48">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-white/90 rounded-full mr-3">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/about"
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Learn More About Us
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
