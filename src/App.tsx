import About from './components/About.tsx'
import Projects from './components/Projects.tsx';
import Technologies from './components/Technologies.tsx';
import Navigation from './components/Navigation.tsx';
// import Contact from './components/Contact.tsx';

function App() {
    return (
        <>
            <Navigation />
            <About />
            <Technologies />
            <Projects />
            {/* <Contact /> */}
        </>
    )
}

export default App;