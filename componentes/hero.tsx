"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { smoothScrollTo } from "@/lib/scroll-utils"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/construction-worker-in-orange-safety-vest-and-hard.jpg"
          alt="Construction worker"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Diagonal Shape Accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/20 clip-diagonal hidden lg:block animate-slide-in-right" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-float-slow" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase animate-fade-in">
            Bienvenido a EstructuraX
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance animate-slide-in-left">
            Quality Construction
            <span className="block text-primary">& Honest Service</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl animate-slide-in-left animation-delay-200">
            Con más de 20 años de experiencia, construimos todo lo que necesitas con calidad, dedicación y compromiso.
            Tu proyecto en las mejores manos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animation-delay-400">
            <Button
              size="lg"
              onClick={() => smoothScrollTo("servicios")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Explorar Servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6 bg-transparent transform hover:scale-105 transition-all duration-300"
            >
              <a href="tel:+573001234567">
                <Phone className="mr-2 w-5 h-5" />
                +57 300 123 4567
              </a>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        }
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  )
}
