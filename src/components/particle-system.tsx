"use client"

import { useEffect, useState } from "react"

export default function ParticleSystem() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([])

  useEffect(() => {
    const colors = ["#00ff41", "#0066ff", "#ff0080", "#8b00ff"]

    const createParticle = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    })

    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = [...prev, createParticle()]
        return newParticles.slice(-15) // Keep only last 15 particles
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 6px ${particle.color}`,
          }}
        />
      ))}
    </div>
  )
}
