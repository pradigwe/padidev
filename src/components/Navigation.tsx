import { Link } from "react-router-dom";
import HomeButton from "../assets/home-button.svg?react";
import ProjectButton from "../assets/projects-button.svg?react";
import ToolsButton from "../assets/tools-button.svg?react";

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <HomeButton />
      </Link>
      <Link to="/projects">
        <ProjectButton />
      </Link>
      <Link to="/technologies">
        <ToolsButton />
      </Link>
    </nav>
  );
}

export default Navigation;
