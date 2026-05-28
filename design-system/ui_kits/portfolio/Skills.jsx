// Skills.jsx — technologies as badges grouped by category.
const SKILL_GROUPS = [
  { icon: "code", title: "Languages", items: [
    { l: "Java", logo: "openjdk/A8B3BF" }, { l: "TypeScript", logo: "typescript/A8B3BF" }, { l: "JavaScript", logo: "javascript/A8B3BF" } ] },
  { icon: "server", title: "Backend", items: [
    { l: "Spring Boot", logo: "springboot/A8B3BF" }, { l: "REST API" }, { l: "JWT", logo: "jsonwebtokens/A8B3BF" }, { l: "Kafka", logo: "apachekafka/A8B3BF" } ] },
  { icon: "database", title: "Database & Cache", items: [
    { l: "PostgreSQL", logo: "postgresql/A8B3BF" }, { l: "SQL" }, { l: "Redis", logo: "redis/A8B3BF" } ] },
  { icon: "testTube", title: "Testing & Logging", items: [
    { l: "JUnit", logo: "junit5/A8B3BF" }, { l: "Mockito" }, { l: "SLF4J" }, { l: "Logback" } ] },
  { icon: "layers", title: "Frontend", items: [
    { l: "Next.js", logo: "nextdotjs/A8B3BF" }, { l: "React.js", logo: "react/A8B3BF" } ] },
  { icon: "cloud", title: "Cloud & Infra", items: [
    { l: "AWS EC2", logo: "amazonec2/A8B3BF" }, { l: "Cloudflare Workers", logo: "cloudflareworkers/A8B3BF" }, { l: "R2", logo: "cloudflare/A8B3BF" }, { l: "Docker", logo: "docker/A8B3BF" }, { l: "Linux", logo: "linux/A8B3BF" }, { l: "Git", logo: "git/A8B3BF" } ] },
  { icon: "cpu", title: "Concepts", items: [
    { l: "OOP" }, { l: "DSA" }, { l: "Distributed Systems" }, { l: "Microservices" }, { l: "Concurrency" } ] },
];

function Skills() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <SectionHead
          eyebrow="// 03 — Stack"
          title="Technologies I work with"
          lead="A backend-first toolkit, with enough frontend to ship end-to-end."
        />
        <div className="skill-groups">
          {SKILL_GROUPS.map((g, gi) => {
            const Ic = Icon[g.icon];
            return (
              <Reveal className="skill-card" key={g.title} delay={(gi % 2) * 80}>
                <div className="skill-card-head">
                  <span className="si"><Ic size={18} /></span>
                  <h3>{g.title}</h3>
                </div>
                <div className="skill-badges">
                  {g.items.map((it) => <Badge key={it.l} logo={it.logo}>{it.l}</Badge>)}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;
