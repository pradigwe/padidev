import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About.tsx";
import Projects from "./components/projects/Projects.tsx";
import Technologies from "./components/technologies/Technologies.tsx";
import Navigation from "./components/Navigation.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Technologies />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

{
  /* <Navigation />
            
            <Technologies />
            <Projects />
            <Contact /> */
}
export default App;
