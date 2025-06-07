"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, Sun, Moon, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

const navItems = [
  { name: "INICIO", href: "/" },
  { name: "NOSOTROS", href: "/nosotros" },
  { name: "SERVICIOS", href: "/servicios" },
  { name: "PROYECTOS", href: "/proyectos" },
  { name: "CONTACTO", href: "/contacto" },
  { name: "DISEÑA TU RED", href: "/disena-tu-red", special: true },
  { name: "COBERTURA", href: "/axion-market", special: true },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState("ES")
  const { theme, setTheme, resolvedTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const controlsVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const toggleLanguage = () => {
    setLanguage(language === "ES" ? "EN" : "ES")
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#D29D69]/95 dark:bg-[#F8BB7C]/95 backdrop-blur-md shadow-lg py-2"
            : "bg-[#D29D69] dark:bg-[#F8BB7C] py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div initial="hidden" animate="visible" variants={logoVariants}>
              <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
                <div className="text-white dark:text-[#333] font-bold text-2xl tracking-wider">WISP</div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <motion.div key={item.name} custom={i} initial="hidden" animate="visible" variants={navItemVariants}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      item.special
                        ? "text-white dark:text-[#333] hover:text-[#333] dark:hover:text-white"
                        : pathname === item.href
                          ? "text-[#333] dark:text-white border-b-2 border-[#333] dark:border-white"
                          : "text-white/90 dark:text-[#333]/90 hover:text-white dark:hover:text-[#333] hover:bg-white/10 dark:hover:bg-[#333]/10 rounded-md"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop Controls */}
            <motion.div
              className="hidden lg:flex items-center space-x-3"
              initial="hidden"
              animate="visible"
              variants={controlsVariants}
            >
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-white dark:text-[#333] hover:bg-white/10 dark:hover:bg-[#333]/10 hover:text-white dark:hover:text-[#333]"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language}
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-white dark:text-[#333] hover:bg-white/10 dark:hover:bg-[#333]/10 hover:text-white dark:hover:text-[#333]"
              >
                {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* WhatsApp Button */}
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#20b358] text-white font-medium px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
              >
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden text-white dark:text-[#333] hover:bg-white/10 dark:hover:bg-[#333]/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={closeMobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#D29D69] dark:bg-[#F8BB7C] z-[70] lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-[#333]/20">
          <div className="text-white dark:text-[#333] font-bold text-xl">AXION</div>
          <Button
            size="icon"
            variant="ghost"
            className="text-white dark:text-[#333] hover:bg-white/20 dark:hover:bg-[#333]/20"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </Button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-4 overflow-y-auto h-full pb-20">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium mb-2 transition-colors ${
                  pathname === item.href
                    ? "text-[#333] dark:text-white bg-white/10 dark:bg-[#333]/10"
                    : "text-white/90 dark:text-[#333]/90 hover:text-white dark:hover:text-[#333] hover:bg-white/10 dark:hover:bg-[#333]/10"
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Mobile Controls */}
          <motion.div
            className="flex flex-col space-y-3 mt-6 pt-4 border-t border-white/20 dark:border-[#333]/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Language Toggle */}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-white dark:text-[#333] hover:bg-white/10 dark:hover:bg-[#333]/10 justify-start"
            >
              <Globe className="w-4 h-4 mr-2" />
              Idioma: {language}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="text-white dark:text-[#333] hover:bg-white/10 dark:hover:bg-[#333]/10 justify-start"
            >
              {resolvedTheme === "dark" ? (
                <>
                  <Sun className="w-4 h-4 mr-2" />
                  Modo Claro
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 mr-2" />
                  Modo Oscuro
                </>
              )}
            </Button>

            {/* WhatsApp Button */}
            <Button asChild className="bg-[#25D366] hover:bg-[#20b358] text-white font-medium justify-start">
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
