"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Info, Search } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { productData } from "@/components/graduates/utils/product-data"
import { Input } from "@/components/ui/input"

export default function ProductCatalog() {
  type Product = {
    name: string
    description: string
    brand: string
    image?: string
    features: string[]
    resolution?: string
    ports?: string
    speed?: string
  }

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const { theme } = useTheme()

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsDialogOpen(true)
  }

  const contactWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hola, estoy interesado en ${productName}. ¿Podría darme más información?`)
    window.open(`https://wa.me/990807069?text=${message}`, "_blank")
  }

  const getAllProducts = () => {
    const allProducts: (Product & { category: string })[] = []
    Object.entries(productData).forEach(([category, products]) => {
      products.forEach((product) => {
        allProducts.push({ ...product, category })
      })
    })
    return allProducts
  }

  const getSearchResults = () => {
    if (!searchTerm) return null

    const allProducts = getAllProducts()
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="mt-16">
      <header className="relative bg-[#030712] text-white py-16 overflow-hidden min-h-[500px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('image/service/service.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/70 to-[#030712]/90" />

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-cyan-400/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-cyan-400/20 rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-2 h-20 bg-gradient-to-b from-cyan-400/40 to-transparent transform rotate-12"></div>
        <div className="absolute top-1/4 left-20 w-2 h-16 bg-gradient-to-b from-cyan-400/30 to-transparent transform -rotate-12"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Left side image */}
            <div className="hidden lg:block relative">
              <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#F8BB7C]/20 to-[#D29D69]/20 flex items-center justify-center">
                  <Image
                    src="image/service/camera1.png"
                    alt="Cámara de seguridad"
                    width={200}
                    height={200}
                    className="object-contain filter brightness-110"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -top-4 -left-4 w-56 h-56 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Center content */}
            <div className="flex-1 text-center px-8">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#F8BB7C]/20 border border-[#F8BB7C]/30 rounded-full text-sm font-medium text-[#F8BB7C] mb-4">
                  🔒 Somos tu mejor opción #1
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Nuestro Catálogo
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Soluciones avanzadas en Cámaras, Switches, Routers y Alarmas para proteger lo que más importa
              </p>

              {/* Search Input */}
              <div className="max-w-md mx-auto relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar productos de seguridad..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 rounded-full text-center"
                />
              </div>

              {/* Stats or features */}
              <div className="flex justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Productos Certificados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Soporte 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Instalación Profesional</span>
                </div>
              </div>
            </div>

            {/* Right side image */}
            <div className="hidden lg:block relative">
              <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#D29D69]/20 to-[#F8BB7C]/20 flex items-center justify-center">
                  <Image
                    src="image/service/camera2.png"
                    alt="Cámara de seguridad"
                    width={200}
                    height={200}
                    className="object-contain filter brightness-110"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -top-4 -right-4 w-56 h-56 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-1 h-32 bg-gradient-to-b from-cyan-400/20 to-transparent transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-1 h-24 bg-gradient-to-b from-cyan-400/15 to-transparent transform -rotate-45 animate-pulse"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="camaras" className="w-full">
          {searchTerm ? (
            // Mostrar resultados de búsqueda de todas las categorías
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Resultados de búsqueda para "{searchTerm}" ({getSearchResults()?.length || 0} productos encontrados)
              </h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {getSearchResults()?.map((product, index) => (
                  <motion.div
                    key={`${product.category}-${index}`}
                    variants={item}
                    className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                      theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                    }`}
                  >
                    <div
                      className="relative h-56 cursor-pointer overflow-hidden"
                      onClick={() => handleProductClick(product)}
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <Info
                          className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                          size={32}
                        />
                      </div>
                      {/* Badge de categoría */}
                      <div className="absolute top-2 left-2 bg-[#F8BB7C] text-white px-2 py-1 rounded-md text-xs font-semibold capitalize">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                      <p className="text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">Marca: {product.brand}</p>
                        <Button
                          onClick={() => contactWhatsApp(product.name)}
                          className={`${theme === "dark" ? "bg-[#D29D69] hover:bg-[#F8BB7C]" : "bg-[#F8BB7C] hover:bg-[#D29D69]"} text-white`}
                          size="sm"
                        >
                          <Phone className="mr-2 h-4 w-4" /> Contactar
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ) : (
            // Mostrar pestañas normales cuando no hay búsqueda
            <>
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="camaras">Cámaras</TabsTrigger>
                <TabsTrigger value="switches">Switches</TabsTrigger>
                <TabsTrigger value="routers">Routers</TabsTrigger>
                <TabsTrigger value="alarmas">Alarmas</TabsTrigger>
              </TabsList>

              {(Object.keys(productData) as Array<keyof typeof productData>).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {productData[category].map((product, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                        }`}
                      >
                        <div
                          className="relative h-56 cursor-pointer overflow-hidden"
                          onClick={() => handleProductClick(product)}
                        >
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <Info
                              className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                              size={32}
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                          <p className="text-sm mb-4 line-clamp-2">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <p className="font-semibold">Marca: {product.brand}</p>
                            <Button
                              onClick={() => contactWhatsApp(product.name)}
                              className={`${theme === "dark" ? "bg-[#D29D69] hover:bg-[#F8BB7C]" : "bg-[#F8BB7C] hover:bg-[#D29D69]"} text-white`}
                              size="sm"
                            >
                              <Phone className="mr-2 h-4 w-4" /> Contactar
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </>
          )}
        </Tabs>
      </main>

      {selectedProduct && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProduct.name}</DialogTitle>
              <DialogDescription>{selectedProduct.brand}</DialogDescription>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full rounded-md overflow-hidden cursor-zoom-in">
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-150"
                />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Descripción:</h4>
                <p className="mb-4">{selectedProduct.description}</p>

                <h4 className="font-semibold mb-2">Características clave:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {selectedProduct.resolution && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Resolución / Lente:</h4>
                    <p>{selectedProduct.resolution}</p>
                  </div>
                )}

                {selectedProduct.ports && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Puertos / Tipo:</h4>
                    <p>{selectedProduct.ports}</p>
                  </div>
                )}

                {selectedProduct.speed && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Velocidad / Frecuencia:</h4>
                    <p>{selectedProduct.speed}</p>
                  </div>
                )}

                <Button
                  onClick={() => contactWhatsApp(selectedProduct.name)}
                  className={`${theme === "dark" ? "bg-[#D29D69] hover:bg-[#F8BB7C]" : "bg-[#F8BB7C] hover:bg-[#D29D69]"} text-white w-full mt-4`}
                >
                  <Phone className="mr-2 h-4 w-4" /> Contactar por WhatsApp
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
