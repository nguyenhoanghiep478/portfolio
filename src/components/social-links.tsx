"use client"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/nguyenhoanghiep478",
      color: "hover:text-green-400",
    },
    {
      name: "Zalo",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169-.224-.487-.32-.686-.32-.2 0-.518.096-.686.32L12 12.64 7.804 8.16c-.169-.224-.487-.32-.686-.32-.2 0-.518.096-.686.32-.169.225-.169.576 0 .801L10.48 13.6c.338.448.962.448 1.3 0l4.048-4.639c.169-.225.169-.576 0-.801z" />
        </svg>
      ),
      url: "https://zalo.me/0965478891",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://www.facebook.com/hoang.hiep.467916/",
      color: "hover:text-pink-400",
    },
  ]

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative p-3 bg-black/80 border border-cyan-500/30 rounded-lg
              backdrop-blur-sm transition-all duration-300 hover:scale-110
              hover:border-cyan-400/60 ${link.color}
              social-link
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative z-10">{link.icon}</div>

            {/* Hover effect overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            />

            {/* Tooltip */}
            <div
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 
                          bg-black/90 text-cyan-400 text-sm rounded opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 whitespace-nowrap border border-cyan-500/30"
            >
              {link.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
