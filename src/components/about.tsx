import { Briefcase, MapPin, Languages, Code2 } from "lucide-react";
import Reveal from "./reveal";

const FACTS = [
  { Icon: Briefcase, label: "Role", value: "Java Backend Developer @ Boostech" },
  { Icon: MapPin, label: "Based in", value: "Ho Chi Minh City, Vietnam" },
  { Icon: Languages, label: "English", value: "TOEIC R/L 750" },
  { Icon: Code2, label: "Practice", value: "DSA on LeetCode, regularly" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="portrait-wrap">
          {/* Swap /image-about.jpg for a professional headshot when ready */}
          <img className="portrait" src="/image-about.jpg?v=2" alt="Nguyen Hoang Hiep" />
          <span className="portrait-tag">
            <MapPin size={13} /> Ho Chi Minh City
          </span>
        </Reveal>

        <div className="about-body">
          <Reveal>
            <span className="eyebrow">// 01 — About</span>
          </Reveal>
          <Reveal delay={60}>
            <p style={{ marginTop: 14 }}>
              I&apos;m a <strong>Java backend developer</strong> who likes the unglamorous,
              load-bearing parts of software: clean APIs, sensible architecture, and data
              layers that hold up under pressure.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              At <strong>Boostech</strong> I design RESTful services with Spring Boot, build{" "}
              <strong>role-based access control</strong>, tune PostgreSQL, and lean on
              multi-threading for bulk work — with structured logging and tests so production
              nights stay calm. I&apos;m drawn to <strong>scalable, distributed systems</strong>{" "}
              and comfortable moving fast in a startup.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="facts">
              {FACTS.map(({ Icon, label, value }) => (
                <div className="fact" key={label}>
                  <span className="fi">
                    <Icon size={20} />
                  </span>
                  <div>
                    <div className="fl">{label}</div>
                    <div className="fv">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
