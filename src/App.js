import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Services from "./components/services";
import Footer from "./components/footer";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects /> 
      <Services />
      <Skills />
      <Contact />
     < Footer/>

    </div>
  );
}

export default App;
