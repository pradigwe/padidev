// import { projectList } from '../projects/Projects';
import type { Tech } from "./Technologies";

function TechModal({ technology }: { technology: Tech | null }) {
  if (!technology) return null;
  return (
    <div>
      <p> Opened modal: {technology.name}</p>
      <p> Opened modal category: {technology.category}</p>
    </div>
  );
}
export default TechModal;
