import type { Tech } from "./Technologies";
import MinimizeIcon from "../../assets/icons8-minimize-svgrepo-com.svg?react";
import { useEffect } from "react";
import type { Project } from "../projects/Projects";

interface TechModalProps {
  isModalOpen: boolean;
  technology: Tech | null;
  onClose: () => void;
  techProjects: Project[];
}

function TechModal({
  isModalOpen,
  technology,
  onClose,
  techProjects,
}: TechModalProps) {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);
  if (!technology || !isModalOpen || techProjects.length == 0) return null;
  return (
    <>
      <div className="fixed inset-0 z-0 h-dvh w-dvw bg-black/25"></div>
      <div className="bg-primary border-neutral2 fixed inset-0 z-10 m-auto flex h-fit w-4/5 flex-col justify-stretch gap-5 border-4 p-10 pt-18 text-center md:max-w-lg">
        <h3 className="pb-4">{technology.name}</h3>
        <h4>
          <span className="font-bold">Category: </span>
          {technology.category}
        </h4>
        <ul className="flex grow flex-col gap-5">
          {techProjects.map((project) => (
            <li
              key={project.id}
              className="bg-neutral1 text-accent p-3 font-bold"
            >
              {project.name}
            </li>
          ))}
        </ul>
        <MinimizeIcon
          onClick={onClose}
          className="absolute top-0 right-0 h-16 w-16"
        />
      </div>
    </>
  );
}

export default TechModal;
