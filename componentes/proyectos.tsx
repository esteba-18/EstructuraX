"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Construcción General",
    category: "Residencial",
    image: "/modern-residential-building-construction-with-sola.jpg",
    description:
      "Proyecto residencial de alta gama con paneles solares integrados. Construcción sostenible con materiales de primera calidad y diseño moderno.",
    details: {
      area: "350 m²",
      duracion: "8 meses",
      ubicacion: "Bogotá, Colombia",
    },
  },
  {
    title: "Edificio Comercial",
    category: "Comercial",
    image: "/modern-commercial-building-with-glass-facade-at-su.jpg",
    description:
      "Edificio comercial de 5 pisos con fachada de vidrio templado. Diseño contemporáneo con espacios amplios y luminosos para oficinas.",
    details: {
      area: "1,200 m²",
      duracion: "14 meses",
      ubicacion: "Medellín, Colombia",
    },
  },
  {
    title: "Infraestructura Industrial",
    category: "Industrial",
    image: "/industrial-construction-site-with-steel-beams-and-.jpg",
    description:
      "Construcción de infraestructura industrial con estructura de acero de alta resistencia. Proyecto diseñado para soportar maquinaria pesada.",
    details: {
      area: "2,500 m²",
      duracion: "18 meses",
      ubicacion: "Cali, Colombia",
    },
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const displayedProjects = showAllProjects ? projects : projects

  return (
    <section id="proyectos" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-semibold text-lg mb-4 uppercase tracking-wide">Nuestro Portafolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Conoce nuestros proyectos recientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre algunos de nuestros proyectos más destacados que demuestran nuestra experiencia y compromiso con la
            excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-border hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent group-hover:from-primary/90 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary font-semibold mb-2 group-hover:text-white transition-colors">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedProject(index)}
                  className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  Ver Detalles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <Button
            size="lg"
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            {showAllProjects ? "Ver Menos Proyectos" : "Ver Todos los Proyectos"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96">
              <Image
                src={projects[selectedProject].image || "/placeholder.svg"}
                alt={projects[selectedProject].title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <p className="text-primary font-semibold mb-2">{projects[selectedProject].category}</p>
              <h3 className="text-3xl font-bold text-foreground mb-4">{projects[selectedProject].title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {projects[selectedProject].description}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Área</p>
                  <p className="text-xl font-bold text-foreground">{projects[selectedProject].details.area}</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Duración</p>
                  <p className="text-xl font-bold text-foreground">{projects[selectedProject].details.duracion}</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                  <p className="text-xl font-bold text-foreground">{projects[selectedProject].details.ubicacion}</p>
                </div>
              </div>
              <Button
                size="lg"
                onClick={() => {
                  setSelectedProject(null)
                  setTimeout(() => {
                    const contactSection = document.getElementById("contacto")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }, 300)
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Solicitar Cotización para este Proyecto
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
