"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { Network, Shield, Zap, Users, Wifi, Server, Globe } from "lucide-react"
import { useEffect, useState } from "react"

// Valores fijos para evitar problemas de hidratación
const FLOATING_ELEMENTS = [
  { icon: Wifi, size: 45, top: 20, left: 15, delay: 0 },
  { icon: Server, size: 38, top: 60, left: 80, delay: 0.5 },
  { icon: Globe, size: 42, top: 80, left: 25, delay: 1 },
  { icon: Network, size: 35, top: 30, left: 70, delay: 1.5 },
  { icon: Wifi, size: 40, top: 70, left: 60, delay: 2 },
]

const NETWORK_LINES = [
  { top: 25, height: 1, delay: 0 },
  { top: 45, height: 1.5, delay: 0.3 },
  { top: 65, height: 1, delay: 0.6 },
  { top: 85, height: 1.2, delay: 0.9 },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo optimizado con imagen completa */}
      <div className="absolute inset-0">
        {/* Imagen de fondo principal */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("bg2.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay de gradiente para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/50 dark:from-slate-900/60 dark:via-slate-800/50 dark:to-slate-900/70" />

        {/* Overlay adicional para contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido de texto */}
          <motion.div
            className="text-white drop-shadow-lg order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94], // Curva de animación suave
            }}
          >
            {/* Título con animación escalonada */}
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {["CONECTAMOS", "TECNOLOGÍA", "Y PERSONAS"].map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.2,
                    ease: "easeOut",
                  }}
                >
                  {i === 1 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D29D69] to-[#F8BB7C]">
                      {word}
                    </span>
                  ) : (
                    <span>{word}</span>
                  )}
                  {i < 2 && <br />}
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              Ofrecemos soluciones integrales en redes y telecomunicaciones que garantizan conectividad eficiente y
              seguridad confiable.
            </motion.p>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-[#D29D69] to-[#F8BB7C] text-white hover:from-[#B8845A] hover:to-[#E6A66D] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Conoce nuestros servicios
              </Button>
            </motion.div>

            {/* Características */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            >
              {[
                { icon: Zap, title: "Experiencia", subtitle: "Comprobada" },
                { icon: Shield, title: "Seguridad", subtitle: "Confiable" },
                { icon: Network, title: "Innovación", subtitle: "Tecnológica" },
                { icon: Users, title: "Servicio", subtitle: "Excepcional" },
              ].map((item, i) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.title}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.7 + i * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-[#D29D69] to-[#F8BB7C] rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white drop-shadow-md">{item.title}</p>
                      <p className="text-sm text-white/80 drop-shadow-sm">{item.subtitle}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative w-full max-w-2xl">
              {/* Efectos de fondo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#D29D69]/20 to-[#F8BB7C]/20 rounded-3xl blur-3xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1, delay: 1 }}
              />

              <motion.div
                className="relative aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl"
                initial={{ rotateY: -15, rotateX: 5 }}
                animate={{ rotateY: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="tecnico.png"
                  alt="Profesional en telecomunicaciones"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Elementos decorativos */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#D29D69] to-[#F8BB7C] rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{ duration: 0.6, delay: 1.5 }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-[#F8BB7C] to-[#D29D69] rounded-full shadow-lg"
                initial={{ scale: 0, rotate: 180 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{ duration: 0.6, delay: 1.7 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <motion.svg
          className="w-full h-24 text-white/10 dark:text-slate-800/20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </motion.svg>
      </div>
    </section>
  )
}
