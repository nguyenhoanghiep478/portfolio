import type { ReactNode } from "react";
import Reveal from "./reveal";

type Role = { when: string; role: string; org: string; bullets: ReactNode[] };

const ROLES: Role[] = [
  {
    when: "2025 — PRESENT",
    role: "Java Backend Developer",
    org: "Boostech · Startup",
    bullets: [
      <>
        <strong>Designed RESTful APIs</strong> and backend logic with Spring Boot —
        dependency injection, layered architecture.
      </>,
      <>
        Built <strong>role-based access control</strong> &amp; permission modules.
      </>,
      <>
        Optimized <strong>PostgreSQL</strong> queries, indexing and transactions.
      </>,
      <>
        Applied <strong>multi-threaded / concurrent</strong> processing for bulk operations.
      </>,
      <>
        Structured logging with <strong>SLF4J / Logback</strong> for production
        troubleshooting.
      </>,
      <>
        Unit testing with <strong>JUnit &amp; Mockito</strong>.
      </>,
      <>
        Integrated <strong>Cloudflare R2 / pCloud</strong> storage; deployed on{" "}
        <strong>AWS EC2</strong> &amp; Cloudflare Workers.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section className="section section--sunken" id="experience">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">// 02 — Experience</span>
            <h2>Where I&apos;ve shipped</h2>
            <p>Building production backend systems in a fast-moving startup.</p>
          </Reveal>
        </div>
        <Reveal className="timeline">
          {ROLES.map((r) => (
            <div className="tl-item" key={r.role}>
              <div className="tl-when">{r.when}</div>
              <div className="tl-role">{r.role}</div>
              <div className="tl-org">{r.org}</div>
              <ul className="tl-list">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
