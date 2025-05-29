"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Clock, BookOpen, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"

const courses = [
  {
    id: 1,
    category: "Datos y Tecnología",
    categoryColor: "bg-pink-500",
    title: "Curso básico para entender sobre software",
    description: "Aprende los fundamentos del desarrollo de software",
    image: "/image/courses/course.webp",
    lessons: 23,
    duration: "1h 30min",
    originalPrice: "$67.00",
    currentPrice: "$32.00",
    isFree: false,
    instructor: { name: "Miguel Jhon", avatar: "/placeholder.svg?height=40&width=40", rating: 4.8, reviews: 44 },
  },
  {
    id: 2,
    category: "Mecánica",
    categoryColor: "bg-blue-500",
    title: "Curso avanzado para entender sobre software",
    description: "Conceptos avanzados de ingeniería mecánica",
    image: "/image/courses/course.webp",
    lessons: 29,
    duration: "2h 10min",
    originalPrice: "$67.00",
    currentPrice: "$32.00",
    isFree: true,
    instructor: { name: "Rinis Jhon", avatar: "/placeholder.svg?height=40&width=40", rating: 4.9, reviews: 44 },
  },
  {
    id: 3,
    category: "Desarrollo",
    categoryColor: "bg-red-500",
    title: "Curso completo para entender sobre soluciones",
    description: "Dominio del desarrollo full-stack",
    image: "/image/courses/course.webp",
    lessons: 25,
    duration: "1h 40min",
    originalPrice: "$67.00",
    currentPrice: "$40.00",
    isFree: true,
    instructor: { name: "Miguel Jhon", avatar: "/placeholder.svg?height=40&width=40", rating: 4.7, reviews: 44 },
  },
  {
    id: 4,
    category: "Diseño UI & UX",
    categoryColor: "bg-green-500",
    title: "Curso de diseño para entender sobre soluciones",
    description: "Crea diseños hermosos y funcionales",
    image: "/image/courses/course.webp",
    lessons: 36,
    duration: "3h 40min",
    originalPrice: "$67.00",
    currentPrice: "$40.00",
    isFree: true,
    instructor: { name: "Miguel Robin", avatar: "/placeholder.svg?height=40&width=40", rating: 4.8, reviews: 44 },
  },
  {
    id: 5,
    category: "Marketing",
    categoryColor: "bg-purple-500",
    title: "Fundamentos de Marketing Digital",
    description: "Domina las estrategias de marketing modernas",
    image: "/image/courses/course.webp",
    lessons: 18,
    duration: "2h 20min",
    originalPrice: "$67.00",
    currentPrice: "$35.00",
    isFree: false,
    instructor: { name: "Sara Wilson", avatar: "/placeholder.svg?height=40&width=40", rating: 4.9, reviews: 52 },
  },
  {
    id: 6,
    category: "Inteligencia Artificial",
    categoryColor: "bg-indigo-500",
    title: "Introducción a la Inteligencia Artificial",
    description: "Aprende los conceptos básicos de IA y Machine Learning",
    image: "/image/courses/course.webp",
    lessons: 32,
    duration: "4h 15min",
    originalPrice: "$89.00",
    currentPrice: "$45.00",
    isFree: false,
    instructor: { name: "Carlos Mendez", avatar: "/placeholder.svg?height=40&width=40", rating: 4.9, reviews: 67 },
  },
  {
    id: 7,
    category: "Fotografía",
    categoryColor: "bg-orange-500",
    title: "Fotografía Digital Profesional",
    description: "Técnicas avanzadas de fotografía y edición",
    image: "/image/courses/course.webp",
    lessons: 28,
    duration: "3h 30min",
    originalPrice: "$75.00",
    currentPrice: "$38.00",
    isFree: true,
    instructor: { name: "Ana García", avatar: "/placeholder.svg?height=40&width=40", rating: 4.8, reviews: 89 },
  },
  {
    id: 8,
    category: "Finanzas",
    categoryColor: "bg-teal-500",
    title: "Gestión Financiera Personal",
    description: "Aprende a manejar tus finanzas personales",
    image: "/image/courses/course.webp",
    lessons: 20,
    duration: "2h 45min",
    originalPrice: "$55.00",
    currentPrice: "$28.00",
    isFree: false,
    instructor: { name: "Roberto Silva", avatar: "/placeholder.svg?height=40&width=40", rating: 4.7, reviews: 34 },
  },
]

// Restaurar el hook para responsividad
function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    function updateCardsPerView() {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4) // lg: 4 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(3) // md: 3 cards
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2) // sm: 2 cards
      } else {
        setCardsPerView(1) // xs: 1 card
      }
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  return cardsPerView
}

export default function AutoCourseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const cardsPerView = useCardsPerView()
  const maxIndex = Math.max(0, courses.length - cardsPerView)

  // Ref para detectar cuando el componente está en vista
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const navigate = (direction: "prev" | "next") => {
    setCurrentIndex(
      direction === "prev"
        ? currentIndex === 0
          ? maxIndex
          : currentIndex - 1
        : currentIndex >= maxIndex
          ? 0
          : currentIndex + 1,
    )
  }

  const getCardWidth = () => {
    return `${100 / cardsPerView}%`
  }

  const getTranslateX = () => {
    return -(currentIndex * (100 / cardsPerView))
  }

  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    },
  }

  useEffect(() => {
    setCurrentIndex(0)
  }, [cardsPerView])

  return (
    <motion.section
      ref={ref}
      className="py-8 md:py-12 lg:py-16 bg-gray-100 dark:bg-[#0F172A]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations.container}
    >
      {/* Header */}
      <motion.div className="text-center mb-8 md:mb-12 px-4" variants={animations.item}>
        <div className="container flex items-center justify-center mb-4">
          <span className="text-[#006174] dark:text-[#A1D302] font-semibold text-xs tracking-wider uppercase">
            CURSOS
          </span>
          <div className="ml-3 w-8 md:w-12 h-0.5 bg-[#006174] dark:bg-[#A1D302]"></div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#006174] dark:text-[#A1D302] mb-4 md:mb-6">
          Descubre Cursos Increíbles
        </h2>
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto px-4">
          Explora nuestra colección completa de cursos profesionales diseñados para mejorar tus habilidades.
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="relative px-4 md:px-8"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        variants={animations.item}
      >
        <div className="container overflow-hidden rounded-2xl">
          <motion.div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${getTranslateX()}%)` }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: getCardWidth() }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-white dark:bg-[#20252b] dark:border dark:border-[#006174]/20 rounded-2xl shadow-2xl overflow-hidden h-full">
                  <div className="relative">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={350}
                      height={200}
                      className="w-full h-40 md:h-48 object-cover"
                    />
                    <Badge
                      className={`absolute top-2 md:top-3 left-2 md:left-3 ${course.categoryColor} text-white border-0 text-xs`}
                    >
                      {course.category}
                    </Badge>
                    {course.isFree && (
                      <Badge className="absolute top-2 md:top-3 right-2 md:right-3 bg-green-500 text-white border-0 text-xs">
                        Gratis
                      </Badge>
                    )}
                  </div>

                  <div className="p-3 md:p-5">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-500 dark:text-gray-200 mb-2 text-xs md:text-sm">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{course.lessons} Lecciones</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-[#A1D302] mb-2 line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-200 mb-3 text-xs md:text-sm line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base md:text-lg font-bold text-purple-600 dark:text-[#A1D302]">
                        {course.isFree ? "Gratis" : course.currentPrice}
                      </span>
                      {!course.isFree && (
                        <span className="text-gray-400 dark:text-[#006174]/70 line-through text-xs md:text-sm">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src={course.instructor.avatar || "/placeholder.svg"}
                        alt={course.instructor.name}
                        width={32}
                        height={32}
                        className="rounded-full w-6 h-6 md:w-8 md:h-8"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-[#A1D302] text-xs md:text-sm">
                          {course.instructor.name}
                        </p>
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-2 h-2 md:w-2.5 md:h-2.5 ${
                                  i < Math.floor(course.instructor.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300 dark:text-[#006174]/30"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-[#006174]/70">
                            ({course.instructor.reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation and Dots */}
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#006174] dark:hover:border-[#A1D302] hover:bg-white hover:text-[#006174] dark:hover:text-[#A1D302] transition-all duration-300 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100"
            onClick={() => navigate("prev")}
          >
            <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
          </Button>

          <div className="flex justify-center gap-1 md:gap-2">
            {[...Array(Math.ceil(courses.length / cardsPerView))].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? "bg-[#006174] scale-125"
                    : "bg-[#A1D302]/30 hover:bg-[#006174]/50"
                }`}
                onClick={() => setCurrentIndex(index * cardsPerView)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#006174] dark:hover:border-[#A1D302] hover:bg-white hover:text-[#006174] dark:hover:text-[#A1D302] transition-all duration-300 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100"
            onClick={() => navigate("next")}
          >
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
          </Button>
        </div>
      </motion.div>
    </motion.section>
  )
}
