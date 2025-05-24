"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "INICIO", href: "/" },
  { name: "NOSOTROS", href: "/services" },
  { name: "CERTIFICADOS", href: "/gallery" },
  { name: "DIPLOMADOS", href: "/about" },
  { name: "CURSOS", href: "/contact" },
  { name: "CONTÁCTANOS", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
        isScrolled
          ? "bg-white/20 backdrop-blur-md shadow-md py-2"
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
                src="/inalta_logo_main.png"
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:scale-105 transform ${
                  pathname === item.href
                    ? "text-white bg-primary shadow-md"
                    : "text-gray-100 hover:text-white hover:bg-primary/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="ml-8 bg-indigo-500 text-white shadow-md hover:bg-indigo-900 hover:shadow-lg rounded-sm">
              <Link href="/booking">Book Now</Link>
            </Button>
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
            <Button
              asChild
              variant="default"
              className="w-full mt-4 animate-pulse hover:animate-none"
            >
              <Link
                href="/booking"
                className="flex items-center justify-center  text-white shadow-md  hover:bg-indigo-700 hover:shadow-lg rounded-sm"
              >
                <span>Book Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
