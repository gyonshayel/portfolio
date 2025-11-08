import { Fragment } from "react";
import { projects } from "../../data/projects";
import "./work.css";

export function Projects() {
  return (
    <section id="work" className="work container section">
      <h2 className="work__title">Projects</h2>
      <div className="work__container">
        {projects.map((project, index) => (
          <Fragment key={project.website}>
            <h3 className="work__project-title">{project.name}</h3>
            <div className={`work__img-wrapper work__image${index + 1}`}>
              <img loading="lazy" src={project.thumbnail} alt={project.name} />
            </div>
            <div className={`work__project work__content${index + 1}`}>
              <h3 className="work__project-subtitle">{project.name}</h3>
              <p className="work__project-description">{project.description}</p>
              <a className="btn work__project-btn" href="#">
                Learn More
              </a>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
