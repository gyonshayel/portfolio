import "./hero.css";

export function Hero() {
  return (
    <section id="hero" className="hero container">
      <img className="hero__img" src="/hero.JPG" alt="Profile picture." />
      <h2 className="hero__subtitle">Hello, I am Shayel Joshua</h2>
      <h1 className="hero__title">
        Front-End <br />
        Web Developer
      </h1>
      <p className="hero__description">
        A passionate front-end web developer with a knack for creating visually
        appealing and user-friendly websites.
      </p>
      <div className="hero__btn">
        <a className="btn" href="#contact">
          Contact Me
        </a>
        <a
          className="btn"
          href="https://drive.google.com/file/d/1n9nzqH89n9iXBExZ3yMDQ2vT_0UjrRZv/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
