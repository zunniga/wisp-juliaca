"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Asistente de Enfermería",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "El programa de enfermería aquí es excepcional. Los profesores son muy dedicados y siempre están dispuestos a ayudar. He aprendido muchísimo y me siento preparada para mi carrera.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Estudiante de Medicina",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "Las instalaciones son de primera clase y el ambiente de aprendizaje es increíble. Los laboratorios están muy bien equipados y las clases son muy dinámicas e interactivas.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Técnico en Radiología",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "Lo que más me gusta es la atención personalizada. Los grupos son pequeños y cada estudiante recibe la atención que necesita para desarrollar sus habilidades al máximo.",
    rating: 5,
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "Paramédico",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "La experiencia práctica que ofrecen es invaluable. Desde el primer semestre estás trabajando con casos reales y eso te prepara muy bien para el mundo laboral.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const changeTestimonial = (newIndex: number) => {
    if (isTransitioning) return

    setIsTransitioning(true)

    // After animation completes, change the index
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setIsTransitioning(false)
    }, 300)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % testimonials.length
        changeTestimonial(nextIndex)
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const handlePrev = () => {
    setAutoplay(false)
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
    changeTestimonial(prevIndex)

    // Reactivar autoplay después de 5 segundos
    setTimeout(() => {
      setAutoplay(true)
    }, 5000)
  }

  const handleNext = () => {
    setAutoplay(false)
    const nextIndex = (currentIndex + 1) % testimonials.length
    changeTestimonial(nextIndex)

    // Reactivar autoplay después de 5 segundos
    setTimeout(() => {
      setAutoplay(true)
    }, 5000)
  }

  const getVisibleTestimonials = () => {
    const extendedTestimonials = [...testimonials, ...testimonials]
    // On mobile, show only one testimonial
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [extendedTestimonials[currentIndex]]
    }
    // On desktop, show two testimonials
    return [extendedTestimonials[currentIndex], extendedTestimonials[currentIndex + 1]]
  }

  return (
    <section className="relative">
      {/* Main content area */}
      <div className="bg-gray-50 dark:bg-[#20252b] relative transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Mobile and Tablet Layout */}
            <div className="lg:hidden">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-[#006174] dark:text-[#A1D302] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300">
                    TESTIMONIOS
                  </span>
                  <div className="ml-3 w-8 sm:w-12 h-0.5 bg-[#006174] dark:bg-[#A1D302] transition-colors duration-300"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-300">
                  Lo Que Los Estudiantes
                  <br />
                  Dicen Sobre Nosotros
                </h2>
                <div className="flex items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-2 transition-colors duration-300 ${
                      autoplay ? "bg-[#A1D302]" : "bg-gray-400 dark:bg-gray-500"
                    }`}
                  ></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {autoplay ? "Reproducción automática" : "Manual"}
                  </span>
                </div>
              </div>

              {/* Testimonials */}
              <div className="relative overflow-hidden mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${currentIndex}-${index}`}
                      className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm dark:shadow-lg relative transition-all duration-500 ease-in-out transform ${
                        isTransitioning ? "translate-x-[-100%] blur-sm opacity-0" : "translate-x-0 blur-0 opacity-100"
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      {/* Quote icon with new colors */}
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                        <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-[#006174] dark:bg-[#A1D302] rounded-lg flex items-center justify-center transition-colors duration-300">
                          <svg
                            className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white dark:text-[#20252b]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                          </svg>
                        </div>
                      </div>

                      {/* Profile section */}
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="relative w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0 ring-2 ring-[#A1D302] dark:ring-[#006174] transition-all duration-300">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 dark:text-white transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-[#006174] dark:text-[#A1D302] text-xs sm:text-sm font-medium transition-colors duration-300">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm transition-colors duration-300">
                        {testimonial.quote}
                      </blockquote>

                      {/* Rating */}
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 sm:w-4 h-3 sm:h-4 text-[#A1D302] dark:text-yellow-400 transition-colors duration-300"
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows - Mobile */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handlePrev}
                  disabled={isTransitioning}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#006174] dark:hover:border-[#A1D302] hover:text-[#006174] dark:hover:text-[#A1D302] transition-all duration-300 bg-white dark:bg-gray-800 disabled:opacity-50 text-gray-600 dark:text-gray-300"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#006174] dark:hover:border-[#A1D302] hover:text-[#006174] dark:hover:text-[#A1D302] transition-all duration-300 bg-white dark:bg-gray-800 disabled:opacity-50 text-gray-600 dark:text-gray-300"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? "bg-[#006174] dark:bg-[#A1D302]" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-start justify-between">
              {/* Left side - Title and Navigation */}
              <div className="w-1/3 pr-8 xl:pr-12">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-[#006174] dark:text-[#A1D302] font-semibold text-sm tracking-wider uppercase transition-colors duration-300">
                      TESTIMONIOS
                    </span>
                    <div className="ml-3 w-12 h-0.5 bg-[#006174] dark:bg-[#A1D302] transition-colors duration-300"></div>
                  </div>
                  <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                    Lo Que Los Estudiantes
                    <br />
                    Dicen Sobre Nosotros
                  </h2>
                  <div className="flex items-center mt-2">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 transition-colors duration-300 ${
                        autoplay ? "bg-[#A1D302]" : "bg-gray-400 dark:bg-gray-500"
                      }`}
                    ></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      {autoplay ? "Reproducción automática" : "Manual"}
                    </span>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={handlePrev}
                    disabled={isTransitioning}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#006174] dark:hover:border-[#A1D302] hover:text-[#006174] dark:hover:text-[#A1D302] transition-all duration-300 bg-white dark:bg-gray-800 disabled:opacity-50 text-gray-600 dark:text-gray-300"
                    aria-label="Testimonio anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isTransitioning}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#006174] dark:hover:border-[#A1D302] hover:text-[#006174] dark:hover:text-[#A1D302] transition-all duration-300 bg-white dark:bg-gray-800 disabled:opacity-50 text-gray-600 dark:text-gray-300"
                    aria-label="Siguiente testimonio"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right side - Testimonials */}
              <div className="w-2/3 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-6">
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${currentIndex}-${index}`}
                      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 xl:p-8 shadow-sm dark:shadow-lg relative transition-all duration-500 ease-in-out transform ${
                        isTransitioning ? "translate-x-[-100%] blur-sm opacity-0" : "translate-x-0 blur-0 opacity-100"
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      {/* Quote icon with new colors */}
                      <div className="absolute top-6 right-6">
                        <div className="w-12 h-12 bg-[#006174] dark:bg-[#A1D302] rounded-lg flex items-center justify-center transition-colors duration-300">
                          <svg
                            className="w-6 h-6 text-white dark:text-[#20252b]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                          </svg>
                        </div>
                      </div>

                      {/* Profile section */}
                      <div className="flex items-center mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 ring-2 ring-[#A1D302] dark:ring-[#006174] transition-all duration-300">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-[#006174] dark:text-[#A1D302] text-sm font-medium transition-colors duration-300">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm transition-colors duration-300">
                        {testimonial.quote}
                      </blockquote>

                      {/* Rating */}
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-[#A1D302] dark:text-yellow-400 transition-colors duration-300"
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
