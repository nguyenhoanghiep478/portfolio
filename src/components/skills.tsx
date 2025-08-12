export default function Skills() {
  const skills = [
    { name: "Next.js", level: 95, color: "green" },
    { name: "TypeScript", level: 90, color: "blue" },
    { name: "Java", level: 95, color: "pink" },
    { name: "Python", level: 60, color: "purple" },
    { name: "UI/UX Design", level: 50, color: "green" },
    { name: "AI/ML", level: 60, color: "blue" },
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

  const getProgressColor = (color: string) => {
    const colors = {
      green: "bg-green-400",
      blue: "bg-blue-400",
      pink: "bg-pink-400",
      purple: "bg-purple-400",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-center mb-12 neon-text">SKILLS</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className={`neon-border p-6 bg-gray-900/30 ${getColorClasses(skill.color)}`}>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-lg">{skill.name}</span>
                <span className="font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getProgressColor(skill.color)} transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block neon-border p-6 bg-gray-900/50">
            <h3 className="font-mono text-xl text-green-400 mb-4">TECH STACK</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Next.js",
                "Spring Boot",
                "Spring Data JPA",
                "Spring Security",
                "PostgreSQL",
                "Kafka",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-gray-600 text-gray-300 font-mono text-sm hover:border-green-400 hover:text-green-400 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
