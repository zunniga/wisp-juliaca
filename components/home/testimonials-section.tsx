"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "./utils/testimonials"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const testimonialVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4 },
  }),
}

// Componente reutilizable para testimonios
function TestimonialCard({
  testimonial,
  index,
  isDesktop,
}: {
  testimonial: any
  index: number
  isDesktop: boolean
}) {
  const sizes = isDesktop
    ? {
        card: "rounded-2xl p-6 xl:p-8",
        avatar: "w-16 h-16",
        icon: "w-12 h-12",
        iconSvg: "w-6 h-6",
        star: "w-4 h-4",
        text: "text-lg",
        quote: "text-sm",
      }
    : {
        card: "rounded-xl p-4 sm:p-6",
        avatar: "w-12 sm:w-14 h-12 sm:h-14",
        icon: "w-8 sm:w-10 h-8 sm:h-10",
        iconSvg: "w-4 sm:w-5 h-4 sm:h-5",
        star: "w-3 sm:w-4 h-3 sm:h-4",
        text: "text-sm sm:text-base",
        quote: "text-xs sm:text-sm",
      }

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 ${sizes.card} shadow-sm dark:shadow-lg relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ y: -5, transition: { duration: 0.8 } }}
    >
      <motion.div
        className={`absolute ${isDesktop ? "top-6 right-6" : "top-4 right-4"}`}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
      >
        <div
          className={`${sizes.icon} bg-[#D29D69] dark:bg-[#F8BB7C] rounded-lg flex items-center justify-center transition-colors duration-300`}
        >
          <svg className={`${sizes.iconSvg} text-white dark:text-[#20252b]`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        </div>
      </motion.div>

      <Link
        className="cursor-pointer"
        href={"https://www.facebook.com/profile.php?id=61565984064270&sk=reviews"}
        target="_blank"
      >
        <motion.div
          className={`flex items-center ${isDesktop ? "mb-6" : "mb-4 sm:mb-6"}`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div
            className={`relative ${sizes.avatar} rounded-full overflow-hidden ${
              isDesktop ? "mr-4" : "mr-3 sm:mr-4"
            } flex-shrink-0 ring-2 ring-[#F8BB7C] dark:ring-[#D29D69] transition-all duration-300`}
          >
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className={`font-bold ${sizes.text} text-gray-900 dark:text-white transition-colors duration-300`}>
              {testimonial.name}
            </h3>
            <p
              className={`text-[#D29D69] dark:text-[#F8BB7C] ${sizes.quote} font-medium transition-colors duration-300`}
            >
              {testimonial.role}
            </p>
          </div>
        </motion.div>
      </Link>

      <motion.blockquote
        className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
          isDesktop ? "mb-6" : "mb-4 sm:mb-6"
        } ${sizes.quote} transition-colors duration-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {testimonial.quote}
      </motion.blockquote>

      <motion.div
        className="flex space-x-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
          >
            <Star
              className={`${sizes.star} text-[#F8BB7C] dark:text-yellow-400 transition-colors duration-300`}
              fill={i < testimonial.rating ? "currentColor" : "none"}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

// Componente para botones de navegación
function NavButton({
  onClick,
  direction,
  isDesktop,
}: {
  onClick: () => void
  direction: "prev" | "next"
  isDesktop: boolean
}) {
  const size = isDesktop ? "w-12 h-12" : "w-10 sm:w-12 h-10 sm:h-12"
  const iconSize = isDesktop ? "w-5 h-5" : "w-4 sm:w-5 h-4 sm:h-5"

  return (
    <motion.button
      onClick={onClick}
      className={`${size} rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-[#D29D69] dark:hover:border-[#F8BB7C] hover:text-[#D29D69] dark:hover:text-[#F8BB7C] transition-all duration-300 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`${direction === "prev" ? "Testimonio anterior" : "Siguiente testimonio"}`}
    >
      {direction === "prev" ? <ChevronLeft className={iconSize} /> : <ChevronRight className={iconSize} />}
    </motion.button>
  )
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)

  const changeTestimonial = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1)
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length
      changeTestimonial(nextIndex)
    }, 4000)
    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const handleNavigation = (direction: "prev" | "next") => {
    setAutoplay(false)
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + testimonials.length) % testimonials.length
        : (currentIndex + 1) % testimonials.length
    changeTestimonial(newIndex)
    setTimeout(() => setAutoplay(true), 5000)
  }

  const getVisibleTestimonials = () => {
    const extended = [...testimonials, ...testimonials]
    return typeof window !== "undefined" && window.innerWidth < 768
      ? [extended[currentIndex]]
      : [extended[currentIndex], extended[currentIndex + 1]]
  }

  return (
    <motion.section
      className="relative z-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="bg-gray-100 dark:bg-[#0F172A] relative transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Header */}
              <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-[#D29D69] dark:text-[#F8BB7C] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300">
                    TESTIMONIOS
                  </span>
                  <div className="ml-3 w-8 sm:w-12 h-0.5 bg-[#D29D69] dark:bg-[#F8BB7C] transition-colors duration-300"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-300">
                  Lo Que Los Clientes
                  <br />
                  Dicen Sobre Nosotros
                </h2>
                <div className="flex items-center justify-center">
                  <motion.div
                    className={`w-2 h-2 rounded-full mr-2 transition-colors duration-300 ${
                      autoplay ? "bg-[#F8BB7C]" : "bg-gray-400 dark:bg-gray-500"
                    }`}
                    animate={{ scale: autoplay ? [1, 1.2, 1] : 1 }}
                    transition={{
                      duration: 2,
                      repeat: autoplay ? Number.POSITIVE_INFINITY : 0,
                    }}
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {autoplay ? "Reproducción automática" : "Manual"}
                  </span>
                </div>
              </motion.div>

              {/* Contenedor de testimonios mobile */}
              <motion.div
                className="relative overflow-hidden h-full"
                variants={itemVariants}
                style={{ minHeight: "280px" }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={testimonialVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                  >
                    {getVisibleTestimonials().map((testimonial, index) => (
                      <TestimonialCard
                        key={`${testimonial.id}-${currentIndex}-${index}`}
                        testimonial={testimonial}
                        index={index}
                        isDesktop={false}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Navegación mobile */}
              <motion.div className="flex justify-center space-x-4 mt-6" variants={itemVariants}>
                <NavButton onClick={() => handleNavigation("prev")} direction="prev" isDesktop={false} />
                <NavButton onClick={() => handleNavigation("next")} direction="next" isDesktop={false} />
              </motion.div>

              {/* Dots indicator */}
              <motion.div className="flex justify-center space-x-2 mt-6" variants={itemVariants}>
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => changeTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? "bg-[#D29D69] dark:bg-[#F8BB7C]" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </motion.div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-start justify-between">
              {/* Left side - Title and Navigation */}
              <motion.div className="w-1/3 pr-8 xl:pr-12" variants={itemVariants}>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-[#D29D69] dark:text-[#F8BB7C] font-semibold text-xs tracking-wider uppercase transition-colors duration-300">
                      TESTIMONIOS
                    </span>
                    <div className="ml-3 w-12 h-0.5 bg-[#D29D69] dark:bg-[#F8BB7C] transition-colors duration-300"></div>
                  </div>
                  <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                    Lo Que Los Clientes
                    <br />
                    Dicen Sobre Nosotros
                  </h2>
                  <div className="flex items-center mt-2">
                    <motion.div
                      className={`w-2 h-2 rounded-full mr-2 transition-colors duration-300 ${
                        autoplay ? "bg-[#F8BB7C]" : "bg-gray-400 dark:bg-gray-500"
                      }`}
                      animate={{ scale: autoplay ? [1, 1.2, 1] : 1 }}
                      transition={{
                        duration: 2,
                        repeat: autoplay ? Number.POSITIVE_INFINITY : 0,
                      }}
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      {autoplay ? "Reproducción automática" : "Manual"}
                    </span>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="flex space-x-4 mt-8">
                  <NavButton onClick={() => handleNavigation("prev")} direction="prev" isDesktop={true} />
                  <NavButton onClick={() => handleNavigation("next")} direction="next" isDesktop={true} />
                </div>
              </motion.div>

              {/* Right side - Testimonials */}
              <motion.div
                className="w-2/3 relative overflow-hidden"
                variants={itemVariants}
                style={{ minHeight: "320px" }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={testimonialVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="grid grid-cols-2 gap-6"
                  >
                    {getVisibleTestimonials().map((testimonial, index) => (
                      <TestimonialCard
                        key={`${testimonial.id}-${currentIndex}-${index}`}
                        testimonial={testimonial}
                        index={index}
                        isDesktop={true}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
