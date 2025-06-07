import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const hardware = [
    {
      Src: "./images/projects/GestureCar.webp",
      Name: "Gesture Controlled Car",
      GitHub: "https://github.com/tarunpr11/GestureCar",
    },
    {
      Src: "./images/projects/RoboticArm.webp",
      Name: "Smart Color and Shape Sorting Robotic Arm",
      GitHub: "https://github.com/tarunpr11/RoboticArm",
    },
    {
      Src: "./images/projects/airquality.webp",
      Name: "Air Quality Monitoring",
      GitHub: null, 
    },
  ];

  const software = [
    {
      Src: "./images/projects/Suchitva.webp",
      Name: "Suchitva",
      GitHub: "https://github.com/tarunpr11/Suchitva",
    },
    {
      Src: "./images/projects/LawAlign.webp",
      Name: "Law Align",
      GitHub: "https://github.com/tarunpr11/Law-Align",
    },
    {
      Src: "./images/projects/HandSign.webp",
      Name: "Hand Sign Recognition System",
      GitHub: "https://github.com/tarunpr11/Sign-Language-App",
    },
    {
      Src: "./images/projects/HMS.webp",
      Name: "Hospital Management System",
      GitHub: "https://github.com/tarunpr11/Hospital-Management",
    },
  ];

  const [tab, setTab] = useState("hardware");
  const [selectedProject, setSelectedProject] = useState(hardware[0]);
  const projects = tab === "hardware" ? hardware : software;

  const buttonsRef = useRef([]);
  const sectionRef = useRef(null); // Section animation ref

  // Animate buttons when tab changes
  useLayoutEffect(() => {
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      }
    );
  }, [tab]);

  // Animate section on scroll
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-white font-lexend font-normal px-6 pb-24 mt-10 mb-48 mx-10"
    >
      <div className="mx-14 py-3 mb-20">
        <p className="pb-3 text-4xl font-bold">PROJECTS</p>
        <div className="h-1 bg-[#88C0D0] w-32"></div>
      </div>

      {/* Project Viewer */}
      <div className="flex items-center justify-around mt-8 pr-20 flex-wrap gap-10">
        <div className="relative w-1/2 max-w-lg group">
          <img
            src={selectedProject.Src}
            alt="Project"
            className="w-full h-72 rounded-xl shadow-lg transition duration-300"
          />
          {selectedProject.GitHub && (
            <a
              href={selectedProject.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-4xl font-semibold rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              aria-label="View GitHub Repo"
            >
              <img
                src="./images/github.webp"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
          )}

          {!selectedProject.GitHub && (
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl"
              aria-hidden="true"
            >
              {/* No GitHub icon or text */}
            </div>
          )}
        </div>

        {/* Project Name List */}
        <div className="w-1/2 font-lexend">
          <div className="flex justify-start mb-6 font-extrabold text-lg">
            <button
              onClick={() => {
                setTab("hardware");
                setSelectedProject(hardware[0]);
              }}
              className={` py-2 ${
                tab === "hardware"
                  ? "border-b-2 border-[#88C0D0]"
                  : "border-b-2 border-white"
              }`}
            >
              Hardware
            </button>
            <button
              onClick={() => {
                setTab("software");
                setSelectedProject(software[0]);
              }}
              className={`px-4 py-2 ${
                tab === "software"
                  ? "border-b-2 border-[#88C0D0]"
                  : "border-b-2 border-white"
              }`}
            >
              Software
            </button>
          </div>
          <div className="flex flex-col font-extrabold text-lg">
            {projects.map((project, index) => (
              <button
                key={index}
                ref={(el) => (buttonsRef.current[index] = el)}
                onClick={() => setSelectedProject(project)}
                className={`text-left px-4 py-5 border-b-2 border-[#88C0D0] transition duration-200 ${
                  selectedProject.Name === project.Name
                    ? "text-black"
                    : "bg-transparent text-white hover:bg-[#88C0D0]/30"
                }`}
                style={
                  selectedProject.Name === project.Name
                    ? {
                        background:
                          "linear-gradient(to bottom, #45626A, #88C0D0)",
                      }
                    : {}
                }
              >
                {project.Name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
