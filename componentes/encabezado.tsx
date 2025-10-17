"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"
import { useState, useEffect } from "react"
import { smoothScrollTo } from "@/lib/scroll-utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    smoothScrollTo(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm"
      } border-b border-border`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => smoothScrollTo("inicio")}>
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <span className="text-xl font-bold text-foreground">EstructuraX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "inicio")}
              className="text-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, "servicios")}
              className="text-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#proyectos"
              onClick={(e) => handleNavClick(e, "proyectos")}
              className="text-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              Proyectos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#nosotros"
              onClick={(e) => handleNavClick(e, "nosotros")}
              className="text-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="text-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+573001234567"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+57 300 123 4567</span>
            </a>
            <Button
              onClick={() => smoothScrollTo("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-transform duration-300"
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              <a
                href="#inicio"
                onClick={(e) => handleNavClick(e, "inicio")}
                className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                onClick={(e) => handleNavClick(e, "servicios")}
                className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Servicios
              </a>
              <a
                href="#proyectos"
                onClick={(e) => handleNavClick(e, "proyectos")}
                className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Proyectos
              </a>
              <a
                href="#nosotros"
                onClick={(e) => handleNavClick(e, "nosotros")}
                className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "contacto")}
                className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Contacto
              </a>
              <a
                href="tel:+573001234567"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+57 300 123 4567</span>
              </a>
              <Button
                onClick={() => smoothScrollTo("contacto")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                Solicitar Cotización
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
