import React, { useState, useEffect, useRef } from 'react';
import SkillCard from './SkillCard';
import gsap from 'gsap';

const TechStack = () => {
  const skills = [
    { Src: "./images/skills/Python.webp", Name: "Python" },
    { Src: "./images/skills/Tensorflow.webp", Name: "Tensorflow" },
    { Src: "./images/skills/React.webp", Name: "React.js" },
    { Src: "./images/skills/Next.webp", Name: "Next.js" },
    { Src: "./images/skills/Flutter.webp", Name: "Flutter" },
    { Src: "./images/skills/HTML.webp", Name: "HTML" },
    { Src: "./images/skills/CSS.webp", Name: "CSS" },
    { Src: "./images/skills/JS.webp", Name: "Javascript" },
    { Src: "./images/skills/Figma.webp", Name: "Figma" },
    { Src: "./images/skills/Tailwind.webp", Name: "Tailwind CSS" },
    { Src: "./images/skills/Git.webp", Name: "Git" },
    { Src: "./images/skills/Arduino.webp", Name: "Arduino" },
    { Src: "./images/skills/Numpy.webp", Name: "Numpy" },
    { Src: "./images/skills/Pandas.webp", Name: "Pandas" },
    { Src: "./images/skills/SQL.webp", Name: "SQL" },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const slideRef = useRef(null);

  // Animate on page change
  useEffect(() => {
    gsap.fromTo(
      slideRef.current,
      { opacity: 0, x: 50 },
      { opacity: 0.7, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [currentPage]);

  // Auto-advance every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalPages]);

  const startIdx = currentPage * itemsPerPage;
  const visibleSkills = skills.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="text-white font-lexend font-normal pl-6 pb-24">
      <div className="text-4xl text-center py-5">
        <p className="pb-3 font-bold">TECH STACK</p>
      </div>
      <div className="h-1 bg-[#88C0D0] w-48 mx-auto"></div>

      <div className="flex justify-center py-8 my-5">
        <div ref={slideRef} className="flex gap-8 transition-all">
          {visibleSkills.map((skill) => (
            <SkillCard key={skill.Name} Src={skill.Src} Name={skill.Name} />
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full inline-block ${idx === currentPage ? 'bg-[#88C0D0]' : 'bg-gray-400'} cursor-pointer`}
            onClick={() => setCurrentPage(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
