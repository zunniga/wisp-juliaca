"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Target, X } from "lucide-react";
import Image from "next/image";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "@/components/utils/ThemeSwitch";

const navItems = [
  { name: "INICIO", href: "/" },
  { name: "NOSOTROS", href: "/about" },
  {
    name: "CERTIFICADOS",
    href: "https://www.verycerts.com/certs",
    target: "_blank",
  },
  { name: "DIPLOMADOS", href: "/services" },
  { name: "CURSOS", href: "/gallery" },
  { name: "CONTÁCTANOS", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "image/logo/inalta_logo_dark.png" : "image/logo/inalta_logo_main.png";
  const pathname = usePathname();

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
        isScrolled
          ? "bg-black/30 dark:bg-[#0F172A] backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform hover:scale-105"
          >
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

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                {...(item.target
                  ? { target: item.target, rel: "noopener noreferrer" }
                  : {})}
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
            {/* <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  checked={resolvedTheme === "dark"}
                  onChange={toggleTheme}
                />
              }
              label=""
            /> */}
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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-full text-base font-medium mb-2 ${
                  pathname === item.href
                    ? "text-white bg-primary shadow-md"
                    : "text-gray-700 hover:text-white hover:bg-primary/80"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-start ml-4">
              <ThemeSwitch />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
