"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    category: "Datos y Tecnología",
    categoryColor: "bg-pink-500",
    title: "Curso básico para entender sobre software",
    description: "Aprende los fundamentos del desarrollo de software",
    image: "/image/courses/course.webp",
    lessons: 23,
    duration: "1h 30min",
    originalPrice: "$67.00",
    currentPrice: "$32.00",
    isFree: false,
    instructor: {
      name: "Miguel Jhon",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      reviews: 44,
    },
  },
  {
    id: 2,
    category: "Mecánica",
    categoryColor: "bg-blue-500",
    title: "Curso avanzado para entender sobre software",
    description: "Conceptos avanzados de ingeniería mecánica",
    image: "/image/courses/course.webp",
    lessons: 29,
    duration: "2h 10min",
    originalPrice: "$67.00",
    currentPrice: "$32.00",
    isFree: true,
    instructor: {
      name: "Rinis Jhon",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      reviews: 44,
    },
  },
  {
    id: 3,
    category: "Desarrollo",
    categoryColor: "bg-red-500",
    title: "Curso completo para entender sobre soluciones",
    description: "Dominio del desarrollo full-stack",
    image: "/image/courses/course.webp",
    lessons: 25,
    duration: "1h 40min",
    originalPrice: "$67.00",
    currentPrice: "$40.00",
    isFree: true,
    instructor: {
      name: "Miguel Jhon",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
      reviews: 44,
    },
  },
  {
    id: 4,
    category: "Diseño UI & UX",
    categoryColor: "bg-green-500",
    title: "Curso de diseño para entender sobre soluciones",
    description: "Crea diseños hermosos y funcionales",
    image: "/image/courses/course.webp",
    lessons: 36,
    duration: "3h 40min",
    originalPrice: "$67.00",
    currentPrice: "$40.00",
    isFree: true,
    instructor: {
      name: "Miguel Robin",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      reviews: 44,
    },
  },
  {
    id: 5,
    category: "Marketing",
    categoryColor: "bg-purple-500",
    title: "Fundamentos de Marketing Digital",
    description: "Domina las estrategias de marketing modernas",
    image: "/image/courses/course.webp",
    lessons: 18,
    duration: "2h 20min",
    originalPrice: "$67.00",
    currentPrice: "$35.00",
    isFree: false,
    instructor: {
      name: "Sara Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      reviews: 52,
    },
  },
  {
    id: 6,
    category: "Inteligencia Artificial",
    categoryColor: "bg-indigo-500",
    title: "Introducción a la Inteligencia Artificial",
    description: "Aprende los conceptos básicos de IA y Machine Learning",
    image: "/image/courses/course.webp",
    lessons: 32,
    duration: "4h 15min",
    originalPrice: "$89.00",
    currentPrice: "$45.00",
    isFree: false,
    instructor: {
      name: "Carlos Mendez",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      reviews: 67,
    },
  },
  {
    id: 7,
    category: "Fotografía",
    categoryColor: "bg-orange-500",
    title: "Fotografía Digital Profesional",
    description: "Técnicas avanzadas de fotografía y edición",
    image: "/image/courses/course.webp",
    lessons: 28,
    duration: "3h 30min",
    originalPrice: "$75.00",
    currentPrice: "$38.00",
    isFree: true,
    instructor: {
      name: "Ana García",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      reviews: 89,
    },
  },
  {
    id: 8,
    category: "Finanzas",
    categoryColor: "bg-teal-500",
    title: "Gestión Financiera Personal",
    description: "Aprende a manejar tus finanzas personales",
    image: "/image/courses/course.webp",
    lessons: 20,
    duration: "2h 45min",
    originalPrice: "$55.00",
    currentPrice: "$28.00",
    isFree: false,
    instructor: {
      name: "Roberto Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
      reviews: 34,
    },
  },
];

// Hook personalizado para detectar el tamaño de pantalla
function useResponsiveCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1); // Móvil: 1 card
      } else if (width < 768) {
        setCardsPerView(1); // Móvil grande: 1 card
      } else if (width < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else if (width < 1280) {
        setCardsPerView(3); // Desktop pequeño: 3 cards
      } else {
        setCardsPerView(4); // Desktop grande: 4 cards
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  return cardsPerView;
}

export default function AutoCourseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const cardsPerView = useResponsiveCardsPerView();
  const maxIndex = Math.max(0, courses.length - cardsPerView);

  // Resetear índice cuando cambia cardsPerView
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [cardsPerView, maxIndex, currentIndex]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Volver al inicio
        }
        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Calcular el número de puntos indicadores
  const totalDots = Math.ceil(courses.length / cardsPerView);

  // Función para obtener las clases de ancho responsive
  const getCardWidthClass = () => {
    return "w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4";
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-[#20252b] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y Descripción Centrados */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#A1D302] mb-4 sm:mb-6">
            Descubre Cursos Increíbles
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Explora nuestra colección completa de cursos profesionales diseñados
            para mejorar tus habilidades y avanzar en tu carrera. Aprende de
            expertos de la industria con proyectos prácticos y aplicaciones del
            mundo real.
          </p>
        </div>

        {/* Contenedor del Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cards de Cursos */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`${getCardWidthClass()} flex-shrink-0 px-2 sm:px-3`}
                >
                  <div className="bg-white dark:bg-[#20252b] dark:border dark:border-[#006174]/20 rounded-2xl shadow-2xl overflow-hidden h-full">
                    {/* Imagen del Curso */}
                    <div className="relative">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={350}
                        height={200}
                        className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                      />
                      <Badge
                        className={`absolute top-2 sm:top-3 left-2 sm:left-3 ${course.categoryColor} text-white border-0 text-xs`}
                      >
                        {course.category}
                      </Badge>
                      {course.isFree && (
                        <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-500 text-white border-0 text-xs">
                          Gratis
                        </Badge>
                      )}
                    </div>

                    {/* Contenido del Curso */}
                    <div className="p-3 sm:p-4 lg:p-5">
                      {/* Meta del Curso */}
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-500 dark:text-gray-200 mb-2">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>{course.lessons} Lecciones</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      {/* Título del Curso */}
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-[#A1D302] mb-2 line-clamp-2 leading-tight">
                        {course.title}
                      </h3>

                      {/* Descripción del Curso */}
                      <p className="text-gray-600 dark:text-gray-200 mb-3 text-xs sm:text-sm line-clamp-2">
                        {course.description}
                      </p>

                      {/* Precios */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-base sm:text-lg font-bold text-purple-600 dark:text-[#A1D302]">
                          {course.isFree ? "Gratis" : course.currentPrice}
                        </span>
                        {!course.isFree && (
                          <span className="text-gray-400 dark:text-[#006174]/70 line-through text-xs sm:text-sm">
                            {course.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Instructor */}
                      <div className="flex items-center gap-2">
                        <Image
                          src={course.instructor.avatar || "/placeholder.svg"}
                          alt={course.instructor.name}
                          width={32}
                          height={32}
                          className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 dark:text-[#A1D302] text-xs sm:text-sm truncate">
                            {course.instructor.name}
                          </p>
                          <div className="flex items-center gap-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${
                                    i < Math.floor(course.instructor.rating)
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300 dark:text-[#006174]/30"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 dark:text-[#006174]/70">
                              ({course.instructor.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flechas de Navegación */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#A1D302]/10 hover:bg-[#A1D302]/20 border-[#A1D302] dark:bg-[#006174]/20 dark:hover:bg-[#006174]/30 dark:border-[#006174] shadow-lg z-10 w-8 h-8 sm:w-10 sm:h-10"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-[#A1D302] dark:text-[#A1D302]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#A1D302]/10 hover:bg-[#A1D302]/20 border-[#A1D302] dark:bg-[#006174]/20 dark:hover:bg-[#006174]/30 dark:border-[#006174] shadow-lg z-10 w-8 h-8 sm:w-10 sm:h-10"
            onClick={goToNext}
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#A1D302] dark:text-[#A1D302]" />
          </Button>

          {/* Indicador de Puntos */}
          <div className="flex justify-center gap-1 sm:gap-2 mt-6 sm:mt-8">
            {[...Array(totalDots)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? "bg-[#A1D302] dark:bg-[#A1D302] scale-125"
                    : "bg-[#006174]/30 hover:bg-[#006174]/50 dark:bg-[#006174]/50 dark:hover:bg-[#006174]/75"
                }`}
                onClick={() => goToSlide(index * cardsPerView)}
              />
            ))}
          </div>

          {/* Indicador de Auto-reproducción */}
          <div className="text-center mt-3 sm:mt-4">
            <p className="text-gray-500 dark:text-[#006174]/80 text-xs sm:text-sm">
              {isAutoPlaying
                ? "Reproducción automática • Pasa el cursor para pausar"
                : "Pausado • Aleja el cursor para reanudar"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
