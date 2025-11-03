export function Header() {
  return (
    <header>
      <nav class="header__content container">
        <ul class="header__menu">
          <li>
            <a class="header__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="header__link" href="#work">
              Work
            </a>
          </li>
          <li>
            <a class="header__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div class="header-logo">
          <a
            class="header-logo__link"
            href="https://portfolio-website-ten-blond-63.vercel.app/"
          >
            Shayel Joshua
          </a>
        </div>
        <div aria-label="mobile navigation button" class="header__bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
