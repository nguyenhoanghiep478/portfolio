// Nav.jsx — sticky top navigation with scroll state + mobile menu.
const { useState, useEffect } = React;

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">hiep<b>.</b>dev</a>
        <nav className="nav-links">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          {open ? <Icon.x size={22} /> : <Icon.menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

window.Nav = Nav;
