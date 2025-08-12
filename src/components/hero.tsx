"use client"

import { useEffect, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function Hero() {
  const [titleText, setTitleText] = useState("")
  const [descText, setDescText] = useState("")
  const [showTitleCursor, setShowTitleCursor] = useState(true)
  const [showDescCursor, setShowDescCursor] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showCVModal, setShowCVModal] = useState(false)

  const fullTitle = "FULL-STACK DEVELOPER"
  const fullDesc =
    "Hi there,... I'm a Full-stack Developer with 6 months of freelance experience delivering custom web solutions for businesses. Skilled in both Front-end and Back-end development, I create applications optimized for performance, scalability, and user experience. Passionate about continuous learning and applying new technologies to build impactful products."

  const { ref, isIntersecting } = useIntersectionObserver()

  useEffect(() => {
    if (!isIntersecting) return

    setTitleText("")
    setDescText("")
    setShowTitleCursor(true)
    setShowDescCursor(false)

    let titleIndex = 0
    const titleTimer = setInterval(() => {
      setTitleText(fullTitle.slice(0, titleIndex + 1))
      titleIndex++
      if (titleIndex >= fullTitle.length) {
        clearInterval(titleTimer)
        setShowTitleCursor(false)

        setTimeout(() => {
          setShowDescCursor(true)
          let descIndex = 0
          const descTimer = setInterval(() => {
            setDescText(fullDesc.slice(0, descIndex + 1))
            descIndex++
            if (descIndex >= fullDesc.length) {
              clearInterval(descTimer)
              setTimeout(() => setShowDescCursor(false), 1000)
            }
          }, 30)
        }, 500)
      }
    }, 150)

    return () => clearInterval(titleTimer)
  }, [isIntersecting])

  const handleCVDownload = (type: "backend" | "frontend") => {
    console.log(`Downloading ${type} CV`)
    setShowCVModal(false)
  }

  return (
    <>
      <section
        ref={ref}
        id="hero"
        className={`min-h-screen flex items-center justify-center relative overflow-hidden circuit-board transition-all duration-1000 ${
          isHovered ? "hero-hover-active" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${isHovered ? "opacity-60" : "opacity-20"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent animate-pulse" />
            {isHovered && (
              <>
                <div className="absolute top-0 left-0 w-full h-full nebula-cloud animate-nebula-drift" />
                <div className="absolute top-0 right-0 w-full h-full nebula-cloud-2 animate-nebula-drift-reverse" />
                <div className="absolute bottom-0 left-1/2 w-full h-full nebula-cloud-3 animate-nebula-pulse" />
              </>
            )}
          </div>

          {isHovered && (
            <>
              <div className="absolute top-10 left-0 w-2 h-2 bg-white rounded-full comet animate-comet-1" />
              <div className="absolute top-32 right-0 w-1 h-1 bg-blue-400 rounded-full comet animate-comet-2" />
              <div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full comet animate-comet-3" />
              <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-purple-400 rounded-full comet animate-comet-4" />
            </>
          )}

          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          )}

          {[...Array(isHovered ? 20 : 12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full floating transition-all duration-500 ${
                i % 4 === 0
                  ? "bg-green-400"
                  : i % 4 === 1
                    ? "bg-pink-400"
                    : i % 4 === 2
                      ? "bg-blue-400"
                      : "bg-purple-400"
              } ${isHovered ? "scale-150" : ""}`}
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: `0 0 ${isHovered ? "25px" : "15px"} currentColor`,
              }}
            />
          ))}

          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-2 border-green-400/30 rounded-full animate-ping"
                style={{ animationDuration: "2s" }}
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-2 border-pink-400/30 rounded-full animate-ping"
                style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
              />
            </div>
          )}
        </div>

        <div
          className={`text-center z-10 max-w-4xl mx-auto px-6 fade-in-up transition-transform duration-500 ${isIntersecting ? "animate" : ""} ${isHovered ? "scale-105" : ""}`}
        >
          <div className="mb-8">
            <h1 className="font-mono text-6xl md:text-8xl font-bold mb-4">
              <span
                className={`glitch-intense holographic hover:scale-105 transition-all duration-300 ${isHovered ? "text-shadow-intense" : ""}`}
                data-text={titleText}
              >
                {titleText}
              </span>
              {showTitleCursor && <span className="animate-pulse text-green-400 ml-1">|</span>}
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-300 font-sans data-stream hover:text-green-400 transition-all duration-500 min-h-[120px] ${isHovered ? "text-green-300" : ""}`}
            >
              {descText}
              {showDescCursor && <span className="animate-pulse text-green-400 ml-1">|</span>}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="neon-button group relative overflow-hidden hover:scale-110 transition-all duration-300"
              onClick={() => setShowCVModal(true)}
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">DOWNLOAD CV</span>
              <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <button
              className="neon-button group relative overflow-hidden hover:scale-110 transition-all duration-300"
              style={{ borderColor: "#ff0080", color: "#ff0080" }}
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">CONTACT ME</span>
              <div className="absolute inset-0 bg-pink-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center hover:border-pink-400 transition-all duration-300 cursor-pointer bg-black/20 backdrop-blur-sm">
              <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce hover:bg-pink-400 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </section>

      {showCVModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setShowCVModal(false)}
          />

          <div className="relative bg-black/90 border-2 border-green-400 rounded-lg p-8 max-w-md w-full mx-4 animate-modal-appear">
            <button
              onClick={() => setShowCVModal(false)}
              className="absolute top-4 right-4 text-green-400 hover:text-pink-400 transition-colors duration-300 text-2xl"
            >
              ×
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-mono font-bold text-green-400 mb-6 glitch-text">SELECT CV TYPE</h3>

              <div className="space-y-4">
                <button
                  onClick={() => handleCVDownload("backend")}
                  className="w-full cv-option-button group relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    BACKEND DEVELOPER
                  </span>
                  <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>

                <button
                  onClick={() => handleCVDownload("frontend")}
                  className="w-full cv-option-button group relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    FRONTEND DEVELOPER
                  </span>
                  <div className="absolute inset-0 bg-pink-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
