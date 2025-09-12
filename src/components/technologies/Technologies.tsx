import techStack from "../../data/techStack.json";
import { useState } from "react";
import TechModal from "./TechModal";

export interface Tech {
  id: number;
  name: string;
  // icon: string;
  category: "frameworks" | "technologies" | "tools";
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
    <section>
      <h2>Technologies & Tools</h2>
      <ul>
        <li
          className="tech-category all"
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
      <ul>
        {techs
          .filter(
            (tech) =>
              currentCategory === "all" || tech.category === currentCategory
          )
          .map((tech) => (
            <li
              key={tech.id}
              className={`tech-card ${tech.category}`}
              onClick={() => {
                openModal(tech);
              }}
            >
              {tech.name}
            </li>
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
