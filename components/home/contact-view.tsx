"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { BookOpen, GraduationCap } from "lucide-react";

const ContactView = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  const inputClasses =
    "h-12 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-[#A1D302]/30 focus:border-[#00A9BB] dark:focus:border-[#A1D302] focus:ring-[#00A9BB]/20 dark:focus:ring-[#A1D302]/30 transition-all duration-200 dark:text-white rounded-2xl";

  const socialIconClasses =
    "w-12 h-12 bg-white/20 dark:bg-[#A1D302]/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 dark:hover:from-[#A1D302]/60 dark:hover:to-[#8eb902]/80 transition-all duration-300 hover:scale-110 dark:shadow-lg dark:shadow-[#A1D302]/20";

  return (

    <div id="contacts" className="bg-gray-100 dark:bg-gradient-to-br dark:bg-[#0F172A] transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div
          ref={sectionRef}
          className={`grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto overflow-hidden rounded-lg border dark:border-gray-100/30 shadow-2xl  transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"  
          }`}
        >
          {/* Lado Izquierdo - Información de Contacto */}
          <div className="relative  rounded-lg bg-gradient-to-b from-[#006174] via-[#00A9BB] to-[#006174] dark:from-[#111c22] dark:via-[#0F172A] dark:to-[#0b0c10] border-r border-gray-100/30 p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[600px]">
            {/* Patrón decorativo mejorado */}
            <div className="absolute top-8 right-8 grid grid-cols-6 gap-2 opacity-20 dark:opacity-30">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white dark:bg-[#A1D302] rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>

            {/* Iconos educativos con mejor contraste */}
            <div className="absolute top-12 left-8 opacity-10 dark:opacity-20">
              <GraduationCap className="w-16 h-16 text-white dark:text-[#A1D302]" />
            </div>
            <div className="absolute bottom-32 right-12 opacity-10 dark:opacity-20">
              <BookOpen className="w-12 h-12 text-white dark:text-[#A1D302]" />
            </div>

            {/* Texto de Contacto */}
            <div className="flex-1 flex items-center">
              <div className="transform -rotate-90 origin-left">
                <h2 className="text-white dark:text-[#A1D302] text-2xl lg:text-3xl font-bold tracking-[0.1em] whitespace-nowrap drop-shadow-lg">
                  CONTÁCTANOS
                </h2>
              </div>
            </div>

            {/* Información adicional */}
            <div className="mb-8">
              <h3 className="text-white dark:text-[#A1D302] text-lg font-semibold mb-3">
                ¿Tienes dudas sobre nuestros programas?
              </h3>
              <p className="text-white/90 dark:text-gray-300 text-sm leading-relaxed">
                Estamos aquí para ayudarte a encontrar el diplomado o curso
                perfecto para tu crecimiento profesional.
              </p>
            </div>

            {/* Redes Sociales mejoradas */}
            <div className="mt-auto">
              <h3 className="text-white dark:text-[#A1D302] text-lg font-semibold mb-6">
                Síguenos en
              </h3>
              <div className="flex space-x-4">
                {[FaFacebookF, FaWhatsapp, FaTiktok, FaInstagram].map(
                  (Icon, index) => (
                    <a key={index} href="#" className={socialIconClasses}>
                      <Icon className="w-5 h-5 text-white dark:text-gray-900" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Lado Derecho - Formulario */}
          <div className="bg-white dark:bg-gradient-to-br dark:bg-[#0F172A] dark:backdrop-blur-sm p-8 lg:p-12 transition-colors duration-300">
            <div className="max-w-md mx-auto lg:max-w-none">
              {/* Header del formulario */}
              <div className="flex items-center justify-start w-full mb-4 ml-12">
                <span className="text-[#006174] dark:text-[#A1D302] font-semibold text-xs tracking-wider uppercase">
                  CONTÁCTANOS
                </span>
                <div className="ml-3 w-12 h-0.5 bg-[#006174] dark:bg-gradient-to-r dark:from-[#A1D302] dark:to-[#739700]"></div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-[#006174] dark:text-[#A1D302]" />
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  Consulta sobre Diplomados
                </h1>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                ¿Interesado en nuestros programas educativos? Completa el
                formulario y te ayudaremos a encontrar el diplomado o curso que
                mejor se adapte a tus objetivos profesionales.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Nombre completo"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={inputClasses}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Número de teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                    className={`${inputClasses} w-full px-3 border border-[#A1D302]/30 rounded-2xl dark:bg-[#2C333E]`}
                    required
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="diplomados">
                      Información sobre Diplomados
                    </option>
                    <option value="cursos">Cursos Disponibles</option>
                    <option value="inscripciones">
                      Proceso de Inscripción
                    </option>
                    <option value="becas">Becas y Financiamiento</option>
                    <option value="horarios">Horarios y Modalidades</option>
                    <option value="certificacion">Certificación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <Textarea
                  name="message"
                  placeholder="Cuéntanos sobre tus intereses educativos, experiencia previa o cualquier pregunta específica sobre nuestros programas..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`${inputClasses} resize-none`}
                  required
                />

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#006174] to-[#00A9BB] hover:from-[#006174]/90 hover:to-[#00A9BB]/90 dark:from-[#739700]/70 dark:to-[#8eb902] dark:text-gray-100 text-white h-12 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enviar Consulta
                </Button>
              </form>

              {/* Información adicional mejorada */}
              <div className="mt-8 p-4 bg-[#A1D302]/10 dark:bg-gradient-to-r dark:from-[#A1D302]/20 dark:to-[#739700]/20 rounded-lg border border-[#A1D302]/30 dark:border-[#A1D302]/40 dark:shadow-inner">
                <p className="text-sm text-[#006174] dark:text-[#A1D302]">
                  <strong>Tiempo de respuesta:</strong> Nos pondremos en
                  contacto contigo en un plazo máximo de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
