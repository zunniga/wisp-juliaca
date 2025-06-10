"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Wifi, Shield, Network, Facebook, Instagram, Twitter, ExternalLink } from "lucide-react"

export function Footer() {
  const handlePhoneClick = () => {
    window.open("https://wa.me/51931090909", "_blank")
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.footer
      className="bg-gray-900 dark:bg-[#030712] text-white py-8 md:py-12 border-t border-gray-800 dark:border-gray-800 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ overflowX: "hidden" }}
    >
      <div className="w-full max-w-none">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-4">
                <Wifi className="h-6 w-6 md:h-8 md:w-8 text-[#D29D69] dark:text-[#F8BB7C] mr-2 md:mr-3 flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-bold">
                  <span className="text-white">WISP</span>{" "}
                  <span className="text-[#D29D69] dark:text-[#F8BB7C]">JULIACA</span>
                </h3>
              </div>
              <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base max-w-none">
                Soluciones integrales en redes y telecomunicaciones que garantizan una conectividad eficiente y una
                seguridad confiable para empresas y hogares en Juliaca y toda la región de Puno.
              </p>

              {/* Services Icons */}
              <div className="flex gap-3 mb-4 md:mb-6">
                <motion.div
                  className="p-2 md:p-3 bg-[#D29D69]/10 dark:bg-[#F8BB7C]/10 rounded-lg flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Network className="h-5 w-5 md:h-6 md:w-6 text-[#D29D69] dark:text-[#F8BB7C]" />
                </motion.div>
                <motion.div
                  className="p-2 md:p-3 bg-[#D29D69]/10 dark:bg-[#F8BB7C]/10 rounded-lg flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-[#D29D69] dark:text-[#F8BB7C]" />
                </motion.div>
                <motion.div
                  className="p-2 md:p-3 bg-[#D29D69]/10 dark:bg-[#F8BB7C]/10 rounded-lg flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Wifi className="h-5 w-5 md:h-6 md:w-6 text-[#D29D69] dark:text-[#F8BB7C]" />
                </motion.div>
              </div>

              <p className="text-gray-500 text-xs md:text-sm">
                © {new Date().getFullYear()} WISP Juliaca. Todos los derechos reservados.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="w-full">
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#D29D69] dark:text-[#F8BB7C] flex items-center">
                <ExternalLink className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
                <span>Enlaces Rápidos</span>
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { name: "Inicio", href: "#inicio" },
                  { name: "Sobre Nosotros", href: "#nosotros" },
                  { name: "Servicios", href: "#servicios" },
                  { name: "Clientes", href: "#clientes" },
                  { name: "Contacto", href: "#contacto" },
                ].map((link) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-[#D29D69] dark:hover:text-[#F8BB7C] transition-colors duration-300 flex items-center group text-sm md:text-base"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#D29D69] dark:bg-[#F8BB7C] rounded-full mr-2 md:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"></span>
                      <span>{link.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="w-full">
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#D29D69] dark:text-[#F8BB7C] flex items-center">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
                <span>Contacto</span>
              </h4>
              <address className="not-italic text-gray-400 space-y-3 md:space-y-4">
                <motion.div
                  className="flex items-start gap-2 md:gap-3 group cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#D29D69] dark:text-[#F8BB7C] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="group-hover:text-[#D29D69] dark:group-hover:text-[#F8BB7C] transition-colors duration-300 text-xs md:text-sm">
                      Jr. San Martin N° 717
                    </p>
                    <p className="group-hover:text-[#D29D69] dark:group-hover:text-[#F8BB7C] transition-colors duration-300 text-xs md:text-sm">
                      Juliaca, Puno, Perú
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 md:gap-3 group cursor-pointer"
                  onClick={handlePhoneClick}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-[#D29D69] dark:text-[#F8BB7C] flex-shrink-0" />
                  <p className="group-hover:text-[#D29D69] dark:group-hover:text-[#F8BB7C] transition-colors duration-300 text-xs md:text-sm">
                    +51 931 090 909
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 md:gap-3 group cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-[#D29D69] dark:text-[#F8BB7C] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <a
                      href="mailto:wisp123redes@gmail.com"
                      className="group-hover:text-[#D29D69] dark:group-hover:text-[#F8BB7C] transition-colors duration-300 text-xs md:text-sm break-all"
                    >
                      wisp123redes@gmail.com
                    </a>
                  </div>
                </motion.div>
              </address>

              {/* Social Media */}
              <div className="mt-4 md:mt-6">
                <h5 className="text-xs md:text-sm font-semibold mb-2 md:mb-3 text-[#D29D69] dark:text-[#F8BB7C]">
                  Síguenos
                </h5>
                <div className="flex gap-2 md:gap-3">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576155001274" },
                    { icon: Instagram, href: "#" },
                    { icon: Twitter, href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="p-1.5 md:p-2 bg-gray-800 dark:bg-gray-900 rounded-lg text-gray-400 hover:text-[#D29D69] dark:hover:text-[#F8BB7C] hover:bg-[#D29D69]/10 dark:hover:bg-[#F8BB7C]/10 transition-all duration-300 flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      rel="noreferrer"
                    >
                      <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Border */}
          <motion.div
            className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
              <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                Desarrollado con ❤️ para conectar Juliaca
              </p>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-500">
                <span>Powered by</span>
                <span className="text-[#D29D69] dark:text-[#F8BB7C] font-semibold">WISP Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
