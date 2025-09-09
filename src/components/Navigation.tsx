import { Link } from 'react-router-dom'
import HomeButton from '../assets/project-images/projects-button.svg?react'
import ProjectButton from '../assets/project-images/projects-button.svg?react'
import ToolsButton from '../assets/project-images/tools-button.svg?react'


function Navigation() {
    return (
        <nav>
            <Link to="/"><HomeButton /></Link>
            <Link to="/projects"><ProjectButton /></Link>
            <Link to="/technologies"><ToolsButton /></Link>
        </nav>
    );
}

export default Navigation;