"use client"

import { Play, User, BookOpen, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const FirstSection = () => {
  const featuresRef = useRef(null)
  const mainContentRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const mainContentInView = useInView(mainContentRef, { once: true, margin: "-100px" })
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" })
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const checkItemVariants = {
    hidden: {
      opacity: 0,
      x: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0F172A] text-gray-800 dark:text-gray-100">
      {/* Features Section */}
      <div className="container mx-auto px-6 pt-12">
        <motion.div
          ref={featuresRef}
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Video Training Card */}
          <motion.div
            variants={cardVariants}
            className="group relative p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#A1D302] transition-all duration-500 bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#A1D302]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 bg-[#A1D302] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Play className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Capacitación Virtual</h3>
              <p className="text-gray-600 dark:text-gray-400">Con certificación incluida</p>
            </div>
          </motion.div>

          {/* Expert Teacher Card */}
          <motion.div
            variants={cardVariants}
            className="group relative p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#00a9bb] transition-all duration-500 bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a9bb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 bg-[#00a9bb] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <User className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Instructores Expertos</h3>
              <p className="text-gray-600 dark:text-gray-400">Con certificación incluida</p>
            </div>
          </motion.div>

          {/* Versatile Course Card */}
          <motion.div
            variants={cardVariants}
            className="group relative p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#006174] transition-all duration-500 bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#006174]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 bg-[#006174] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Cursos Flexibles</h3>
              <p className="text-gray-600 dark:text-gray-400">Con certificación incluida</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          ref={mainContentRef}
          initial="hidden"
          animate={mainContentInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Image */}
          <motion.div ref={imageRef} variants={imageVariants} className="relative">
            <div className="relative z-10">
              <motion.img
                src="image/background/student.png"
                alt="Online Learning"
                className="w-full max-w-2xl mx-auto rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {/* Decorative shapes */}
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-[#A1D302] rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 right-10 w-16 h-16 bg-[#00a9bb] rounded-full opacity-30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 left-0 w-12 h-12 bg-[#006174] rounded-full opacity-25"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            ></motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            ref={contentRef}
            variants={contentVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-2 bg-gray-200/80 dark:bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200">
                Nosotros
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold leading-tight">
              Bienvenido a{" "}
              <span className="relative">
                Campus <span className="text-[#A1D302]">Virtual</span> Pro
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#A1D302] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={contentInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ originX: 0 }}
                ></motion.div>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Tu plataforma líder en educación online
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                "Acceso 24/7 a todo nuestro contenido educativo",
                "Certificados avalados por instituciones reconocidas",
                "Metodología práctica con casos reales del mercado",
              ].map((item, index) => (
                <motion.div key={index} variants={checkItemVariants} className="flex items-center space-x-3 group">
                  <motion.div
                    className="w-6 h-6 bg-[#00a9bb] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#006174] to-[#00A9BB] hover:bg-transparent dark:from-[#739700]/70 dark:to-[#8eb902] dark:text-gray-100 text-white text-base font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Conocer Más</span>
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a9bb] to-[#006174] dark:from-[#8eb902] dark:to-[#739700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default FirstSection
