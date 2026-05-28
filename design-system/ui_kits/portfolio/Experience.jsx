// Experience.jsx — vertical timeline.
function Experience() {
  const roles = [
    {
      when: "2025 — PRESENT",
      role: "Java Backend Developer",
      org: "Boostech · Startup",
      bullets: [
        <span><strong>Designed RESTful APIs</strong> and backend logic with Spring Boot — dependency injection, layered architecture.</span>,
        <span>Built <strong>role-based access control</strong> &amp; permission modules.</span>,
        <span>Optimized <strong>PostgreSQL</strong> queries, indexing and transactions.</span>,
        <span>Applied <strong>multi-threaded / concurrent</strong> processing for bulk operations.</span>,
        <span>Structured logging with <strong>SLF4J / Logback</strong> for production troubleshooting.</span>,
        <span>Unit testing with <strong>JUnit &amp; Mockito</strong>.</span>,
        <span>Integrated <strong>Cloudflare R2 / pCloud</strong> storage; deployed on <strong>AWS EC2</strong> &amp; Cloudflare Workers.</span>,
      ],
    },
  ];
  return (
    <section className="section section--sunken" id="experience">
      <div className="container">
        <SectionHead
          eyebrow="// 02 — Experience"
          title="Where I've shipped"
          lead="Building production backend systems in a fast-moving startup."
        />
        <Reveal className="timeline">
          {roles.map((r) => (
            <div className="tl-item" key={r.role}>
              <div className="tl-when">{r.when}</div>
              <div className="tl-role">{r.role}</div>
              <div className="tl-org">{r.org}</div>
              <ul className="tl-list">
                {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

window.Experience = Experience;
