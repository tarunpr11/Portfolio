// src/App.jsx
import React from "react";
import CosmicBackground from "./components/CosmicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <CosmicBackground />
      <div>
        <div className="my-5">
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <TechStack />
        </div>
        <div>
          <Leadership />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Certifications />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
