import { link } from "fs"

export default function Projects() {
    const projects = [
        {
            title: "Booking Train Tickets",
            description:
                "A web-based train ticket booking system built on microservices architecture, with all client requests routed through an API Gateway and inter-service communication handled via Apache Kafka. The platform integrates an AI recommendation engine to help users book tickets faster by suggesting routes, schedules, and seat options based on their preferences and booking history.",
            tech: ["Next js", "Python", "TensorFlow", "Spring Boot", "Kafka", "PostgreSQL", "Gmail API"],
            color: "green",
            status: "DEVELOPMENT",
            link: "https://github.com/nguyenhoanghiep478/BookingTrainTicket",
        },
        {
            title: "Management Phone Store APP",
            description: "A Windows-based application for managing phone inventory, supporting stock-in and stock-out workflows. The app includes a barcode scanning feature to quickly retrieve device IMEI numbers, streamlining the process of tracking and managing products.",
            tech: ["C#", "Mysql"],
            color: "blue",
            status: "DEVELOPMENT",
            link: "https://github.com/nguyenhoanghiep478/ManagementPhoneStoreApp",
        },
        {
            title: "Recognize Text in Image",
            description: "An application that detects and extracts text from images using a Convolutional Neural Network (CNN) model. Designed for accurate and efficient text recognition, enabling automated data extraction from visual content.",
            tech: ["Python", "TensorFlow"],
            color: "pink",
            status: "DEVELOPMENT",
            link: "https://github.com/nguyenhoanghiep478/RecognizeImage",
        },
        {
            title: "Media Social Platform",
            description: "A web-based social platform where users can post photos, comment, and chat in real time. Designed for an interactive and engaging user experience with instant communication features.",
            tech: ["Servlet", "JSP", "Javascript", "WebSocket", "Spring Data JPA", "MySQL"],
            color: "purple",
            status: "DEVELOPMENT",
            link: "https://github.com/nguyenhoanghiep478/firstBack-end-wed",
        },
    ]

    const getColorClasses = (color: string) => {
        const colors = {
            green: "border-green-400 text-green-400",
            blue: "border-blue-400 text-blue-400",
            pink: "border-pink-400 text-pink-400",
            purple: "border-purple-400 text-purple-400",
        }
        return colors[color as keyof typeof colors]
    }

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-mono text-4xl md:text-5xl font-bold text-center mb-12 neon-text">PROJECTS</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`neon-border p-6 bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300 group ${getColorClasses(project.color)}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-mono text-xl font-bold">{project.title}</h3>
                                <span className={`px-2 py-1 text-xs font-mono border ${getColorClasses(project.color)}`}>
                                    {project.status}
                                </span>
                            </div>

                            <p className="text-gray-300 font-sans mb-4 leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 font-mono text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {/* <button
                  className={`px-4 py-2 border ${getColorClasses(project.color)} font-mono text-sm hover:bg-current hover:bg-opacity-10 transition-all duration-300`}
                >
                  VIEW_CODE
                </button> */}
                                <a
                                    href={project.link} // link code GitHub/GitLab
                                    target="_blank" // mở tab mới
                                    rel="noopener noreferrer" // bảo mật
                                    className={`px-4 py-2 border ${getColorClasses(project.color)} font-mono text-sm hover:bg-current hover:bg-opacity-10 transition-all duration-300`}
                                >
                                    VIEW_CODE
                                </a>
                                <button className="px-4 py-2 border border-gray-600 text-gray-400 font-mono text-sm hover:border-gray-400 hover:text-gray-300 transition-all duration-300">
                                    LIVE_DEMO
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
