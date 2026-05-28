import { Mail, Github } from "lucide-react";
import Reveal from "./reveal";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact-inner">
          <span className="eyebrow">// 05 — Contact</span>
          <h2>Let&apos;s build something solid.</h2>
          <p>
            I&apos;m open to backend roles and interesting distributed-systems problems.
            The fastest way to reach me is email.
          </p>
          <div className="contact-actions">
            <a className="btn btn--primary" href="mailto:nguyenhoanghiep478@gmail.com">
              <Mail size={17} /> nguyenhoanghiep478@gmail.com
            </a>
            <a
              className="btn btn--secondary"
              href="https://github.com/nguyenhoanghiep478"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
