"use client"

import type React from "react"

import { smoothScrollTo } from "@/lib/scroll-utils"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    smoothScrollTo(sectionId)
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold">EstructuraX</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4">
              Construyendo el futuro con calidad, dedicación y compromiso desde hace más de 20 años.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, "inicio")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block cursor-pointer"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleNavClick(e, "servicios")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block cursor-pointer"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  onClick={(e) => handleNavClick(e, "proyectos")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block cursor-pointer"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  onClick={(e) => handleNavClick(e, "nosotros")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block cursor-pointer"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, "contacto")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block cursor-pointer"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/80">Construcción General</li>
              <li className="text-secondary-foreground/80">Remodelación</li>
              <li className="text-secondary-foreground/80">Renovación</li>
              <li className="text-secondary-foreground/80">Consultoría</li>
              <li className="text-secondary-foreground/80">Mantenimiento</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-secondary-foreground/80">
                <span className="font-semibold text-secondary-foreground">Teléfono:</span>
                <br />
                <a href="tel:+573001234567" className="hover:text-primary transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="text-secondary-foreground/80">
                <span className="font-semibold text-secondary-foreground">Email:</span>
                <br />
                <a href="mailto:info@estructurax.com" className="hover:text-primary transition-colors">
                  info@estructurax.com
                </a>
              </li>
              <li className="text-secondary-foreground/80">
                <span className="font-semibold text-secondary-foreground">Ubicación:</span>
                <br />
                Bogotá, Colombia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/80 text-sm">© 2025 EstructuraX. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
