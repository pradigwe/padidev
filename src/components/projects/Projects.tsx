import projectData from "../../data/project.json";

export interface Project {
  readonly id: number;
  name: string;
  techStack: string[];
  github: string;
  liveLink?: string;
}

export const projectList = projectData as Project[];

function createProjects() {
  return projectList.map((project) => (
    <li key={project.id} className="project-card">
      {project.name}
      <img
        className="project-image"
        src=""
        alt={`Image of my ${project.name} project`}
      />
      <span>{project.techStack.map((tech) => tech + ", ")}</span>
    </li>
  ));
}

function Projects() {
  return (
    <section>
      <h3>Project Data</h3>
      {createProjects()}
    </section>
  );
}

export default Projects;
