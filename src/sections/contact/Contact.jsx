import "./contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact container section">
      <h2 className="contact__title">Get In Contact</h2>
      <p className="contact__description">
        I am always open to new opportunities, collaborations, and interesting
        projects. Whether you have a question, want to work together, or just
        want to say hello, feel free to reach out!
      </p>
      <a
        className="contact__btn btn"
        href="mailto:gyon.perera2002@gmail.com"
        target="_blank"
      >
        Reach Out
      </a>
    </section>
  );
}
