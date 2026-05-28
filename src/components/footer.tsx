import { Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-meta">© {year} Nguyen Hoang Hiep — built with Next.js</span>
        <div className="footer-social">
          <a
            href="https://github.com/nguyenhoanghiep478"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
          <a href="mailto:nguyenhoanghiep478@gmail.com" aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
