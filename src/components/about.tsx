"use client"

import { useState } from "react"
import { Calendar, MapPin, Phone, Mail, Code, Cpu, Zap, ImageIcon } from "lucide-react"

export default function About() {
    const [hoveredInfo, setHoveredInfo] = useState<string | null>(null)

    const personalInfo = [
        { icon: Calendar, label: "Birthday", value: "August 31, 2003", color: "text-blue-400" },
        { icon: MapPin, label: "Location", value: "Ho Chi Minh City, Vietnam", color: "text-green-400" },
        { icon: Phone, label: "Phone", value: "+84 965 478 891", color: "text-pink-400" },
        { icon: Mail, label: "Email", value: "nguyenhoanghiep478@gmail.com", color: "text-purple-400" },
    ]

    const interests = [
        { icon: Code, label: "Software Development", color: "text-green-400" },
        { icon: Cpu, label: "Software Engineer", color: "text-blue-400" },
        { icon: Zap, label: "Algorithm", color: "text-yellow-400" },
        { icon: ImageIcon, label: "Image Processing", color: "text-pink-400" },
    ]

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="font-mono text-4xl md:text-5xl font-bold mb-6 neon-text">ABOUT ME</h2>
                        <div className="mb-8 flex justify-center md:justify-start">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative bg-gray-900 p-1 rounded-lg">
                                    <img
                                        src="/image-about.jpg"
                                        alt="Profile"
                                        className="w-48 h-48 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-xs font-mono text-green-400">DEVELOPER.jpg</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-300 font-sans leading-relaxed">
                            <p>
                                I'm a Full-stack Developer with 6 months of freelance experience delivering custom web solutions for
                                businesses. Skilled in both Front-end and Back-end development.
                            </p>
                            <p>
                                I create applications optimized for performance, scalability, and user experience. Passionate about
                                continuous learning and applying new technologies to build impactful products.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring the latest in AI, algorithms, and image processing -
                                always staying ahead of the technological curve.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-mono text-xl text-green-400 mb-4">{"> Personal Info"}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {personalInfo.map((info, index) => (
                                    <div
                                        key={info.label}
                                        className="info-card p-3 border border-gray-700 bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                                        onMouseEnter={() => setHoveredInfo(info.label)}
                                        onMouseLeave={() => setHoveredInfo(null)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <info.icon
                                                className={`w-4 h-4 ${info.color} ${hoveredInfo === info.label ? "animate-pulse" : ""}`}
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs text-gray-500 font-mono">{info.label.toUpperCase()}</div>
                                                <div className={`text-sm font-mono ${info.color} truncate`}>{info.value}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-mono text-xl text-pink-400 mb-4">{"> Interests"}</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {interests.map((interest, index) => (
                                    <div
                                        key={interest.label}
                                        className="interest-card p-4 border border-gray-700 bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <interest.icon
                                                className={`w-5 h-5 ${interest.color} group-hover:scale-110 transition-transform duration-300`}
                                            />
                                            <span
                                                className={`text-sm font-mono ${interest.color} group-hover:text-white transition-colors duration-300`}
                                            >
                                                {interest.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <span className="px-4 py-2 border border-green-400 text-green-400 font-mono text-sm">FULL_STACK</span>
                            <span className="px-4 py-2 border border-pink-400 text-pink-400 font-mono text-sm">AI_INTEGRATION</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="mb-8 ">
                            <div className="scan-line neon-border p-8 bg-gray-900/50">
                                <div className="font-mono text-green-400 text-sm mb-4">{"> Education"}</div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">From:</span>
                                        <span className="text-green-400">June 2021</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">To:</span>
                                        <span className="text-green-400">Present</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Projects:</span>
                                        <span className="text-green-400">15+ completed</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Location:</span>
                                        <span className="text-green-400">Sai Gon University</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Main Coding Language:</span>
                                        <span className="text-green-400">Java, Typescript</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Main Frameowork:</span>
                                        <span className="text-green-400">Spring Boot, Next js</span>
                                    </div>

                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-700">
                                    <div className="text-gray-400 mb-2">Core Problem Resolved And Learned:</div>
                                    <div className="space-y-1 text-xs">
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">1.</span>
                                            <span className="text-gray-300">Design system from idea to production</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">2.</span>
                                            <span className="text-gray-300">Research bussinesses domain from real bussiness then implement them to software</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">3.</span>
                                            <span className="text-gray-300">Test software with many method (White-box , Black-box , API-testing)</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">4.</span>
                                            <span className="text-gray-300">Learned how to use Git, Github, And how to work with teammate</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">5.</span>
                                            <span className="text-gray-300">UI/UX Design With Figma</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mb-8">
                            <div className="scan-line neon-border p-8 bg-gray-900/50">
                                <div className="font-mono text-green-400 text-sm mb-4">{"> Freelancer"}</div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Experience:</span>
                                        <span className="text-green-400">6 months</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Projects:</span>
                                        <span className="text-green-400">3+ completed</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Location:</span>
                                        <span className="text-green-400">Ho Chi Minh City</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Main Coding Language:</span>
                                        <span className="text-green-400">Java, Typescript</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Main Frameowork:</span>
                                        <span className="text-green-400">Spring Boot, Next js, App Script</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-700">
                                    <div className="text-gray-400 mb-2">Core Problem Resolved And Learned:</div>
                                    <div className="space-y-1 text-xs">
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">1.</span>
                                            <span className="text-gray-300">Implement sending SMS message feature when customer maked a reservation completed with Srping WebFlux and Twilio</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">2.</span>
                                            <span className="text-gray-300">Implment Broadcast Refresh Event when there new feature released with Spring Boot and Angular (Websocket) </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">3.</span>
                                            <span className="text-gray-300">Design and implement website for a logistic bussniess with Next Js</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 font-mono">4.</span>
                                            <span className="text-gray-300">Apply function for workbook with Appscript</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
