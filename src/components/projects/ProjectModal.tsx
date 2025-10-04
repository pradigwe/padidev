import type { Project } from "./Projects";
import MinimizeIcon from "../../assets/icons8-minimize-svgrepo-com.svg?react";

interface ProjectModalProps {
  isModalOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ isModalOpen, project, onClose }: ProjectModalProps) {
  if (!project || !isModalOpen) return null;
  return (
    <div>
      <span>
        {project.screenshot ? (
          <img
            src={
              new URL(
                `../../assets/project-images/${project.screenshot}`,
                import.meta.url
              ).href
            }
            alt={`Screenshot of my ${project.name} project`}
          />
        ) : null}
      </span>
      <h3>{project.name}</h3>
      <p>
        Made with: <span>{project.techStack.map((tech) => tech + ", ")}</span>
      </p>
      <p>{project.description}</p>
      <div>
        <a href={project.github} target="_blank">
          GitHub
        </a>
        {project.liveLink ? (
          <a href={project.liveLink} target="_blank">
            Live Link
          </a>
        ) : null}
      </div>

      <MinimizeIcon onClick={onClose} />
    </div>
  );
}

export default ProjectModal;
