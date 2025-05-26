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
  index?: number
}

interface CounterNumberProps {
  backgroundImage?: string
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, targetNumber, suffix, label, duration = 2000, index = 0 }) => {
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
      className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 relative animate-in fade-in slide-in-from-bottom-8"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Decorative background circles */}
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#A1D302]/20 dark:bg-[#006174]/20 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#006174]/10 dark:bg-[#A1D302]/10 rounded-full blur-lg group-hover:scale-125 transition-all duration-500"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#A1D302]/80 dark:bg-[#00A9BB]/80 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#006174]/80 dark:bg-[#A1D302]/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#A1D302]/60 dark:bg-[#00A9BB]/35 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        ></div>
      </div>

      {/* Main icon container with enhanced styling */}
      <div className="relative mb-4 p-4 rounded-xl bg-white/930 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:shadow-2xl group-hover:shadow-[#006174]/20 dark:group-hover:shadow-[#A1D302]/20 transition-all duration-500 shadow-xl backdrop-blur-sm">
        {/* Icon */}
        <div className="relative text-[#00A9BB] dark:text-[#A1D302] w-8 h-8 group-hover:scale-105 transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Counter number with enhanced styling */}
      <div className="relative mb-3">
        <div className="text-4xl md:text-5xl font-bold text-gray-100 dark:text-white mb-2 transition-colors duration-300 drop-shadow-lg">
          {count}
          {suffix}
        </div>
      </div>

      {/* Label with enhanced styling */}
      <div className="text-sm text-gray-100 dark:text-gray-200 uppercase tracking-wide font-medium drop-shadow-sm">
        {label}
      </div>
    </div>
  )
}

const CounterNumber: React.FC<CounterNumberProps> = ({ backgroundImage }) => {
  const [isClient, setIsClient] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const counters = [
    {
      icon: <Award className="w-full h-full" />,
      targetNumber: 27,
      suffix: "+",
      label: "Logros Totales",
    },
    {
      icon: <GraduationCap className="w-full h-full" />,
      targetNumber: 145,
      suffix: "+",
      label: "Estudiantes Totales",
    },
    {
      icon: <Users className="w-full h-full" />,
      targetNumber: 10,
      suffix: "k",
      label: "Instructores Totales",
    },
    {
      icon: <Globe className="w-full h-full" />,
      targetNumber: 214,
      suffix: "+",
      label: "En Todo el Mundo",
    },
  ]

  if (!isClient) {
    return null
  }

  // Parallax offset calculation
  //const parallaxOffset = scrollY * 0.5

  return (
    <div className="w-full relative overflow-hidden min-h-[350px]">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('image/background/one.jpg')`,
        }}
      />

      {/* Overlay for better readability and theme adaptation */}
      <div className="absolute inset-0 bg-gray-900/45 dark:bg-gray-900/60 backdrop-blur-none"></div>

      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006174]/10 via-transparent to-[#006174]/15 dark:from-[#20252b]/30 dark:via-[#1a1f24]/20 dark:to-[#20252b]/30"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-20 w-24 h-24 bg-[#A1D302]/70 dark:bg-[#006174]/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#006174]/20 dark:bg-[#A1D302]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-[#A1D302]/15 dark:bg-[#006174]/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              index={index}
              icon={counter.icon}
              targetNumber={counter.targetNumber}
              suffix={counter.suffix}
              label={counter.label}
              duration={2000 + index * 200}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50"></div>
    </div>
  )
}

export default CounterNumber
