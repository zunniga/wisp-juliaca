"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react"

const coverageAreas = [
  {
    id: 1,
    name: "Puno Centro",
    provinces: ["Puno", "San Román"],
    phone: "+51 951 234 567",
    email: "puno@empresa.com",
    coverage: "95%",
    clients: 1250,
    status: "activo",
  },
  {
    id: 2,
    name: "Zona Norte",
    provinces: ["Carabaya", "Sandia"],
    phone: "+51 951 345 678",
    email: "norte@empresa.com",
    coverage: "87%",
    clients: 890,
    status: "activo",
  },
  {
    id: 3,
    name: "Zona Oeste",
    provinces: ["Melgar", "Azángaro", "Lampa"],
    phone: "+51 951 456 789",
    email: "oeste@empresa.com",
    coverage: "92%",
    clients: 1100,
    status: "activo",
  },
  {
    id: 4,
    name: "Zona Sur",
    provinces: ["Yunguyo", "Chucuito", "El Collao"],
    phone: "+51 951 567 890",
    email: "sur@empresa.com",
    coverage: "89%",
    clients: 750,
    status: "activo",
  },
  {
    id: 5,
    name: "Zona Este",
    provinces: ["Huancané"],
    phone: "+51 951 678 901",
    email: "este@empresa.com",
    coverage: "78%",
    clients: 420,
    status: "expansion",
  },
]

export default function CoverageContact() {
  const [selectedArea, setSelectedArea] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFB579]/10 to-[#A87E54]/10 dark:from-[#02040B] dark:to-[#02040B]/90 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Cobertura en Puno</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Brindamos servicios de calidad en toda la región de Puno. Conoce nuestras zonas de cobertura y ponte en
            contacto con nosotros.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mapa */}
          <Card className="overflow-hidden border-2 border-[#EFB579]/20 dark:border-[#A87E54]/30">
            <CardHeader className="bg-gradient-to-r from-[#EFB579] to-[#A87E54] text-white">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                Mapa de Cobertura - Región Puno
              </CardTitle>
              <CardDescription className="text-white/90">
                Haz clic en las tarjetas para ver detalles de cada zona
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative">
                <img
                  src="image/picture/puno.png"
                  alt="Mapa de la región de Puno mostrando provincias"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Cobertura Total</div>
                  <div className="text-2xl font-bold text-[#A87E54] dark:text-[#EFB579]">89.2%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Zonas de Cobertura</h2>

            {coverageAreas.map((area) => (
              <Card
                key={area.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                  selectedArea === area.id
                    ? "border-[#A87E54] bg-[#EFB579]/5 dark:bg-[#A87E54]/10"
                    : "border-gray-200 dark:border-gray-700 hover:border-[#EFB579]"
                }`}
                onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900 dark:text-white">{area.name}</CardTitle>
                    <Badge
                      variant={area.status === "activo" ? "default" : "secondary"}
                      className={
                        area.status === "activo"
                          ? "bg-[#A87E54] hover:bg-[#A87E54]/80"
                          : "bg-[#EFB579] text-gray-800 hover:bg-[#EFB579]/80"
                      }
                    >
                      {area.status === "activo" ? "Activo" : "En Expansión"}
                    </Badge>
                  </div>
                  <CardDescription>Provincias: {area.provinces.join(", ")}</CardDescription>
                </CardHeader>

                {selectedArea === area.id && (
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-8 h-8 rounded-full bg-[#EFB579]/20 flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-[#A87E54]" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Cobertura</div>
                          <div className="text-[#A87E54] dark:text-[#EFB579] font-bold">{area.coverage}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-8 h-8 rounded-full bg-[#EFB579]/20 flex items-center justify-center">
                          <Users className="h-4 w-4 text-[#A87E54]" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Clientes</div>
                          <div className="text-[#A87E54] dark:text-[#EFB579] font-bold">
                            {area.clients.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Phone className="h-5 w-5 text-[#A87E54]" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Teléfono</div>
                          <div className="text-gray-600 dark:text-gray-300">{area.phone}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Mail className="h-5 w-5 text-[#A87E54]" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Email</div>
                          <div className="text-gray-600 dark:text-gray-300">{area.email}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Clock className="h-5 w-5 text-[#A87E54]" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Horario de Atención</div>
                          <div className="text-gray-600 dark:text-gray-300">Lun - Vie: 8:00 AM - 6:00 PM</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-[#A87E54] hover:bg-[#A87E54]/90 text-white">
                      Contactar Ahora
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Footer de contacto general */}
        <Card className="mt-12 bg-gradient-to-r from-[#EFB579] to-[#A87E54] text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿No encuentras tu zona?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Estamos en constante expansión. Contáctanos para conocer si pronto llegaremos a tu área o para solicitar
              información sobre nuestros servicios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-[#A87E54] hover:bg-white/90">
                <Phone className="h-4 w-4 mr-2" />
                Llamar: +51 951 000 000
              </Button>
              <Button variant="secondary" className="bg-white text-[#A87E54] hover:bg-white/90">
                <Mail className="h-4 w-4 mr-2" />
                info@empresa.com
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
