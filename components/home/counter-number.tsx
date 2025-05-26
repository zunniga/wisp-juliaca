"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Award, GraduationCap, Users, Globe } from "lucide-react"

interface CounterItemProps {
  icon: React.ReactNode
  targetNumber: number
  suffix: string
  label: string
  duration?: number
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, targetNumber, suffix, label, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`counter-${label}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [label])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * targetNumber)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, targetNumber, duration])

  return (
    <div
      id={`counter-${label}`}
      className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 relative"
    >
      {/* Decorative background circles */}
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#A1D302]/10 dark:bg-[#006174]/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#006174]/10 dark:bg-[#A1D302]/10 rounded-full blur-lg group-hover:scale-125 transition-all duration-500"></div>

      {/* Main icon container with enhanced styling */}
      <div className="relative mb-6 p-6 rounded-2xl bg-gradient-to-br from-[#A1D302]/20 to-[#006174]/20 dark:from-[#006174]/20 dark:to-[#A1D302]/20 group-hover:from-[#A1D302]/30 group-hover:to-[#006174]/30 dark:group-hover:from-[#006174]/30 dark:group-hover:to-[#A1D302]/30 transition-all duration-500 border border-[#A1D302]/20 dark:border-[#006174]/20 backdrop-blur-sm">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#A1D302]/5 to-[#006174]/5 dark:from-[#006174]/5 dark:to-[#A1D302]/5 blur-md group-hover:blur-lg transition-all duration-500"></div>

        {/* Icon */}
        <div className="relative text-[#006174] dark:text-[#A1D302] w-10 h-10 group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
          {icon}
        </div>

        {/* Floating dots */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#A1D302] dark:bg-[#006174] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#006174] dark:bg-[#A1D302] rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Counter number with enhanced styling */}
      <div className="relative mb-3">
        <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#006174] to-[#A1D302] dark:text-white drop-shadow-lg">
          {count}
          {suffix}
        </div>
        {/* Subtle glow behind number */}
        <div className="absolute inset-0 text-5xl md:text-6xl font-black text-[#A1D302]/20 dark:text-white/10 blur-sm">
          {count}
          {suffix}
        </div>
      </div>

      {/* Label with enhanced styling */}
      <div className="text-sm md:text-base text-gray-700 dark:text-white uppercase tracking-widest font-semibold transition-colors duration-300 relative">
        {label}
        {/* Underline effect */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#A1D302] to-[#006174] group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  )
}

const CounterNumber = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const counters = [
    {
      icon: <Award className="w-full h-full" />,
      targetNumber: 27,
      suffix: "+",
      label: "Total Achievement",
    },
    {
      icon: <GraduationCap className="w-full h-full" />,
      targetNumber: 145,
      suffix: "+",
      label: "Total Students",
    },
    {
      icon: <Users className="w-full h-full" />,
      targetNumber: 10,
      suffix: "k",
      label: "Total Instructor",
    },
    {
      icon: <Globe className="w-full h-full" />,
      targetNumber: 214,
      suffix: "+",
      label: "Over The World",
    },
  ]

  if (!isClient) {
    return null
  }

  return (
    <div className="w-full relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-white dark:bg-[#20252b]"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {/* Large decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#A1D302]/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#006174]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-[#A1D302]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#006174]/25 rounded-full blur-2xl animate-pulse delay-1500"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-br from-[#A1D302]/20 to-[#006174]/20 transform rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-tl from-[#006174]/20 to-[#A1D302]/20 transform rotate-12 blur-sm"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-[#A1D302] dark:bg-[#006174] rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              icon={counter.icon}
              targetNumber={counter.targetNumber}
              suffix={counter.suffix}
              label={counter.label}
              duration={2000 + index * 200}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#006174]/20 to-transparent dark:from-[#20252b]/50"></div>
    </div>
  )
}

export default CounterNumber
