"use client"

import type React from "react"
import { submitContactForm } from "@/app/acciones/contacto"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: null as "success" | "error" | null,
    message: "",
  })

  const sectionRef = useRef<HTMLElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const formDataObj = new FormData(formRef.current!)
      const result = await submitContactForm(formDataObj)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        formRef.current?.reset()
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-semibold text-lg mb-4 uppercase tracking-wide">Contáctanos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Tu proyecto comienza aquí</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Contáctanos hoy y descubre cómo podemos ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card
            className={`border-border hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary hover:scale-110 transition-all duration-300 group">
                <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Teléfono</h3>
              <p className="text-muted-foreground mb-2">Llámanos de Lunes a Viernes</p>
              <a href="tel:+573001234567" className="text-primary font-semibold hover:underline">
                +57 300 123 4567
              </a>
            </CardContent>
          </Card>

          <Card
            className={`border-border hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary hover:scale-110 transition-all duration-300 group">
                <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">Envíanos un correo</p>
              <a href="mailto:info@estructurax.com" className="text-primary font-semibold hover:underline">
                info@estructurax.com
              </a>
            </CardContent>
          </Card>

          <Card
            className={`border-border hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary hover:scale-110 transition-all duration-300 group">
                <MapPin className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Ubicación</h3>
              <p className="text-muted-foreground mb-2">Visítanos en</p>
              <p className="text-primary font-semibold">Bogotá, Colombia</p>
            </CardContent>
          </Card>
        </div>

        <Card
          className={`max-w-3xl mx-auto border-border hover:shadow-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <CardContent className="p-8">
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="border-input focus:border-primary transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="border-input focus:border-primary transition-colors disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Teléfono *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+57 300 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="border-input focus:border-primary transition-colors disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="border-input resize-none focus:border-primary transition-colors disabled:opacity-50"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
