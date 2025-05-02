import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Writings from "@/components/writings"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Writings />
      <Projects />
      <Contact />
    </>
  )
}
