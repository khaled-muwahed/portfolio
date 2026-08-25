import type { ProjectData } from "./ProjectsInfo";

type ProjectCardProps = {
  project: ProjectData;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      {project.image ? (
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} screenshot`}
        />
      ) : (
        <div className="project-image project-image-placeholder">
          <span>{project.title}</span>
        </div>
      )}

      <div className="project-content">
        <div className="project-card-header">
          <h3>{project.title}</h3>

          {project.status && (
            <span className="project-status">{project.status}</span>
          )}
        </div>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
