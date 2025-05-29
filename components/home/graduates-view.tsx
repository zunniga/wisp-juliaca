"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const diplomados = [
  {
    id: 1,
    title: "Diplomado en Marketing Digital",
    description: "Estrategias avanzadas para el mundo digital",
    image: "image/graduates/test.webp",
    price: 450,
    originalPrice: 600,
    category: "Marketing",
    rating: 4.8,
    reviews: 156,
    badge: "Oferta",
    badgeColor: "bg-orange-500",
  },
  {
    id: 2,
    title: "Diplomado en Gestión de Proyectos",
    description: "Metodologías ágiles y tradicionales",
    image: "image/graduates/test.webp",
    price: 520,
    originalPrice: 650,
    category: "Gestión",
    rating: 4.9,
    reviews: 203,
    badge: "Popular",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Diplomado en Inteligencia Artificial",
    description: "Machine Learning y Deep Learning aplicado",
    image: "image/graduates/test.webp",
    price: 680,
    originalPrice: 850,
    category: "Tecnología",
    rating: 4.7,
    reviews: 89,
    badge: "Nuevo",
    badgeColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Diplomado en Finanzas Corporativas",
    description: "Análisis financiero y toma de decisiones",
    image: "image/graduates/test.webp",
    price: 590,
    originalPrice: 750,
    category: "Finanzas",
    rating: 4.6,
    reviews: 124,
    badge: "Destacado",
    badgeColor: "bg-purple-500",
  },
  {
    id: 5,
    title: "Diplomado en Recursos Humanos",
    description: "Gestión del talento humano y liderazgo",
    image: "image/graduates/test.webp",
    price: 480,
    originalPrice: 620,
    category: "RRHH",
    rating: 4.5,
    reviews: 98,
    badge: "Trending",
    badgeColor: "bg-pink-500",
  },
  {
    id: 6,
    title: "Diplomado en Transformación Digital",
    description: "Innovación y cambio organizacional",
    image: "image/graduates/test.webp",
    price: 650,
    originalPrice: 800,
    category: "Innovación",
    rating: 4.8,
    reviews: 167,
    badge: "Premium",
    badgeColor: "bg-yellow-500",
  },
]

export default function DiplomadosDestacados() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Número de tarjetas visibles según el tamaño de pantalla
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4 // lg: 4 tarjetas
      if (window.innerWidth >= 768) return 2 // md: 2 tarjetas
      return 1 // sm: 1 tarjeta
    }
    return 4
  }

  const [visibleCards, setVisibleCards] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, diplomados.length - visibleCards)

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
    // Reanudar auto-play después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    // Reanudar auto-play después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <motion.section
      className="bg-gray-100 dark:bg-[#0F172A] text-gray-900 dark:text-white py-16 px-4 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título y descripción */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center w-full mb-4">
            <span className="text-[#006174] dark:text-[#A1D302] font-semibold text-xs tracking-wider uppercase transition-colors duration-300">
              DIPLOMADOS
            </span>
            <div className="ml-3 w-12 h-0.5 bg-[#006174] dark:bg-[#A1D302] transition-colors duration-300"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#006174] dark:text-[#A1D302] mb-6">
            Diplomados Destacados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Impulsa tu carrera profesional con nuestros diplomados de alta calidad. Programas diseñados por expertos
            para desarrollar competencias clave en el mercado actual.
          </p>
        </motion.div>

        {/* Navegación y controles */}
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#006174] dark:hover:border-[#A1D302] hover:bg-white hover:text-[#006174] dark:hover:text-[#A1D302] transition-all duration-300 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#006174] dark:hover:border-[#A1D302] hover:bg-white hover:text-[#006174] dark:hover:text-[#A1D302] transition-all duration-300 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100"
              onClick={goToNext}
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicadores de posición */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#006174] dark:bg-[#A1D302]" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

        </motion.div>

        {/* Contenedor del carrusel */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {diplomados.map((diplomado) => (
              <motion.div
                key={diplomado.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCards}%` }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: diplomado.id * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Badge y botón favorito */}
                  <div className="relative">
                    <Badge className={`absolute top-3 left-3 ${diplomado.badgeColor} text-white z-10`}>
                      {diplomado.badge}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 text-gray-400 hover:text-red-500 dark:hover:text-red-400 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 z-10"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>

                    {/* Imagen del diplomado */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                      <Image
                        src={diplomado.image || "/placeholder.svg"}
                        alt={diplomado.title}
                        width={200}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900 dark:text-white">
                      {diplomado.title}
                    </h3>

                    {/* Precio */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-[#006174] dark:text-[#A1D302]">
                        ${diplomado.price}.00
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        ${diplomado.originalPrice}.00
                      </span>
                    </div>

                    {/* Categoría y calificación */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-[#006174] dark:text-[#A1D302] font-medium">{diplomado.category}</span>
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(diplomado.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300 dark:text-gray-500"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">({diplomado.reviews})</span>
                      </div>
                    </div>

                    {/* Botón de acción */}
                    <Button
                      asChild
                      className="w-full bg-[#006174] hover:bg-[#004d5a] dark:bg-[#A1D302] dark:hover:bg-[#8fb002] text-white dark:text-gray-900"
                    >
                      <Link href={`/diplomados/${diplomado.id}`}>Ver Detalles</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Botón para ver todos */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#006174] to-[#00A9BB] hover:from-[#006174]/90 hover:to-[#00A9BB]/90 dark:from-[#739700]/70 dark:to-[#8eb902] dark:text-gray-100 text-white px-8 py-3 h-12 text-base font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Link href="/diplomados">Ver Todos los Diplomados</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
