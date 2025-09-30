import { useState } from "react";
import ProjectModal from "./ProjectModal";
import projectData from "../../data/project.json";

export interface Project {
  readonly id: number;
  name: string;
  description: string;
  screenshot?: string;
  techStack: string[];
  github: string;
  liveLink?: string;
}

export const projectList = projectData as Project[];

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setIsModalOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <h3>Projects</h3>
      {projectList.map((project) => (
        <li
          key={project.id}
          className="project-card"
          onClick={() => {
            openModal(project);
          }}
        >
          {project.name}
          {project.screenshot && (
            <img
              className="project-image"
              width={240}
              src={
                new URL(
                  `../../assets/project-images/${project.screenshot}`,
                  import.meta.url
                ).href
              }
              alt={`Image of my ${project.name} project`}
            />
          )}
          <span>{project.techStack.map((tech) => tech + ", ")}</span>
        </li>
      ))}
      {
        <ProjectModal
          isModalOpen={isModalOpen}
          project={selectedProject}
          onClose={closeModal}
        />
      }
    </section>
  );
}

export default Projects;
