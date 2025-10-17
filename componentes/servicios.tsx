"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Hammer, HardHat, Home, Wrench, Ruler } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Building2,
    title: "Construcción General",
    description: "Proyectos residenciales y comerciales de alta calidad con los mejores materiales.",
  },
  {
    icon: Home,
    title: "Remodelación",
    description: "Transformamos espacios existentes en ambientes modernos y funcionales.",
  },
  {
    icon: Hammer,
    title: "Renovación",
    description: "Actualizamos y mejoramos estructuras para extender su vida útil.",
  },
  {
    icon: HardHat,
    title: "Consultoría",
    description: "Asesoría experta en planificación y ejecución de proyectos constructivos.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Servicios preventivos y correctivos para mantener tus instalaciones en óptimas condiciones.",
  },
  {
    icon: Ruler,
    title: "Diseño & Planeación",
    description: "Diseño arquitectónico y planificación detallada de proyectos constructivos.",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="servicios" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <p className="text-primary font-semibold text-lg mb-4 uppercase tracking-wide">Nuestros Servicios</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              We building everything that you needed
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ofrecemos una amplia gama de servicios de construcción diseñados para satisfacer todas tus necesidades.
              Desde proyectos residenciales hasta comerciales, nuestro equipo experto está listo para hacer realidad tu
              visión.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary animate-pulse" />
                <div>
                  <p className="text-sm text-muted-foreground">Llámanos</p>
                  <p className="font-bold text-foreground">+57 300 123 4567</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`relative h-[500px] rounded-lg overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Image
              src="/construction-worker-in-orange-vest-working-on-site.jpg"
              alt="Construction services"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-border hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Phone({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
