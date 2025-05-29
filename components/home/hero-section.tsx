"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-[#006174] via-[#00A9BB] to-blue-[#006174] dark:from-[#0F172A] dark:via-[#06202B] dark:to-[#0F172A] ">
      {/* Elementos flotantes decorativos */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-cyan-400/20 rounded-full blur-lg"
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-10 w-16 h-16 bg-white/10 rounded-full blur-lg"
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-400/30 rounded-full blur-md"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido de texto - Lado izquierdo */}
          <div className="text-white order-2 lg:order-1">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Eleva tu{" "}
              <span className="text-transparent bg-clip-text bg-[#A1D302]">
                Conocimiento <br />
              </span>
              <span className="text-white">y Carrera</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Descubre nuestros diplomados y cursos diseñados para potenciar tus
              habilidades, abrir nuevas oportunidades y transformar tu futuro
              profesional.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 bg-[#00A9BB] dark:bg-[#06202B] dark:border dark:border-gray-100/60 text-white hover:bg-cyan-600 dark:hover:bg-[#0F172A]"
              >
                <Link href="/courses">Explorar Cursos</Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 bg-[#A1D302]/80 text-white hover:bg-[#A1D302]/40"
              >
                <Link href="/contact">Contáctanos</Link>
              </Button>

            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="flex -space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                {["one.jpg", "five.jpg", "four.jpg", "three.jpg"].map(
                  (nombre, index) => (
                    <motion.div
                      key={index}
                      className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.9 + index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <Image
                        src={`/image/usuarios/${nombre}`}
                        alt={`Estudiante satisfecho ${index}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              >
                <div className="text-yellow-400 flex text-2xl">{"★★★★★"}</div>
                <p className="text-sm text-gray-300">
                  Más de 2,000 estudiantes graduados en cursos y diplomados
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Área para imagen - Lado derecho */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              x: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              y: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <div className="relative w-full max-w-2xl">
              {/* Aquí puedes agregar tu imagen */}
              <div className="relative aspect-[4/3] bg-transparent rounded-3xl backdrop-blur-sm  flex items-center justify-center">
                {/* Placeholder para la imagen - reemplaza esto con tu imagen real */}
                <div className="text-center text-white/60">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <Image
                  src="image/background/bg.png"
                  alt="background_of_laptop"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Elementos decorativos alrededor de la imagen */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 dark:bg-[#A1D302]/30   rounded-full blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/20 dark:bg-[#A1D302]/30  rounded-full blur-sm"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#A1D302]/10 to-transparent"></div>
    </section>
  );
}
