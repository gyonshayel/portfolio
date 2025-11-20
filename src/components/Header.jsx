import { useState, useEffect } from "react";
import { MobileNav } from "../components/MobileNav";
import "./header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMobileNav = () => {
    setMounted(true);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <header>
        <nav className="header__content">
          {/* md:container */}
          <div className="header-logo">
            <a
              className={`header-logo__link ${isOpen ? "logo-hidden" : ""}`}
              href="https://portfolio-website-ten-blond-63.vercel.app/"
            >
              gyonshayel
            </a>
          </div>
          <ul className="header__menu">
            <li>
              <a className="header__link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header__link" href="#work">
                Work
              </a>
            </li>
            <li>
              <a className="header__link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleMobileNav}
            aria-label="mobile navigation button"
            className={`header__bars ${isOpen ? "active" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <MobileNav
        mounted={mounted}
        isOpen={isOpen}
        toggleMobileNav={toggleMobileNav}
      />
    </>
  );
}
