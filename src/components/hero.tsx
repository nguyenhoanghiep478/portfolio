"use client";

import { useEffect, useState } from "react";
import { Download, Mail, ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "./reveal";

const ROLES = [
  "Java Backend Developer",
  "Spring Boot Engineer",
  "Distributed Systems Builder",
];

function useTypewriter(words: string[], type = 70, pause = 1600, del = 36) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? del : type
      );
    }
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, i]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden>
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="container hero-content">
        <Reveal>
          <span className="hero-status">
            <span className="dot" />
            Open to backend roles · HCMC, Vietnam
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1>
            Nguyen Hoang Hiep<span className="accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="hero-role">
            <span className="prompt">$</span> {role}
            <span className="caret">▋</span>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="hero-lead">
            I build the parts users never see but always feel — APIs, access control and
            data layers engineered for performance, scale and calm production nights.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="hero-actions">
            <a className="btn btn--primary" href="/resume.pdf" download>
              <Download size={17} /> Download CV
            </a>
            <a className="btn btn--secondary" href="#contact">
              <Mail size={17} /> Get in touch
            </a>
            <a
              className="btn btn--ghost"
              href="https://github.com/nguyenhoanghiep478"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to content">
        <ChevronDown size={26} />
      </a>
    </section>
  );
}
