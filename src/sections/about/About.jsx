import "./about.css";

export function About() {
  return (
    <section id="about" className="about container section">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__description">
          Hi, I am Shayel Joshua, a software engineering student currently
          completing my Higher National Diploma in Software Engineering. While
          my academic studies mainly focus on building a strong foundation in
          programming, databases, and software development principles, I do self
          studies on web development to continue grow my web developing skills.
        </p>
        <p className="about__description">
          I enjoy creating clean, user-friendly web applications and
          experimenting with modern technologies. My portfolio reflects both my
          academic projects and personal learning, showcasing my passion for
          design, coding, and problem-solving. Outside of coding, I am
          constantly learning and exploring new ideas to improve my skills and
          stay up to date with the latest trends in web development and software
          development.
        </p>
      </div>
      <div className="about__img-wrapper">
        <img
          loading="lazy"
          className="about__img"
          src="/about.JPG"
          alt="Portfolio picture."
        />
      </div>
      <div className="about__technologies">
        <h3 className="about__technologies-title">Technologies</h3>
        <ul className="about__technologies-content">
          <li>
            <figure>
              <img loading="lazy" src="/html5-color.svg" alt="HTML logo" />
              <figcaption>HTML</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img loading="lazy" src="/css-color.svg" alt="CSS logo" />
              <figcaption>CSS</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                loading="lazy"
                src="/javascript-color.svg"
                alt="JavaScript logo"
              />
              <figcaption>JavaScript</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img loading="lazy" src="/react-color.svg" alt="React logo" />
              <figcaption>React</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                loading="lazy"
                src="/tailwindcss-color.svg"
                alt="Tailwind CSS logo"
              />
              <figcaption>Tailwind CSS</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img loading="lazy" src="/git-color.svg" alt="Git logo" />
              <figcaption>Git</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
