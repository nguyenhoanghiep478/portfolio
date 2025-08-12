"use client"

import { useEffect, useState } from "react"

export default function MatrixRain() {
  const [chars, setChars] = useState<Array<{ id: number; char: string; left: number; duration: number }>>([])

  useEffect(() => {
    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const createChar = () => ({
      id: Math.random(),
      char: characters[Math.floor(Math.random() * characters.length)],
      left: Math.random() * 100,
      duration: Math.random() * 3 + 2,
    })

    const interval = setInterval(() => {
      setChars((prev) => {
        const newChars = [...prev, createChar()]
        return newChars.slice(-20) // Keep only last 20 characters
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="matrix-rain">
      {chars.map((char) => (
        <div
          key={char.id}
          className="matrix-char"
          style={{
            left: `${char.left}%`,
            animationDuration: `${char.duration}s`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  )
}
