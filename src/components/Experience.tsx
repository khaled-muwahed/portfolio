import { ExperiencesInfo } from "./ExperienceInfo";

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-label">Experience</p>
        </div>

        <div className="experience-list">
          {ExperiencesInfo.map((experience) => (
            <article className="experience-item" key={experience.company}>
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                </div>

                <span className="experience-period">{experience.period}</span>
              </div>

              <p className="experience-description">{experience.description}</p>

              <p className="experience-tech">{experience.technologies}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
