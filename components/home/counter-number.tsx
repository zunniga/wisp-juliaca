"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Award, GraduationCap, Users, Globe } from "lucide-react"

interface CounterItemProps {
  icon: React.ReactNode
  targetNumber: number
  suffix: string
  label: string
  index: number
}

interface CounterNumberProps {
  backgroundImage?: string
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, targetNumber, suffix, label, index }) => {
  const [count, setCount] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15 + 0.3,
        ease: "backOut",
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center group relative"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 -left-4 w-16 h-16 bg-[#A1D302]/20 dark:bg-[#006174]/20 rounded-full blur-xl"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#006174]/10 dark:bg-[#A1D302]/10 rounded-full blur-lg"
        whileHover={{ scale: 1.25 }}
        transition={{ duration: 0.5 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${i === 0 ? "2" : "1"} h-${i === 0 ? "2" : "1"} bg-[#A1D302]/80 dark:bg-[#00A9BB]/80 rounded-full`}
            style={{
              top: `${25 + i * 25}%`,
              left: `${25 + i * 25}%`,
            }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 3 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i,
            }}
          />
        ))}
      </div>

      {/* Icon container */}
      <motion.div
        variants={iconVariants}
        className="relative mb-4 p-4 rounded-xl bg-gray-200 dark:bg-[#0F172A] border border-gray-200/60 dark:border-gray-700/60 group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:shadow-2xl group-hover:shadow-[#006174]/20 dark:group-hover:shadow-[#A1D302]/20 transition-all duration-500 shadow-xl backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-[#00A9BB] dark:text-[#A1D302] w-8 h-8">{icon}</div>
      </motion.div>

      {/* Counter with Framer Motion animation */}
      <motion.div
        className="text-4xl md:text-5xl font-bold text-gray-100 dark:text-white mb-2 drop-shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: index * 0.15 + 0.6 }}
          onViewportEnter={() => {
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
          }}
        >
          {count}
          {suffix}
        </motion.span>
      </motion.div>

      {/* Label */}
      <motion.div
        className="text-sm text-gray-100 dark:text-gray-200 uppercase tracking-wide font-medium drop-shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}

const CounterNumber: React.FC<CounterNumberProps> = ({ backgroundImage }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const counters = [
    { icon: <Award className="w-full h-full" />, targetNumber: 27, suffix: "+", label: "Logros Totales" },
    { icon: <GraduationCap className="w-full h-full" />, targetNumber: 145, suffix: "+", label: "Estudiantes Totales" },
    { icon: <Users className="w-full h-full" />, targetNumber: 10, suffix: "k", label: "Instructores Totales" },
    { icon: <Globe className="w-full h-full" />, targetNumber: 214, suffix: "+", label: "En Todo el Mundo" },
  ]

  if (!isClient) return null

  return (
    <motion.div
      className="w-full relative overflow-hidden min-h-[350px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('image/background/one.jpg')` }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gray-900/45 dark:bg-gray-900/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#006174]/10 via-transparent to-[#006174]/15 dark:from-[#20252b]/30 dark:via-[#1a1f24]/20 dark:to-[#20252b]/30" />

      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${20 + i * 4} h-${20 + i * 4} bg-[#A1D302]/70 dark:bg-[#006174]/30 rounded-full blur-2xl`}
            style={{
              top: `${20 + i * 30}%`,
              left: `${20 + i * 30}%`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
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
              label={counter.label}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50" />
    </motion.div>
  )
}

export default CounterNumber
