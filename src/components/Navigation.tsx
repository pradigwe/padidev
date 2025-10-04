import { Link } from "react-router-dom";
import HomeButton from "../assets/home-button.svg?react";
import ProjectButton from "../assets/projects-button.svg?react";
import ToolsButton from "../assets/tools-button.svg?react";

function Navigation() {
  return (
    <nav className="flex bg-neutral2 justify-center gap-8 items-center mx-auto rounded-2xl p-3 max-w-sm w-62 h-15 ">
      <Link to="/">
        <HomeButton className="nav-icon" />
      </Link>
      <Link to="/projects">
        <ProjectButton className="nav-icon" />
      </Link>
      <Link to="/technologies">
        <ToolsButton className="nav-icon" />
      </Link>
    </nav>
  );
}

export default Navigation;
