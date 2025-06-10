"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function ProjectsGallery() {
  const [searchTerm, setSearchTerm] = useState("")
  const { theme } = useTheme()
  const [selectedImage, setSelectedImage] = useState<(typeof projectImages)[0] | null>(null)

  // Array con las 8 imágenes de proyectos
  const projectImages = [
    {
      id: 1,
      src: "image/project/1.jpeg",
      alt: "Proyecto 1",
    },
    {
      id: 2,
      src: "image/project/2.jpeg",
      alt: "Proyecto 2",
    },
    {
      id: 3,
      src: "image/project/3.jpeg",
      alt: "Proyecto 3",
    },
    {
      id: 4,
      src: "image/project/4.jpeg",
      alt: "Proyecto 4",
    },
    {
      id: 5,
      src: "image/project/5.jpeg",
      alt: "Proyecto 5",
    },
    {
      id: 6,
      src: "image/project/6.jpeg",
      alt: "Proyecto 6",
    },
    {
      id: 7,
      src: "image/project/7.jpeg",
      alt: "Proyecto 7",
    },
    {
      id: 8,
      src: "image/project/8.jpeg",
      alt: "Proyecto 8",
    },
  ]

  const getFilteredImages = () => {
    if (!searchTerm) return projectImages

    return projectImages.filter((image) => image.alt.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <div className="mt-16">
      <header className="relative bg-[#030712] text-white py-16 overflow-hidden min-h-[500px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/70 to-[#030712]/90" />

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-cyan-400/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-cyan-400/20 rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-2 h-20 bg-gradient-to-b from-cyan-400/40 to-transparent transform rotate-12"></div>
        <div className="absolute top-1/4 left-20 w-2 h-16 bg-gradient-to-b from-cyan-400/30 to-transparent transform -rotate-12"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Left side image */}
            <div className="hidden lg:block relative">
             
            </div>

            {/* Center content */}
            <div className="flex-1 text-center px-8">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#F8BB7C]/20 border border-[#F8BB7C]/30 rounded-full text-sm font-medium text-[#F8BB7C] mb-4">
                  🏆 Proyectos Exitosos Realizados
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Nuestros Proyectos
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Galería de proyectos culminados exitosamente!
              </p>
      
              {/* Stats */}
              <div className="flex justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>+20 Proyectos Completados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>100% Satisfacción</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Garantía Extendida</span>
                </div>
              </div>
            </div>

            {/* Right side image */}
            <div className="hidden lg:block relative">
             
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-1 h-32 bg-gradient-to-b from-cyan-400/20 to-transparent transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-1 h-24 bg-gradient-to-b from-cyan-400/15 to-transparent transform -rotate-45 animate-pulse"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Galería de Proyectos Realizados
            {searchTerm && (
              <span className="text-lg font-normal text-gray-600 block mt-2">
                ({getFilteredImages().length} de {projectImages.length} proyectos)
              </span>
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {getFilteredImages().map((project) => (
              <div
                key={project.id}
                className="relative h-80 overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(project)}
              >
                <Image src={project.src || "/placeholder.svg"} alt={project.alt} fill className="object-cover" />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <Search className="h-6 w-6 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dialog para mostrar imagen ampliada */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
              {selectedImage && (
                <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>

          {getFilteredImages().length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron proyectos que coincidan con "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
