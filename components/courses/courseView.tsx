"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Filter, Grid3X3, List, Bookmark, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/components/courses/utils/course-data"

export default function CoursesPage() {
  const [viewMode, setViewMode] = useState("grid")

  return (
    <div className="min-h-screen bg-[#00A9BB] dark:bg-[#0F172A] transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 mt-20">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-50">Estos son nuestros cursos</h1>
            <Badge
              variant="secondary"
              className="bg-white/20 dark:bg-gray-800/80 text-white dark:text-gray-200 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700"
            >
              🎯 50 cursos
            </Badge>
          </div>
          <p className="text-white/90 dark:text-gray-300 text-lg max-w-2xl">
            Cursos que ayudan a los diseñadores principiantes a convertirse en verdaderos unicornios.
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
                    ? "bg-[#00A9BB] dark:bg-gray-700 text-white shadow-md"
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
                    ? "bg-[#00A9BB] dark:bg-gray-700 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <List className="w-4 h-4" />
                Lista
              </Button>
            </div>

            {/* Results Counter */}
            <span className="text-white/80 dark:text-gray-400 text-sm">Mostrando 1-6 de 20 resultados</span>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
              <Input
                placeholder="Busca tu Diplomado..."
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

        {/* Course Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 border border-white/20 dark:border-gray-700"
              >
                {/* Course Image */}
                <div className={`relative h-48 bg-gradient-to-r ${course.bgColor} p-6`}>
                  {course.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      -{course.discount}%
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 dark:bg-blue-700 text-white text-xs px-2 py-1 shadow-md">
                      📚 APRENDER • 15 MARZO
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">Difficult Things</h3>
                    <h4 className="text-lg font-semibold mb-2">About Education.</h4>
                    <p className="text-sm opacity-90 mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">📚 {course.lessons} Class</span>
                      <span className="flex items-center gap-1">🎥 45 Videos</span>
                    </div>
                    <div className="mt-2">
                      <span className="bg-blue-600 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-xs shadow-md">
                        👥 40 Enroll Students
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt="Instructor"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < course.rating ? "fill-orange-400 text-orange-400" : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                        ({course.comments} Comentarios)
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{course.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">📚 {course.lessons} Lecciones</span>
                    <span className="flex items-center gap-1">👥 {course.students} Estudiantes</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible
                    de una página cuando mire su diseño.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 border border-white/20 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Course Image - List View */}
                  <div
                    className={`relative w-full md:w-80 h-48 md:h-auto bg-gradient-to-r ${course.bgColor} p-6 flex-shrink-0`}
                  >
                    {course.discount && (
                      <div className="absolute top-4 right-4 bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        -{course.discount}%
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 dark:bg-blue-700 text-white text-xs px-2 py-1 shadow-md">
                        📚 APRENDER • 15 MARZO
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">Difficult Things</h3>
                      <h4 className="text-base font-semibold mb-2">About Education.</h4>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">📚 {course.lessons} Class</span>
                        <span className="flex items-center gap-1">🎥 45 Videos</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt="Instructor"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Info - List View */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{course.title}</h3>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < course.rating
                                  ? "fill-orange-400 text-orange-400"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                            ({course.comments} Comentarios)
                          </span>
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
                      Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido
                      legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una
                      distribución más o menos normal de letras.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-2">📚 {course.lessons} Lecciones</span>
                        <span className="flex items-center gap-2">👥 {course.students} Estudiantes</span>
                        <span className="bg-blue-600 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-xs shadow-md">
                          👥 40 Enroll Students
                        </span>
                      </div>
                      <Button className="bg-[#00A9BB] hover:bg-[#008A9A] dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 shadow-lg transition-all duration-200">
                        Ver Curso
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
