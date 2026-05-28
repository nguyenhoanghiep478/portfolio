// Hero.jsx — headline, role with typed terminal caret, value prop, CTAs.
const { useState, useEffect } = React;

const ROLES = ["Java Backend Developer", "Spring Boot Engineer", "Distributed Systems Builder"];

function useTypewriter(words, { type = 70, pause = 1600, del = 36 } = {}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]); return;
    }
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && text === "") { setDeleting(false); setI((v) => v + 1); }
    else t = setTimeout(() => {
      setText(word.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, deleting ? del : type);
    return () => clearTimeout(t);
  }, [text, deleting, i]);
  return text;
}

function Hero() {
  const role = useTypewriter(ROLES);
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      <div className="container hero-content">
        <Reveal>
          <span className="hero-status"><span className="dot"></span>Open to backend roles · HCMC, Vietnam</span>
        </Reveal>
        <Reveal delay={80}>
          <h1>Nguyen Hoang Hiep<span className="accent">.</span></h1>
        </Reveal>
        <Reveal delay={160}>
          <div className="hero-role"><span className="accent">$</span> {role}<span className="caret">▋</span></div>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero-lead">
            I build the parts users never see but always feel — APIs, access control and
            data layers engineered for performance, scale and calm production nights.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="hero-actions">
            <Button variant="primary" icon="download" href="#contact">Download CV</Button>
            <Button variant="secondary" icon="mail" href="#contact">Get in touch</Button>
            <Button variant="ghost" iconRight="arrowUpRight" href="https://github.com/nguyenhoanghiep478" target="_blank" rel="noreferrer">GitHub</Button>
          </div>
        </Reveal>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll"><Icon.chevronDown size={26} /></a>
    </section>
  );
}

window.Hero = Hero;
