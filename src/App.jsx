import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import About from "./sections/About";
import { Footer } from "./layout/Footer";
import SkillSet from "./sections/SkillSet";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <SkillSet />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
