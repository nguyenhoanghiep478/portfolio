// Projects.jsx — selected real repositories (from the owner's GitHub).
const PROJECTS = [
  { icon: "layers", name: "microservice-books-ecommerce", href: "https://github.com/nguyenhoanghiep478/microservice-books-ecommerce",
    desc: "Book e-commerce broken into independently deployable services, communicating over events.",
    tags: ["Spring Boot", "Microservices", "Kafka"] },
  { icon: "ticket", name: "BookingTrainTicket", href: "https://github.com/nguyenhoanghiep478/BookingTrainTicket",
    desc: "Train-ticket booking system — schedules, seat selection and transactional booking flows.",
    tags: ["Spring Boot", "REST API", "PostgreSQL"] },
  { icon: "zap", name: "kafka", href: "https://github.com/nguyenhoanghiep478/kafka",
    desc: "Event-streaming experiments — producers, consumers and async pipelines with Apache Kafka.",
    tags: ["Kafka", "Concurrency", "Java"] },
];

function Projects() {
  return (
    <section className="section section--sunken" id="work">
      <div className="container">
        <SectionHead
          eyebrow="// 04 — Selected Work"
          title="Things I've built"
          lead="A few public repositories that show how I think about backend systems."
        />
        <div className="proj-grid">
          {PROJECTS.map((p, i) => {
            const Ic = Icon[p.icon];
            return (
              <Reveal key={p.name} delay={i * 70}>
                <a className="proj" href={p.href} target="_blank" rel="noreferrer">
                  <div className="proj-top">
                    <span className="proj-icon"><Ic size={20} /></span>
                    <span className="proj-ext"><Icon.arrowUpRight size={18} /></span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map((t) => <span className="proj-tag" key={t}>{t}</span>)}
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
