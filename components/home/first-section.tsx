"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

export function FirstSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 6000); // Cambiar cada 5 segundos en lugar de 4

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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
  };

  return (
    <section
      id="nosotros"
      className="relative p-24 flex items-center pt-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#D29D69] rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-72 h-72 bg-[#F8BB7C] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <div className="flex items-center mb-2">
                <span className="text-[#D29D69] dark:text-[#F8BB7C] font-semibold text-sm tracking-wider uppercase">
                  NOSOTROS
                </span>
                <div className="ml-3 w-12 h-0.5 bg-[#D29D69] dark:bg-[#F8BB7C]"></div>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              <span className="block">SOMOS</span>
              <span className="text-[#D29D69] dark:text-[#F8BB7C]">WISP</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
            >
              SERVICIO EN REDES Y TELECOMUNICACIONES
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-lg"
            >
              Somos una empresa de redes y telecomunicaciones que garantizan una
              conectividad eficiente y una seguridad confiable. Creemos
              firmemente en que cada servicio es una oportunidad para
              conectarnos con nuestros clientes. Confiar en nosotros significa
              optar por experiencia, innovación y un servicio excepcional.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-wrap gap-4"
            >
              <Link href="/#servicios">
                <Button
                  className="bg-[#D29D69] hover:bg-[#c08b5a] text-white dark:bg-[#F8BB7C] dark:hover:bg-[#e9ac6d] dark:text-gray-900"
                  size="lg"
                >
                  Nuestros Servicios
                </Button>
              </Link>

              <Link
                href="https://wa.me/51931090909?text=Hola,%20deseo%20más%20información%20sobre%20los%20servicios%20y%20productos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-[#D29D69] text-[#D29D69] hover:bg-[#D29D69] hover:text-white dark:border-[#F8BB7C] dark:text-[#F8BB7C] dark:hover:bg-[#F8BB7C] dark:hover:text-gray-900"
                  size="lg"
                >
                  Contáctanos
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <motion.div
                  className="flex"
                  animate={{ x: `${-currentImageIndex * 100}%` }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.1, 0.25, 1], // Curva de Bézier suave
                    type: "tween",
                  }}
                >
                  <div className="w-full flex-shrink-0">
                    <img
                      src="image/picture/image.png"
                      alt="Técnicos de WISP trabajando"
                      className="w-full h-80 object-cover"
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold">Técnicos Especializados</h3>
                      <p className="text-white/90">Profesionales capacitados en telecomunicaciones</p>
                    </div> */}
                  </div>
                  <div className="w-full flex-shrink-0">
                    <img
                      src="image/picture/image2.png"
                      alt="Instalación de torre de telecomunicaciones"
                      className="w-full h-80 object-cover"
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold">Infraestructura Avanzada</h3>
                      <p className="text-white/90">Torres y equipos de última generación</p>
                    </div> */}
                  </div>
                  <div className="w-full flex-shrink-0">
                    <img
                      src="image/picture/image3.png"
                      alt="Técnico de WISP en campo"
                      className="w-full h-80 object-cover"
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold">Servicio en Campo</h3>
                      <p className="text-white/90">Atención personalizada y soporte técnico</p>
                    </div> */}
                  </div>
                </motion.div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                        currentImageIndex === index
                          ? "bg-[#D29D69] dark:bg-[#F8BB7C] scale-125"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Info card overlay */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-[#D29D69] dark:bg-[#F8BB7C] p-6 rounded-lg shadow-lg text-white dark:text-gray-900 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-xl font-bold mb-2">Desde 2019</h3>
                <p>Brindando soluciones de calidad</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-[#D29D69] dark:border-[#F8BB7C] rounded-lg z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-[#D29D69] dark:border-[#F8BB7C] rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
