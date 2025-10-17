"use client"

import { Award, Clock, Shield, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Award,
    title: "Tecnología Avanzada",
    description: "Utilizamos las últimas tecnologías y equipos de construcción para garantizar resultados superiores.",
  },
  {
    icon: Users,
    title: "Empresa Confiable",
    description: "Más de 20 años de experiencia respaldando cada proyecto con profesionalismo y dedicación.",
  },
  {
    icon: Shield,
    title: "Equipo Profesional",
    description: "Contamos con un equipo altamente calificado y certificado en todas las áreas de construcción.",
  },
  {
    icon: Clock,
    title: "Entrega a Tiempo",
    description: "Cumplimos con los plazos establecidos sin comprometer la calidad del trabajo realizado.",
  },
]

export function WhyChooseUs() {
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
    <section id="nosotros" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden group">
              <Image
                src="/large-industrial-dump-truck-on-construction-site.jpg"
                alt="Construction equipment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl hidden md:block transform hover:scale-110 transition-transform duration-300 hover:rotate-3">
              <p className="text-5xl font-bold mb-2">20+</p>
              <p className="text-lg font-semibold">Años de Experiencia</p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <p className="text-primary font-semibold text-lg mb-4 uppercase tracking-wide">¿Por Qué Elegirnos?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Lo que nos distingue</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos una empresa líder en construcción con un compromiso inquebrantable con la calidad, seguridad y
              satisfacción del cliente. Nuestro equipo experto trabaja incansablemente para superar tus expectativas.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-700 hover:translate-x-2 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:rotate-12 transition-all duration-300 group">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
