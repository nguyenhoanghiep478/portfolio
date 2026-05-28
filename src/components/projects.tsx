import { Layers, Ticket, Zap, ArrowUpRight, type LucideIcon } from "lucide-react";
import Reveal from "./reveal";

type Project = { Icon: LucideIcon; name: string; href: string; desc: string; tags: string[] };

const PROJECTS: Project[] = [
  {
    Icon: Layers,
    name: "microservice-books-ecommerce",
    href: "https://github.com/nguyenhoanghiep478/microservice-books-ecommerce",
    desc: "Book e-commerce broken into independently deployable services, communicating over events.",
    tags: ["Spring Boot", "Microservices", "Kafka"],
  },
  {
    Icon: Ticket,
    name: "BookingTrainTicket",
    href: "https://github.com/nguyenhoanghiep478/BookingTrainTicket",
    desc: "Train-ticket booking system — schedules, seat selection and transactional booking flows.",
    tags: ["Spring Boot", "REST API", "PostgreSQL"],
  },
  {
    Icon: Zap,
    name: "kafka",
    href: "https://github.com/nguyenhoanghiep478/kafka",
    desc: "Event-streaming experiments — producers, consumers and async pipelines with Apache Kafka.",
    tags: ["Kafka", "Concurrency", "Java"],
  },
];

export default function Projects() {
  return (
    <section className="section section--sunken" id="work">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">// 04 — Selected Work</span>
            <h2>Things I&apos;ve built</h2>
            <p>A few public repositories that show how I think about backend systems.</p>
          </Reveal>
        </div>
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <a className="proj" href={p.href} target="_blank" rel="noreferrer">
                <div className="proj-top">
                  <span className="proj-icon">
                    <p.Icon size={20} />
                  </span>
                  <span className="proj-ext">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span className="proj-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
