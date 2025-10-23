import { Link } from "react-router-dom";
import HomeButton from "../assets/icons8-home-button.svg?react";
import ProjectButton from "../assets/icons8-projects-button.svg?react";
import ToolsButton from "../assets/icons8-tools-button.svg?react";

function Navigation() {
  return (
    <nav className="bg-neutral2 mx-auto flex h-15 w-62 max-w-sm items-center justify-center gap-8 rounded-2xl p-3 md:mr-5 md:h-8 md:w-40 md:rounded-lg lg:mt-15 lg:mr-20 lg:h-10 lg:w-45">
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
