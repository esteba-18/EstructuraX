import { Header } from "@/componentes/encabezado"
import { Hero } from "@/componentes/hero"
import { Services } from "@/componentes/servicios"
import { Projects } from "@/componentes/proyectos"
import { WhyChooseUs } from "@/componentes/por-que-elegirnos"
import { Testimonials } from "@/componentes/testimonios"
import { Contact } from "@/componentes/contacto"
import { Footer } from "@/componentes/pie-pagina"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
