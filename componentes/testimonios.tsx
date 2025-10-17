"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Director de Proyecto",
    company: "Inmobiliaria del Norte",
    image: "/professional-businessman-suit.png",
    rating: 5,
    text: "EstructuraX superó todas nuestras expectativas. Su profesionalismo y atención al detalle son incomparables. Definitivamente los recomendaría.",
  },
  {
    name: "María González",
    role: "Propietaria",
    company: "Residencial Las Palmas",
    image: "/professional-businesswoman-smiling.jpg",
    rating: 5,
    text: "Excelente trabajo en la construcción de mi casa. El equipo fue muy profesional y cumplieron con todos los plazos establecidos.",
  },
  {
    name: "Roberto Martínez",
    role: "Gerente General",
    company: "Corporativo Azteca",
    image: "/professional-businessman.png",
    rating: 5,
    text: "La calidad de construcción es excepcional. Han sido nuestros socios de confianza en múltiples proyectos comerciales.",
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-semibold text-lg mb-4 uppercase tracking-wide">Testimonios</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            We provide excellent service to our customers
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Descubre lo que nuestros clientes satisfechos tienen que decir sobre su experiencia trabajando con nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary group-hover:scale-125 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
