import { Code2, Server, Database, TestTube, Layers, Cloud, Cpu, type LucideIcon } from "lucide-react";
import Reveal from "./reveal";

type Item = { l: string; logo?: string };
type Group = { Icon: LucideIcon; title: string; items: Item[] };

// Brand glyphs from Simple Icons, tinted neutral (A8B3BF) to stay calm on dark.
const si = (slug: string) => `https://cdn.simpleicons.org/${slug}/A8B3BF`;

const GROUPS: Group[] = [
  { Icon: Code2, title: "Languages", items: [
    { l: "Java", logo: si("openjdk") }, { l: "TypeScript", logo: si("typescript") }, { l: "JavaScript", logo: si("javascript") } ] },
  { Icon: Server, title: "Backend", items: [
    { l: "Spring Boot", logo: si("springboot") }, { l: "REST API" }, { l: "JWT", logo: si("jsonwebtokens") }, { l: "Kafka", logo: si("apachekafka") } ] },
  { Icon: Database, title: "Database & Cache", items: [
    { l: "PostgreSQL", logo: si("postgresql") }, { l: "SQL" }, { l: "Redis", logo: si("redis") } ] },
  { Icon: TestTube, title: "Testing & Logging", items: [
    { l: "JUnit", logo: si("junit5") }, { l: "Mockito" }, { l: "SLF4J" }, { l: "Logback" } ] },
  { Icon: Layers, title: "Frontend", items: [
    { l: "Next.js", logo: si("nextdotjs") }, { l: "React.js", logo: si("react") } ] },
  { Icon: Cloud, title: "Cloud & Infra", items: [
    { l: "AWS EC2", logo: si("amazonec2") }, { l: "Cloudflare Workers", logo: si("cloudflareworkers") }, { l: "R2", logo: si("cloudflare") }, { l: "Docker", logo: si("docker") }, { l: "Linux", logo: si("linux") }, { l: "Git", logo: si("git") } ] },
  { Icon: Cpu, title: "Concepts", items: [
    { l: "OOP" }, { l: "DSA" }, { l: "Distributed Systems" }, { l: "Microservices" }, { l: "Concurrency" } ] },
];

export default function Skills() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">// 03 — Stack</span>
            <h2>Technologies I work with</h2>
            <p>A backend-first toolkit, with enough frontend to ship end-to-end.</p>
          </Reveal>
        </div>
        <div className="skill-groups">
          {GROUPS.map((g, gi) => (
            <Reveal className="skill-card" key={g.title} delay={(gi % 2) * 80}>
              <div className="skill-card-head">
                <span className="si">
                  <g.Icon size={18} />
                </span>
                <h3>{g.title}</h3>
              </div>
              <div className="skill-badges">
                {g.items.map((it) => (
                  <span className="badge" key={it.l}>
                    {it.logo && <img src={it.logo} alt="" loading="lazy" />}
                    {it.l}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
