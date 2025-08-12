"use client"

import type React from "react"

import { useState,FormEvent,ChangeEvent } from "react"
import emailjs from 'emailjs-com';

interface FormData {
    name: string;
    email: string;
    message: string;
    title: string;
}
export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        title: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_kkzrsie',      // Service ID
            'template_sl794jm',     // Template ID
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                title: formData.title
            },
            'fCnG1ujrcN6Scb1qe'     // Public Key
        )
            .then(() => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '', title: '' });
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to send message.');
            });
    };


    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-mono text-4xl md:text-5xl font-bold text-center mb-12 neon-text">CONTACT</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="font-mono text-2xl text-green-400 mb-6">GET IN TOUCH</h3>
                        <div className="space-y-4 text-gray-300 font-sans">
                            <p>
                                Ready to build something extraordinary? Let's connect and create the future together. I'm always excited
                                to work on innovative projects that push the boundaries of technology.

                            </p>
                            <p>
                                Please fill out the form beside then i will send my applicant to your email with your infor you gave me or contact me by other social media .
                            </p>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" className="font-mono text-green-400 group-hover:text-green-300 transition-colors"
                                    href=" https://github.com/nguyenhoanghiep478"
                                >
                                    https://github.com/nguyenhoanghiep478
                                </a>
                            </div>


                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" className="font-mono text-purple-400 group-hover:text-purple-300 transition-colors"
                                    href="https://www.linkedin.com/in/hi%E1%BB%87p-nguy%E1%BB%85n-a2b7a0238/">
                                    https://www.linkedin.com/in/hi%E1%BB%87p-nguy%E1%BB%85n-a2b7a0238/
                                </a>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" className="font-mono text-pink-400 group-hover:text-pink-300 transition-colors"
                                    href="https://www.facebook.com/hoang.hiep.467916/">

                                    https://www.facebook.com/hoang.hiep.467916/
                                </a>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.5 9.5C7.5 8.119 8.619 7 10 7s2.5 1.119 2.5 2.5S11.381 12 10 12 7.5 10.881 7.5 9.5zM10 13c-1.933 0-3.5-1.567-3.5-3.5S8.067 6 10 6s3.5 1.567 3.5 3.5S11.933 13 10 13zm4-7c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zM10 5C7.239 5 5 7.239 5 10v4c0 2.761 2.239 5 5 5h4c2.761 0 5-2.239 5-5v-4c0-2.761-2.239-5-5-5h-4zm0-2h4c3.866 0 7 3.134 7 7v4c0 3.866-3.134 7-7 7h-4c-3.866 0-7-3.134-7-7v-4c0-3.866 3.134-7 7-7z" />
                                    </svg>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" className="font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors"
                                    href="https://zalo.me/0965478891">
                                    https://zalo.me/0965478891
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="neon-border p-6 bg-gray-900/30">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block font-mono text-green-400 mb-2">NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-600 px-4 py-3 text-white font-mono focus:border-green-400 focus:outline-none transition-colors duration-300"
                                    placeholder="Enter your name..."
                                />
                            </div>

                            <div>
                                <label className="block font-mono text-green-400 mb-2">EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-600 px-4 py-3 text-white font-mono focus:border-green-400 focus:outline-none transition-colors duration-300"
                                    placeholder="Enter your email..."
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-green-400 mb-2">TITLE</label>
                                <textarea
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full bg-gray-800 border border-gray-600 px-4 py-3 text-white font-mono focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none"
                                    placeholder="Enter your title..."
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-green-400 mb-2">MESSAGE</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full bg-gray-800 border border-gray-600 px-4 py-3 text-white font-mono focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none"
                                    placeholder="Enter your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full neon-border bg-transparent py-3 font-mono text-green-400 hover:bg-green-400/10 transition-all duration-300 pulse-neon"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block font-mono text-gray-500">
                        {"<"} Built with Next Js {"/>"}
                    </div>
                </div>
            </div>
        </section>
    )
}
