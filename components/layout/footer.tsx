"use client";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  BookOpen,
  Award,
  Users,
} from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme, systemTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/image/logo/inalta_logo_main.png");


   useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      setLogoSrc('/image/logo/inalta_logo_dark.png');
    } else {
      setLogoSrc('/image/logo/inalta_logo_main.png');
    }
  }, [theme, systemTheme]);

  return (
    <footer className="bg-gradient-to-br from-[#006174] to-[#004d5c] dark:from-[#0F172A] dark:to-[#0F172A] text-white pt-20 relative overflow-hidden ">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* About Inalta */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src={logoSrc}
                alt="Corporación Inalta"
                width={200}
                height={32}
                priority
                className=""
              />
            </div>

            <p className="text-gray-300 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              "Gracias por visitarnos. En INALTA, estamos comprometidos con tu
              desarrollo profesional. ¡Esperamos verte pronto!"
            </p>

            <div className="flex space-x-4 items-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-primary transition-all duration-300 hover:scale-110 bg-white/10 p-2 rounded-full"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/51994956573"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-primary transition-all duration-300 hover:scale-110 bg-white/10 p-2 rounded-full"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-primary transition-all duration-300 hover:scale-110 bg-white/10 p-2 rounded-full"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-primary transition-all duration-300 hover:scale-110 bg-white/10 p-2 rounded-full"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
              <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mr-3 rounded-full"></span>
              Nuestra Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-colors text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-colors text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-colors text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-colors text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-colors text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Reservar Cita
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos Recomendados */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
              <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mr-3 rounded-full"></span>
              Recursos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <BookOpen className="h-4 w-4 text-emerald-400 shrink-0 mt-1 mr-2" />
                <div>
                  <p className="text-white text-sm font-medium">
                    "El Poder del Ahora"
                  </p>
                  <p className="text-gray-300 dark:text-gray-400 text-xs">
                    Eckhart Tolle
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <BookOpen className="h-4 w-4 text-emerald-400 shrink-0 mt-1 mr-2" />
                <div>
                  <p className="text-white text-sm font-medium">
                    "Mindfulness"
                  </p>
                  <p className="text-gray-300 dark:text-gray-400 text-xs">
                    Jon Kabat-Zinn
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <BookOpen className="h-4 w-4 text-emerald-400 shrink-0 mt-1 mr-2" />
                <div>
                  <p className="text-white text-sm font-medium">
                    "Respiración Consciente"
                  </p>
                  <p className="text-gray-300 dark:text-gray-400 text-xs">
                    Guía de relajación
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="h-4 w-4 text-emerald-400 shrink-0 mt-1 mr-2" />
                <div>
                  <p className="text-white text-sm font-medium">
                    Certificaciones
                  </p>
                  <p className="text-gray-300 dark:text-gray-400 text-xs">
                    Programas acreditados
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mr-3 rounded-full"></span>
              Contáctanos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-400 shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-300 dark:text-gray-400 text-sm">
                  Lima, Perú
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300 dark:text-gray-400 text-sm">
                  +51 99495 65 73
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300 dark:text-gray-400 text-sm">
                  info@inalta.com
                </span>
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300 dark:text-gray-400 text-sm">
                  +500 estudiantes
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
              <span className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mr-3 rounded-full"></span>
              Horarios
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-purple-400 shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-300 dark:text-gray-400 text-sm">
                    Lunes - Sábado:
                  </p>
                  <p className="font-semibold text-white text-sm">
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-purple-400 shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-300 dark:text-gray-400 text-sm">
                    Domingo:
                  </p>
                  <p className="font-semibold text-white text-sm">
                    11:00 AM - 6:00 PM
                  </p>
                </div>
              </li>
              <li className="mt-4 p-3 bg-white/10 dark:bg-white/5 rounded-lg border border-white/20">
                <p className="text-white text-sm font-medium mb-1">
                  💡 Tip de Relajación
                </p>
                <p className="text-gray-300 dark:text-gray-400 text-xs">
                  Dedica 5 minutos diarios a la respiración consciente para
                  reducir el estrés.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-3">
              Mantente Conectado con INALTA
            </h4>
            <p className="text-gray-300 dark:text-gray-400 text-sm mb-6">
              Recibe tips de bienestar, recursos de desarrollo profesional y
              noticias sobre nuestros programas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#006174] to-[#00A9BB] hover:from-[#006174]/90 hover:to-[#00A9BB]/90 dark:from-[#739700]/70 dark:to-[#8eb902] dark:text-gray-100 text-white h-12 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="text-gray-300 dark:text-gray-200 text-sm">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Corporación Inalta. Todos los
              derechos reservados.
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Transformando vidas a través de la educación y el bienestar
              integral.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
