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
      className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="mb-4 p-4 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
        <div className="text-red-500 w-8 h-8">{icon}</div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">{label}</div>
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
    <div className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              icon={counter.icon}
              targetNumber={counter.targetNumber}
              suffix={counter.suffix}
              label={counter.label}
              duration={2000 + index * 200} // Stagger animations
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterNumber
