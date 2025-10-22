import techStack from "../../data/techStack.json";
import { useState } from "react";
import TechModal from "./TechModal";
import { projectList } from "../projects/ProjectList";
import type { Project } from "../projects/Projects";
export interface Tech {
  id: number;
  name: string;
  icon: string;
  category: "frameworks" | "technologies" | "tools";
}
// affirms that the array matches the interface
const techs = techStack as Tech[];

function Technologies() {
  const [currentCategoryId, setCurrentCategoryId] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);
  const [techProjects, setTechProjects] = useState<Project[]>([]);

  const openModal = (technology: Tech) => {
    setIsModalOpen(true);
    setSelectedTech(technology);
    setTechProjects(
      projectList.filter((project) =>
        project.techStack.includes(technology.name),
      ),
    );
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTechProjects([]);
  };

  const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Frameworks" },
    { id: 2, name: "Technologies" },
    { id: 3, name: "Tools" },
  ];

  return (
    <section className="flex h-dvh flex-col items-center justify-center md:h-fit md:my-48">
      <h2 className="mb-10 w-4/5">Technologies & Tools</h2>
      <div className="basis-1/2">
        <ul className="flex items-center justify-center gap-5 text-lg md:mb-2">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`${currentCategoryId == category.id ? "selected-category" : ""} `}
              onClick={() => {
                setCurrentCategoryId(category.id);
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <div className="h-0.25 w-full bg-black"></div>
        <ul className="mt-5 flex max-w-xl flex-wrap justify-center gap-x-2 gap-y-3">
          {techs
            .filter(
              (tech) =>
                categories[currentCategoryId].name.toLowerCase() === "all" ||
                tech.category ===
                  categories[currentCategoryId].name.toLowerCase(),
            )
            .sort((a, b) => a.category.localeCompare(b.category))
            .map((tech) => (
              <div
                key={tech.id}
                className={`tech-card`}
                onClick={() => {
                  openModal(tech);
                }}
              >
                <img
                  className="w-7"
                  src={
                    new URL(
                      `../../assets/tech-images/${tech.icon}?react`,
                      import.meta.url,
                    ).href
                  }
                  alt={`${tech.name} icon`}
                />
                <li>{tech.name}</li>
              </div>
            ))}
        </ul>
      </div>

      {
        <TechModal
          isModalOpen={isModalOpen}
          technology={selectedTech}
          onClose={closeModal}
          techProjects={techProjects}
        />
      }
    </section>
  );
}

export default Technologies;
