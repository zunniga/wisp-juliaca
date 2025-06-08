"use client"

import { useState } from "react"
import { Search, Filter, Grid3X3, List, Bookmark, Star, Shield, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Sample security product data
const securityProducts = [
  {
    id: 1,
    title: "ProGuard 4K Ultra HD Security Camera",
    type: "camera",
    rating: 4,
    comments: 128,
    features: 12,
    users: 1240,
    price: 149.99,
    oldPrice: 199.99,
    discount: 25,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "4K Ultra HD resolution with night vision and motion detection. Weather-resistant for indoor and outdoor use.",
    bgColor: "from-[#D29D69] to-[#F8BB7C]",
    inStock: true,
    brand: "ProGuard",
  },
  {
    id: 2,
    title: "SecureNet Mesh WiFi Router System",
    type: "router",
    rating: 5,
    comments: 94,
    features: 8,
    users: 870,
    price: 199.99,
    oldPrice: 249.99,
    discount: 20,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Tri-band mesh WiFi system with coverage up to 5,000 sq ft. Perfect for eliminating dead zones in large homes.",
    bgColor: "from-[#D29D69] to-[#F8BB7C]",
    inStock: true,
    brand: "SecureNet",
  },
  {
    id: 3,
    title: "SafeZone PTZ Dome Camera",
    type: "camera",
    rating: 4,
    comments: 76,
    features: 10,
    users: 650,
    price: 179.99,
    oldPrice: 229.99,
    discount: 22,
    image: "/placeholder.svg?height=300&width=400",
    description: "Pan-tilt-zoom functionality with 360° coverage. AI-powered person detection with instant alerts.",
    bgColor: "from-[#D29D69] to-[#F8BB7C]",
    inStock: true,
    brand: "SafeZone",
  },
  {
    id: 4,
    title: "NetFortress Gaming Router",
    type: "router",
    rating: 5,
    comments: 112,
    features: 14,
    users: 980,
    price: 249.99,
    oldPrice: 299.99,
    discount: 17,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Optimized for gaming with ultra-low latency and QoS prioritization. Eight high-gain antennas for maximum coverage.",
    bgColor: "from-[#D29D69] to-[#F8BB7C]",
    inStock: false,
    brand: "NetFortress",
  },
  {
    id: 5,
    title: "GuardianEye Doorbell Camera",
    type: "camera",
    rating: 4,
    comments: 89,
    features: 9,
    users: 720,
    price: 129.99,
    oldPrice: 159.99,
    discount: 19,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "HD video doorbell with two-way audio and cloud storage. Easy installation with existing doorbell wiring.",
    bgColor: "from-[#D29D69] to-[#F8BB7C]",
    inStock: true,
    brand: "GuardianEye",
  },
  {
    id: 6,
    title: "WaveConnect Mesh WiFi 6 System",
    type: "router",
    rating: 5,
    comments: 67,
    features: 11,
    users: 540,
    price: 299.99,
    oldPrice: 349.99,
    discount: 14,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Next-gen WiFi 6 technology with speeds up to 3Gbps. Perfect for smart homes with multiple connected devices.",
    bgColor: "from-[#D29D69] to-[#F8BB7C]",
    inStock: true,
    brand: "WaveConnect",
  },
]

export default function SecurityProductsPage() {
  const [viewMode, setViewMode] = useState("grid")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D29D69] to-[#F8BB7C] dark:bg-[#030712] transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 mt-20">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-50">Seguridad Inteligente</h1>
            <Badge
              variant="secondary"
              className="bg-white/20 dark:bg-gray-800/80 text-white dark:text-gray-200 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700"
            >
              {securityProducts.length} Productos
            </Badge>
          </div>
          <p className="text-white/90 dark:text-gray-300 text-lg max-w-2xl">
            Cámaras de seguridad y routers de última generación para proteger tu hogar y mantener tu red conectada.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex items-center bg-white/90 dark:bg-gray-800/90 rounded-lg p-1 shadow-lg backdrop-blur-sm border border-white/30 dark:border-gray-700">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 rounded-md transition-all ${
                  viewMode === "grid"
                    ? "bg-[#D29D69] dark:bg-gray-700 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
                Rejilla
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 rounded-md transition-all ${
                  viewMode === "list"
                    ? "bg-[#D29D69] dark:bg-gray-700 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <List className="w-4 h-4" />
                Lista
              </Button>
            </div>

            {/* Results Counter */}
            <span className="text-white/80 dark:text-gray-400 text-sm">
              Mostrando 1-{securityProducts.length} de {securityProducts.length} resultados
            </span>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar productos..."
                className="pl-10 pr-4 py-2 w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-white/30 dark:border-gray-600 rounded-full text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-white dark:focus:border-gray-500"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-white/30 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700"
            >
              <Filter className="w-4 h-4" />
              Filtro
            </Button>
          </div>
        </div>

        {/* Product Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 border border-white/20 dark:border-gray-700"
              >
                {/* Product Image */}
                <div className={`relative h-48 bg-gradient-to-r ${product.bgColor} p-6`}>
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      -{product.discount}%
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 dark:bg-blue-700 text-white text-xs px-2 py-1 shadow-md">
                      {product.type === "camera" ? "CÁMARA" : "ROUTER"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{product.brand}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">{product.inStock ? "En Stock" : "Agotado"}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      {product.type === "camera" ? (
                        <Shield className="w-8 h-8 text-white" />
                      ) : (
                        <Wifi className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? "fill-orange-400 text-orange-400" : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({product.comments})</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{product.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          ${product.oldPrice}
                        </span>
                      )}
                    </div>
                    <Button className="bg-[#D29D69] hover:bg-[#C28D59] dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 shadow-lg transition-all duration-200">
                      Añadir al Carrito
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {securityProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 border border-white/20 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Product Image - List View */}
                  <div
                    className={`relative w-full md:w-80 h-48 md:h-auto bg-gradient-to-r ${product.bgColor} p-6 flex-shrink-0`}
                  >
                    {product.discount && (
                      <div className="absolute top-4 right-4 bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        -{product.discount}%
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 dark:bg-blue-700 text-white text-xs px-2 py-1 shadow-md">
                        {product.type === "camera" ? "CÁMARA" : "ROUTER"}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{product.brand}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">{product.inStock ? "En Stock" : "Agotado"}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        {product.type === "camera" ? (
                          <Shield className="w-6 h-6 text-white" />
                        ) : (
                          <Wifi className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Product Info - List View */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{product.title}</h3>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < product.rating
                                  ? "fill-orange-400 text-orange-400"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({product.comments})</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Bookmark className="w-5 h-5" />
                      </Button>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-base leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                          {product.oldPrice && (
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                              ${product.oldPrice}
                            </span>
                          )}
                        </div>
                        <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          {product.features} Características
                        </span>
                      </div>
                      <Button className="bg-[#D29D69] hover:bg-[#C28D59] dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 shadow-lg transition-all duration-200">
                        Añadir al Carrito
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 rounded-lg p-2 shadow-lg backdrop-blur-sm border border-white/30 dark:border-gray-700">
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              &lt;
            </Button>
            <Button variant="default" size="icon" className="w-8 h-8 rounded-md bg-[#D29D69] dark:bg-gray-700">
              1
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-md">
              2
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-md">
              3
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
