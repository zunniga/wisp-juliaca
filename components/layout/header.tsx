"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { ThemeSwitch } from "@/components/utils/ThemeSwitch"


const navItems = [
  { name: "INICIO", href: "/" },
  { name: "NOSOTROS", href: "/#about" },
  {
    name: "CERTIFICADOS",
    href: "https://www.verycerts.com/certs",
    target: "_blank",
  },
  { name: "DIPLOMADOS", href: "/graduates" },
  { name: "CURSOS", href: "/gallery" },
  { name: "CONTÁCTANOS", href: "/#contacts" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [logoSrc, setLogoSrc] = useState('/image/logo/inalta_logo_main.png');
  const pathname = usePathname()

  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setLogoSrc('/image/logo/inalta_logo_dark.png');
    } else {
      setLogoSrc('/image/logo/inalta_logo_main.png');
    }
  }, [resolvedTheme]);


  // Control del scroll del body
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={` fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
          isScrolled ? "bg-black/30 dark:bg-[#0F172A] backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
              <div className="relative rounded-full overflow-hidden xl:w-44 xl:h-20 w-40 h-20 sm:w-20 sm:h-20 md:w-36 md:h-36">
                <Image
                  src={logoSrc}
                  alt="Inalta-Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <nav className=" hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  {...(item.target ? { target: item.target, rel: "noopener noreferrer" } : {})}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:scale-105 transform ${
                    pathname === item.href
                      ? "text-white bg-primary shadow-md"
                      : "text-gray-100 hover:text-white hover:bg-primary/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <ThemeSwitch />
            </nav>

            <Button
              size="icon"
              className="lg:hidden bg-primary text-white hover:bg-primary-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] lg:hidden" onClick={closeMobileMenu} />
      )}

   
      <div
        className={`
          fixed top-0 right-0 h-[550px] w-80 max-w-[65vw] bg-[#007389] dark:bg-[#1F2937] rounded-xl z-[70] lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header del menú móvil */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="relative w-32 h-16">
            <Image
              src={logoSrc || "/placeholder.svg?height=64&width=128"}
              alt="Inalta-Logo"
              fill
              className="object-contain"
            />
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </Button>
        </div>

        {/* Contenido del menú */}
        <div className="p-4 overflow-y-auto h-full pb-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              {...(item.target ? { target: item.target, rel: "noopener noreferrer" } : {})}
              className={`text-center block px-4 py-3 rounded-2xl text-base font-medium mb-2 transition-colors ${
                pathname === item.href
                  ? "text-gray-800 dark:text-white bg-white dark:bg-[#A1D302] shadow-md"
                  : "text-gray-100 dark:text-gray-100 hover:text-white hover:bg-white/20"
              }`}
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}

          {/* Theme switch en el menú móvil */}
          <div className="flex justify-center mt-6 pt-4 border-t border-white/20">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  )
}
