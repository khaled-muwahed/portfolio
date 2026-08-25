import ProjectCard from "./ProjectCard";
import { ProjectsInfo } from "./ProjectsInfo";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-label">Selected projects</p>
        </div>

        <div className="project-grid">
          {ProjectsInfo.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
