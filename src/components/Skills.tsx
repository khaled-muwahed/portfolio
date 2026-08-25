import { SkillsInfo } from "./SkillsInfo";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2>Technologies I work with</h2>
        </div>

        <div className="skills-grid">
          {SkillsInfo.map((group) => (
            <div className="skills-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skills-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
