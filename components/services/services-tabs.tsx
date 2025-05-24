"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceCard from "@/components/services/service-card"
import { UserIcon as Male, UserIcon as Female, Users } from "lucide-react"

// Service data
const services = {
  men: [
    {
      id: "m1",
      name: "Men's Haircut",
      description: "Precision cutting and styling tailored to your face shape and preferences.",
      price: 300,
      duration: "30 min",
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "m2",
      name: "Beard Trim & Styling",
      description: "Expert beard shaping and grooming to enhance your facial features.",
      price: 200,
      duration: "20 min",
      image:
        "https://images.unsplash.com/photo-1461799821556-055545cf32dc?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "m3",
      name: "Hair Color",
      description: "Natural-looking color to cover grays or try a new look.",
      price: 800,
      duration: "60 min",
      image:
        "https://images.unsplash.com/photo-1737042126375-10c79e59c55c?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "m4",
      name: "Men's Facial",
      description: "Deep cleansing facial designed specifically for men's skin needs.",
      price: 600,
      duration: "45 min",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
  ],
  women: [
    {
      id: "w1",
      name: "Women's Haircut",
      description: "Precision cutting and styling to enhance your natural beauty.",
      price: 500,
      duration: "45 min",
      image:
        "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "w2",
      name: "Hair Coloring",
      description: "From highlights to full color, our stylists create the perfect look for you.",
      price: 1200,
      duration: "90 min",
      image:
        "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "w3",
      name: "Bridal Makeup",
      description: "Complete bridal makeup package to make you look stunning on your special day.",
      price: 3000,
      duration: "120 min",
      image:
        "https://images.unsplash.com/photo-1594140700520-8afea3283e2c?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "w4",
      name: "Manicure & Nail Art",
      description: "Pamper your hands with our luxurious manicure and creative nail art.",
      price: 500,
      duration: "60 min",
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
  ],
  unisex: [
    {
      id: "u1",
      name: "Hair Spa Treatment",
      description: "Revitalize your hair with our nourishing spa treatment.",
      price: 800,
      duration: "60 min",
      image:
        "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "u2",
      name: "Eyebrow Threading",
      description: "Perfect your brows with our precise threading technique.",
      price: 100,
      duration: "15 min",
      image:
        "https://images.unsplash.com/photo-1535637603896-07c179d71103?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "u3",
      name: "Basic Facial",
      description: "Refresh and rejuvenate your skin with our classic facial.",
      price: 500,
      duration: "45 min",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "u4",
      name: "Head Massage",
      description: "Relieve stress and tension with our therapeutic head massage.",
      price: 300,
      duration: "30 min",
      image:
        "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
  ],
}

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter services based on active tab
  const getFilteredServices = () => {
    if (activeTab === "all") {
      return [...services.men, ...services.women, ...services.unisex]
    }
    return services[activeTab as keyof typeof services] || []
  }

  return (
    <>
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            <TabsTrigger value="men" className="flex items-center gap-2">
              <Male className="h-4 w-4" />
              <span>Men's</span>
            </TabsTrigger>
            <TabsTrigger value="women" className="flex items-center gap-2">
              <Female className="h-4 w-4" />
              <span>Women's</span>
            </TabsTrigger>
            <TabsTrigger value="unisex" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Unisex</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredServices().map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="men" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.men.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="women" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.women.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unisex" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.unisex.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
