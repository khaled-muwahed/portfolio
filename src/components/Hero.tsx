import { GITHUB, LINKEDIN } from "./ContactInfo";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <h1>Khaled Muwahed</h1>

      <h2>Software Engineer</h2>

      <p className="hero-tech">React · TypeScript · Node.js · AWS</p>

      <p>
        Software engineer with professional experience building modern web
        applications. I'm actively coding again and refreshing my skills by
        building practical projects with React, TypeScript and Node.js.
      </p>

      <div className="hero-links">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          CV
        </a>

        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>

        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a className="primary-link" href="#contact">
          Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;
