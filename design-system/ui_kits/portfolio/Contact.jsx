// Contact.jsx + Footer.jsx
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact-inner">
          <Eyebrow>// 05 — Contact</Eyebrow>
          <h2>Let's build something solid.</h2>
          <p>
            I'm open to backend roles and interesting distributed-systems problems.
            The fastest way to reach me is email.
          </p>
          <div className="contact-actions">
            <Button variant="primary" icon="mail" href="mailto:nguyenhoanghiep478@gmail.com">nguyenhoanghiep478@gmail.com</Button>
            <Button variant="secondary" icon="github" href="https://github.com/nguyenhoanghiep478" target="_blank" rel="noreferrer">GitHub</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-meta">© {year} Nguyen Hoang Hiep — built with Next.js</span>
        <div className="footer-social">
          <a href="https://github.com/nguyenhoanghiep478" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.github size={19} /></a>
          <a href="mailto:nguyenhoanghiep478@gmail.com" aria-label="Email"><Icon.mail size={19} /></a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Contact, Footer });
