import { projectList } from "./ProjectList";
import OpenLink from "../../assets/icons8-open.svg?react";
import GithubLink from "../../assets/icons8-github.svg?react";

export interface Project {
  readonly id: number;
  name: string;
  description: string;
  screenshot?: string;
  techStack: string[];
  github: string;
  liveLink?: string;
}

function Projects() {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <h2 className="mb-10 w-4/5">Projects</h2>
      <ul className="flex w-full flex-col items-center gap-15 md:grid md:grid-cols-2 md:">
        {projectList.map((project) => (
          <li key={project.id} className="project-card">
            {project.screenshot && (
              <img
                className="project-image"
                width={240}
                src={
                  new URL(
                    `../../assets/project-images/${project.screenshot}`,
                    import.meta.url,
                  ).href
                }
                alt={`Image of my ${project.name} project`}
              />
            )}
            <div className="flex flex-col gap-5">
              <h3 className="font-barlow-semi font-bold">{project.name}</h3>
              <p>{project.description}</p>
              <ul className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <li className="bg-neutral2 font-bar h-fit rounded-lg px-2 py-1 text-base whitespace-nowrap text-white">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pr-5">
                {project.liveLink && (
                  <a
                    className="bg-accent font-inter flex w-fit gap-3 overflow-hidden rounded-lg px-4 py-2 font-bold text-white"
                    target="_blank"
                    href={`${project.liveLink}`}
                  >
                    Visit Site
                    <OpenLink className="m-auto h-5 w-5 fill-white"></OpenLink>
                  </a>
                )}
                {project.id == 4 && (
                  <p className="rounded-sm bg-red-900 px-3 py-1 font-bold text-white">
                    Current Website!
                  </p>
                )}
                <a href={project.github} target="_blank">
                  <GithubLink className="h-10 w-10"></GithubLink>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
