import "./mobile-nav.css";

export function MobileNav({ mounted, isOpen, toggleMobileNav }) {
  return (
    <div
      className={`mobile-nav ${
        !mounted ? "" : isOpen ? "active" : "not-active"
      }`}
    >
      <nav>
        <ul className="mobile-nav__menu">
          <li>
            <a
              onClick={toggleMobileNav}
              className="mobile-nav__link"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={toggleMobileNav}
              className="mobile-nav__link"
              href="#work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              onClick={toggleMobileNav}
              className="mobile-nav__link"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
