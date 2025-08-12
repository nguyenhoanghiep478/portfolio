import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import MatrixRain from "@/components/matrix-rain"
import ParticleSystem from "@/components/particle-system"
import SocialLinks from "@/components/social-links"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <MatrixRain />
      <ParticleSystem />

      {/* Background Grid */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Navigation */}
      <Navigation />

      {/* Social Links */}
      <SocialLinks />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
