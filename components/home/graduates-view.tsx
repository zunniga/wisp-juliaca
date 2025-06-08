"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building, Home, GraduationCap, Landmark, Server, Building2 } from "lucide-react"

export function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const clientTypes = [
    {
      icon: <Building className="h-12 w-12" />,
      title: "Empresas",
      description: "Soluciones corporativas adaptadas a las necesidades específicas de cada negocio.",
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Hogares",
      description: "Conectividad de alta velocidad y sistemas de seguridad para residencias.",
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Instituciones Educativas",
      description: "Infraestructura tecnológica para optimizar la experiencia educativa.",
    },
    {
      icon: <Landmark className="h-12 w-12" />,
      title: "Gobiernos",
      description: "Proyectos de telecomunicaciones para entidades gubernamentales y servicios públicos.",
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "Empresas de Tecnología",
      description: "Soluciones avanzadas para empresas del sector tecnológico.",
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Constructoras e Inmobiliarias",
      description: "Implementación de infraestructura de telecomunicaciones en nuevos desarrollos.",
    },
  ]

  return (
    <section id="clientes" className="py-20 bg-gray-50 dark:bg-[#030712]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestros <span className="text-[#D29D69] dark:text-[#F8BB7C]">Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-[#D29D69] dark:bg-[#F8BB7C] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Nos enfocamos en atender a diversos sectores, brindando soluciones personalizadas para cada tipo de cliente.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D29D69]/10 dark:bg-[#F8BB7C]/10 text-[#D29D69] dark:text-[#F8BB7C] mb-4">
                {client.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{client.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{client.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
