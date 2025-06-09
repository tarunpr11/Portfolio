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
        <div id="about">
          <Hero />
        </div>
        <div id="tech">
          <TechStack />
        </div>
        <div id="leadership">
          <Leadership />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <p className="text-center font-lexend text-white">&copy; Tarun Parthiban 2025</p>
      </div>
    </div>
  );
}
