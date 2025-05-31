"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter, Grid3X3, List, Bookmark, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { courses } from "./utils/graduate-data";

export default function CoursesPage() {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="min-h-screen bg-[#00A9BB] dark:bg-[#0F172A]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 mt-20">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50">
              Todos los Diplomados
            </h1>
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full"
            >
              🎯 20 Diplomados
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-200 text-lg max-w-2xl">
            Cursos que ayudan a los diseñadores principiantes a convertirse en
            verdaderos unicornios.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex items-center bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex items-center gap-2 rounded-md"
              >
                <Grid3X3 className="w-4 h-4" />
                Rejilla
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex items-center gap-2 rounded-md"
              >
                <List className="w-4 h-4" />
                Lista
              </Button>
            </div>

            {/* Results Counter */}
            <span className="text-gray-600 text-sm">
              Mostrando 1-9 de 19 resultados
            </span>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Busca tu Curso..."
                className="pl-10 pr-4 py-2 w-64 bg-white/80 backdrop-blur-sm border-purple-200 rounded-full"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border-purple-200 rounded-full"
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Course Image */}
                <div
                  className={`relative h-48 bg-gradient-to-r ${course.bgColor} p-6`}
                >
                  {course.discount && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{course.discount}%
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white text-xs px-2 py-1">
                      📚 APRENDER • 15 MARZO
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">Difficult Things</h3>
                    <h4 className="text-lg font-semibold mb-2">
                      About Education.
                    </h4>
                    <p className="text-sm opacity-90 mb-3">
                      {course.instructor}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        📚 {course.lessons} Class
                      </span>
                      <span className="flex items-center gap-1">
                        🎥 45 Videos
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                        👥 40 Enroll Students
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
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
                            i < course.rating
                              ? "fill-orange-400 text-orange-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        ({course.comments} Comentarios)
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      📚 {course.lessons} Lecciones
                    </span>
                    <span className="flex items-center gap-1">
                      👥 {course.students} Estudiantes
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    Es un hecho establecido desde hace mucho tiempo que un
                    lector se distraerá con el contenido legible de una página
                    cuando mire su diseño.
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Course Image - List View */}
                  <div
                    className={`relative w-full md:w-80 h-48 md:h-auto bg-gradient-to-r ${course.bgColor} p-6 flex-shrink-0`}
                  >
                    {course.discount && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        -{course.discount}%
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white text-xs px-2 py-1">
                        📚 APRENDER • 15 MARZO
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">
                        Difficult Things
                      </h3>
                      <h4 className="text-base font-semibold mb-2">
                        About Education.
                      </h4>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          📚 {course.lessons} Class
                        </span>
                        <span className="flex items-center gap-1">
                          🎥 45 Videos
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
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
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < course.rating
                                  ? "fill-orange-400 text-orange-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            ({course.comments} Comentarios)
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-5 h-5" />
                      </Button>
                    </div>

                    <p className="text-gray-600 mb-4 text-base leading-relaxed">
                      Es un hecho establecido desde hace mucho tiempo que un
                      lector se distraerá con el contenido legible de una página
                      cuando mire su diseño. El punto de usar Lorem Ipsum es que
                      tiene una distribución más o menos normal de letras.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          📚 {course.lessons} Lecciones
                        </span>
                        <span className="flex items-center gap-2">
                          👥 {course.students} Estudiantes
                        </span>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                          👥 40 Enroll Students
                        </span>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
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
  );
}
