import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Footer from "./components/Sections/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark dark-highlight" : "light-highlight"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};
export default App;
