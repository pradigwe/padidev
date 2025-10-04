import { projectList } from "../projects/ProjectList";
import type { Tech } from "./Technologies";
import MinimizeIcon from "../../assets/icons8-minimize-svgrepo-com.svg?react";

interface TechModalProps {
  isModalOpen: boolean;
  technology: Tech | null;
  onClose: () => void;
}

function TechModal({ isModalOpen, technology, onClose }: TechModalProps) {
  if (!technology || !isModalOpen || !technology.projectDropdowns) return null;
  return (
    <div>
      <h3>{technology.name}</h3>
      <h4>
        <span className="strong">Category: </span>
        {technology.category}
      </h4>
      <ul>
        {projectList
          .filter((project) =>
            project.techStack.some((tech) => tech === technology.name),
          )
          .map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
      </ul>
      <MinimizeIcon onClick={onClose} />
    </div>
  );
}

export default TechModal;
