import "./work.css";

export function Projects() {
  return (
    <section id="work" className="work container section">
      <h2 className="work__title">Projects</h2>
      <div className="work__container">
        {/* Project 1  */}
        <h3 className="work__project-title">Personal Portfolio Website</h3>
        <div className="work__img-wrapper work__image1">
          <img
            loading="lazy"
            src="/portfolio.png"
            alt="Personal Portfolio website."
          />
        </div>
        <div className="work__project work__content1">
          <h3 className="work__project-subtitle">Personal Portfolio Website</h3>
          <p className="work__project-description">
            A responsive personal portfolio built with HTML and CSS to showcase
            my skills, projects, and experience. The website includes a clean
            navigation bar, an “About Me” section, a projects gallery, and a
            contact area. It is fully responsive across devices, ensuring a
            smooth user experience on desktops, tablets, and mobile phones. This
            project helped me practice front-end fundamentals like semantic
            HTML, CSS Flexbox, Grid, and responsive design techniques.
          </p>
          <a className="btn work__project-btn" href="#">
            Learn More
          </a>
        </div>

        {/* Project 2 */}
        <h3 className="work__project-title">Zeno Bookkeeping</h3>
        <div className="work__img-wrapper work__image2">
          <img
            loading="lazy"
            src="/landing_page.png"
            alt="Landing page for Zeno Bookkeeping."
          />
        </div>
        <div className="work__project work__content2">
          <h3 className="work__project-subtitle">Zeno Bookkeeping</h3>
          <p className="work__project-description">
            A modern landing page designed for a bookkeeping service called Zeno
            Bookkeeping. Built with HTML and CSS, the page highlights the
            company’s services, benefits, and a clear call-to-action for
            potential clients. The design focuses on simplicity, readability,
            and trust, with sections for features, testimonials, and contact
            information. This project helped me practice creating structured
            layouts, styling with Flexbox and Grid, and designing a professional
            business-focused web page.
          </p>
          <a className="btn work__project-btn" href="#">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
