"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ServiciosPage() {
  return (
    <div id="servicios" className="bg-gray-50 dark:bg-[#030712] min-h-screen p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Nuestros{" "}
          <span className="text-[#D29D69] dark:text-[#F8BB7C]">Servicios</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
          Conexión sin complicaciones para tu hogar o negocio. ¡Disfruta de internet y comunicaciones sin límites!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {servicios.map((servicio, index) => (
          <ServiceCard key={servicio.id} servicio={servicio} index={index} />
        ))}
      </div>
    </div>
  );
}

interface Servicio {
  id: number;
  titulo: string;
  imagen: string;
  duracion: string;
  precio: string | "Gratis";
  descripcion: string;
}

const servicios: Servicio[] = [
  {
    id: 1,
    titulo: "Instalación de fibra óptica",
    imagen: "image/service/fibra.jpg",
    duracion: "1h",
    precio: "S/ 150",
    descripcion: "Conexión ultrarrápida con fibra óptica de última generación. Ideal para hogares con múltiples dispositivos y streaming en 4K.",
  },
  {
    id: 2,
    titulo: "Instalación de internet inalámbrico",
    imagen: "image/service/inalambrico.jpg",
    duracion: "2h",
    precio: "S/ 300",
    descripcion: "Solución perfecta para zonas sin cobertura de cable. Conexión estable y de alta velocidad sin necesidad de cableado.",
  },
  {
    id: 3,
    titulo: "Instalación de internet satelital",
    imagen: "image/service/satelital.png",
    duracion: "1h 30 min",
    precio: "S/ 200",
    descripcion: "Conectividad garantizada en zonas rurales o remotas. Tecnología satelital para llegar donde otros servicios no pueden.",
  },
  {
    id: 4,
    titulo: "Instalación de cámaras de seguridad",
    imagen: "image/service/camarass.png",
    duracion: "1h",
    precio: "S/ 50",
    descripcion: "Protege tu hogar o negocio con sistemas de vigilancia HD. Monitoreo remoto desde cualquier dispositivo.",
  },
  {
    id: 5,
    titulo: "Instalación de alarmas de seguridad",
    imagen: "image/service/alarma.jpg",
    duracion: "1h",
    precio: "Gratis",
    descripcion: "Sistemas de alarma inteligentes con sensores de movimiento y notificaciones en tiempo real. Instalación gratuita con contrato.",
  },
  {
    id: 6,
    titulo: "Servicio de instalación de FTTH-wisp",
    imagen: "image/service/ffth.jpg",
    duracion: "1h",
    precio: "S/ 50",
    descripcion: "Tecnología híbrida que combina fibra óptica y conexión inalámbrica para máxima eficiencia y cobertura.",
  },
];

function ServiceCard({ servicio, index }: { servicio: Servicio; index: number }) {
  const whatsappNumber = "990807069";
  const mensaje = `Hola, deseo más información sobre ${servicio.titulo}`;
  const whatsappURL = `https://wa.me/51${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={servicio.imagen || "/placeholder.svg"}
            alt={servicio.titulo}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <motion.h3
            className="text-xl font-bold text-gray-900 dark:text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {servicio.titulo}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {servicio.descripcion}
          </motion.p>

          <div className="flex justify-between items-center mb-4">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#D29D69] dark:text-[#F8BB7C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                {servicio.duracion}
              </span>
            </motion.div>

            <motion.div
              className="text-lg font-bold text-[#D29D69] dark:text-[#F8BB7C]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {servicio.precio}
            </motion.div>
          </div>

          <motion.a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.6 }}
            whileTap={{ scale: 0.95 }}
            className="block text-center w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Reservar ahora
          </motion.a>
        </div>
      </Card>
    </motion.div>
  );
}
