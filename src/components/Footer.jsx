import "./footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer__content container section">
        <ul className="footer__nav">
          <li>
            <a href="#hero" className="footer__nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer__nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="footer__nav-link">
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__connect">
          <h3 className="footer__connect-title">Connect</h3>
          <a
            href="https://www.linkedin.com/in/gyon-shayel-234721242/"
            target="_blank"
            className="footer__connect-link"
          >
            <img
              loading="lazy"
              src="/LI-In-Bug.png"
              alt="LinkedIn profile"
              className="footer__connect-img"
            />
          </a>
          <a
            href="https://github.com/gyonshayel"
            target="_blank"
            className="footer__connect-link"
          >
            <img
              loading="lazy"
              src="/github-color.svg"
              alt="Github repo"
              className="footer__connect-img"
            />
          </a>
          <a
            href="https://x.com/shayeljoshua"
            target="_blank"
            className="footer__connect-link"
          >
            <img
              loading="lazy"
              src="/x-color.svg"
              alt="X profile"
              className="footer__connect-img"
            />
          </a>
        </div>
        <p className="footer__note">
          &copy; Shayel Joshua 2025 | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
