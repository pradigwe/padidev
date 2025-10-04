import techStack from "../../data/techStack.json";
import { useState } from "react";
import TechModal from "./TechModal";

export interface Tech {
  id: number;
  name: string;
  icon: string;
  category: "frameworks" | "technologies" | "tools";
  projectDropdowns: boolean;
}
// affirms that the array matches the interface
const techs = techStack as Tech[];

function Technologies() {
  const [currentCategory, setCurrentCategory] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);
  const openModal = (technology: Tech) => {
    setIsModalOpen(true);
    setSelectedTech(technology);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex h-dvh flex-col items-center justify-center">
      <h2 className="mb-10 w-4/5">Technologies & Tools</h2>
      <ul className="flex gap-3 text-lg">
        <li
          className="tech-category all selected-category"
          onClick={() => {
            setCurrentCategory("all");
          }}
        >
          All
        </li>
        <li
          className="tech-category frameworks"
          onClick={() => {
            setCurrentCategory("frameworks");
          }}
        >
          Frameworks
        </li>
        <li
          className="tech-category technologies"
          onClick={() => {
            setCurrentCategory("technologies");
          }}
        >
          Technologies
        </li>
        <li
          className="tech-category tools"
          onClick={() => {
            setCurrentCategory("tools");
          }}
        >
          Tools
        </li>
      </ul>
      <div className="divider"></div>
      <ul className="mt-5 flex max-w-xl flex-wrap justify-center gap-x-2 gap-y-3">
        {techs
          .filter(
            (tech) =>
              currentCategory === "all" || tech.category === currentCategory,
          )
          .sort((a, b) => a.category.localeCompare(b.category))
          .map((tech) => (
            <div className={`tech-card`}>
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
              <li
                key={tech.id}
                onClick={() => {
                  openModal(tech);
                }}
              >
                {tech.name}
              </li>
            </div>
          ))}
      </ul>
      {
        <TechModal
          isModalOpen={isModalOpen}
          technology={selectedTech}
          onClose={closeModal}
        />
      }
    </section>
  );
}

export default Technologies;
