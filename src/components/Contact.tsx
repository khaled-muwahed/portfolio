import { EMAIL, LINKEDIN } from "./ContactInfo";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-label">Contact</p>
          <h2>Get in touch</h2>
        </div>

        <p className="contact-intro">
          I'm currently open to software engineering opportunities and
          interesting projects. If you'd like to discuss my experience or have
          an opportunity that could be a good fit, I'd be happy to hear from
          you.
        </p>

        <div className="contact-links">
          <a className="contact-primary" href={`mailto:${EMAIL}`}>
            Email me
          </a>

          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
