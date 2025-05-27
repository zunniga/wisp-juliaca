"use client";

import type React from "react";
import { useState } from "react";
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Manejar envío del formulario aquí
  };

  return (
    <div className="bg-gray-100 dark:bg-[#0F172A] transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          {/* Lado Izquierdo - Información de Contacto */}
          <div className="relative bg-gradient-to-b from-[#006174] via-[#00A9BB] to-[#006174] dark:from-[#006174]/30 dark:via-[#00A9BB] dark:to-[#006174]/30 p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[600px]">
            {/* Patrón decorativo de puntos */}
            <div className="absolute top-8 right-8 grid grid-cols-6 gap-2 opacity-20">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>

            {/* Iconos educativos decorativos */}
            <div className="absolute top-12 left-8 opacity-10">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
            <div className="absolute bottom-32 right-12 opacity-10">
              <BookOpen className="w-12 h-12 text-white" />
            </div>

            {/* Texto de Contacto */}
            <div className="flex-1 flex items-center">
              <div className="transform -rotate-90 origin-left">
                <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-[0.1em] whitespace-nowrap">
                  CONTÁCTANOS
                </h2>
              </div>
            </div>

            {/* Información adicional */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-3">
                ¿Tienes dudas sobre nuestros programas?
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Estamos aquí para ayudarte a encontrar el diplomado o curso
                perfecto para tu crecimiento profesional.
              </p>
            </div>

            {/* Iconos de Redes Sociales */}
            <div className="mt-auto">
              <h3 className="text-white text-lg font-semibold mb-6">
                Síguenos en
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12  bg-white/20 dark:bg-[#A1D302]/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#A1D302]/30 dark:hover:bg-[#A1D302]/50 transition-all duration-300 hover:scale-110"
                >
                  <FaFacebookF className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12  bg-white/20 dark:bg-[#A1D302]/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#A1D302]/30 dark:hover:bg-[#A1D302]/50 transition-all duration-300 hover:scale-110"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12  bg-white/20 dark:bg-[#A1D302]/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#A1D302]/30 dark:hover:bg-[#A1D302]/50 transition-all duration-300 hover:scale-110"
                >
                  <FaTiktok className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 dark:bg-[#A1D302]/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#A1D302]/30 dark:hover:bg-[#A1D302]/50 transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Lado Derecho - Formulario de Contacto */}
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 transition-colors duration-300">
            <div className="max-w-md mx-auto lg:max-w-none">
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
                  <div>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Nombre completo"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-[#00A9BB] dark:focus:border-[#A1D302] focus:ring-[#00A9BB]/20 dark:focus:ring-[#A1D302]/20 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-[#00A9BB] dark:focus:border-[#A1D302] focus:ring-[#00A9BB]/20 dark:focus:ring-[#A1D302]/20 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Número de teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-[#00A9BB] dark:focus:border-[#A1D302] focus:ring-[#00A9BB]/20 dark:focus:ring-[#A1D302]/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          subject: e.target.value,
                        }))
                      }
                      className="h-12 w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md px-3 text-slate-900 dark:text-slate-100 focus:border-[#00A9BB] dark:focus:border-[#A1D302] focus:ring-[#00A9BB]/20 dark:focus:ring-[#A1D302]/20 transition-all duration-200"
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
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tus intereses educativos, experiencia previa o cualquier pregunta específica sobre nuestros programas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-[#00A9BB] dark:focus:border-[#A1D302] focus:ring-[#00A9BB]/20 dark:focus:ring-[#A1D302]/20 resize-none transition-all duration-200"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#006174] to-[#00A9BB] hover:from-[#006174]/90 hover:to-[#00A9BB]/90 dark:from-[#739700]/70 dark:to-[#8eb902] dark:text-gray-100 text-white px-8 py-3 h-12 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enviar Consulta
                </Button>
              </form>

              {/* Información adicional */}
              <div className="mt-8 p-4 bg-[#A1D302]/10 dark:bg-[#A1D302]/20 rounded-lg border border-[#A1D302]/30 dark:border-[#A1D302]/40">
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
