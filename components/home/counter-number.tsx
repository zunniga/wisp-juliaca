"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BarChart3, ThumbsUp, Users, Award } from "lucide-react"

interface CounterItemProps {
  icon: React.ReactNode
  targetNumber: number
  suffix: string
  title: string
  description: string
  index: number
}

interface CounterStatsProps {
  backgroundImage?: string
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, targetNumber, suffix, title, description, index }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  }

  const startCounting = () => {
    if (hasAnimated) return
    setHasAnimated(true)

    let start = 0
    const increment = targetNumber / 60
    const timer = setInterval(() => {
      start += increment
      if (start >= targetNumber) {
        setCount(targetNumber)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 33)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={startCounting}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(210, 157, 105, 0.15)",
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Icon */}
      <motion.div
        className="w-16 h-16 mb-6 text-[#D29D69] dark:text-[#F8BB7C]"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 200,
        }}
      >
        {icon}
      </motion.div>

      {/* Counter Number */}
      <motion.div
        className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
      >
        {count}
        {suffix}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl font-semibold text-[#D29D69] dark:text-[#F8BB7C] mb-3 uppercase tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

const CounterStats: React.FC<CounterStatsProps> = ({ backgroundImage }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const counters = [
    {
      icon: <BarChart3 className="w-full h-full" />,
      targetNumber: 150,
      suffix: "",
      title: "Proyectos",
      description:
        "Finalizados satisfactoriamente a nivel nacional e internacional, proporcionando soluciones avanzadas en regiones previamente inaccesibles.",
    },
    {
      icon: <ThumbsUp className="w-full h-full" />,
      targetNumber: 100,
      suffix: "%",
      title: "Satisfacción del Cliente",
      description: "Reflejando la eficacia de nuestros técnicos y de la calidad del servicio en los proyectos.",
    },
    {
      icon: <Users className="w-full h-full" />,
      targetNumber: 5,
      suffix: " M+",
      title: "PERUANOS CONECTADOS",
      description: "En diferentes proyectos de implementación de redes de fibra óptica a lo largo y ancho del país.",
    },
    {
      icon: <Award className="w-full h-full" />,
      targetNumber: 5000,
      suffix: " +",
      title: "Personas Certificadas",
      description:
        "Validando sus competencias y ayudándolas a adquirir los conocimientos necesarios para sobresalir en las telecomunicaciones.",
    },
  ]

  if (!isClient) return null

  return (
    <div className="w-full relative overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#D29D69] via-[#F8BB7C] to-[#D29D69] dark:from-[#D29D69] dark:via-[#F8BB7C] dark:to-[#D29D69]" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestros <span className="text-[#F8BB7C] dark:text-[#D29D69]">Logros</span> en Números
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conectando el Perú a través de tecnología de vanguardia. Más de una década transformando las
            telecomunicaciones y capacitando profesionales en todo el territorio nacional.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-[#D29D69] to-[#F8BB7C] rounded-full"></div>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              index={index}
              icon={counter.icon}
              targetNumber={counter.targetNumber}
              suffix={counter.suffix}
              title={counter.title}
              description={counter.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default CounterStats
