// primitives.jsx — shared building blocks + scroll-reveal hook.
const { useEffect, useRef, useState } = React;

// Reveal-on-scroll wrapper (scroll/rAF based — robust in sandboxed iframes
// where IntersectionObserver can fail to fire).
function Reveal({ children, as: Tag = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) { setShown(true); cleanup(); }
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    return cleanup;
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}
         style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

const Eyebrow = ({ children }) => <span className="eyebrow">{children}</span>;

function SectionHead({ eyebrow, title, lead }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </Reveal>
  );
}

function Button({ variant = "primary", icon, iconRight, children, ...rest }) {
  const Ic = icon && Icon[icon];
  const IcR = iconRight && Icon[iconRight];
  return (
    <a className={`btn btn--${variant}`} {...rest}>
      {Ic && <Ic size={17} />}
      {children}
      {IcR && <IcR size={17} />}
    </a>
  );
}

const Badge = ({ logo, children }) => (
  <span className="badge">
    {logo && <img src={`https://cdn.simpleicons.org/${logo}`} alt="" loading="lazy" />}
    {children}
  </span>
);

Object.assign(window, { Reveal, Eyebrow, SectionHead, Button, Badge });
