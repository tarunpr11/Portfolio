
// src/components/ExperienceTimeline.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "DeepCure – Startup",
    role: "Technical Lead",
    year: "2022 – 2023",
  },
  {
    title: "VitaData",
    role: "Frontend Lead – Intern",
    year: "2025",
  },
  {
    title: "T-Systems ICT (Deutsche Telekom)",
    role: "AI Intern",
    year: "2025",
  },
];

const WorkTimeline = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

return (
    <div className="flex justify-center items-center min-h-screen py-32">
        <div className="relative">
            <div
                className="border-l-4 border-cyan-300/60 absolute inset-y-0 left-1/2 transform -translate-x-1/2"
                style={{ width: '4px' }}
            />
            <div className="flex flex-col gap-8">
                {experiences.map((exp, i) => {
                    const isLeftAligned = i % 2 === 0;
                    return (
                        <div
                            key={i}
                            ref={el => (cardsRef.current[i] = el)}
                            className={`relative mb-24 w-[400px] rounded-2xl bg-gradient-to-r from-[rgba(136,192,208,0.25)] to-[rgba(69,98,106,0.25)] 
                                p-8 text-white backdrop-blur-lg border border-white/30 shadow-2xl
                                ${isLeftAligned ? 'mr-auto -translate-x-1/2 left-1/2' : 'ml-auto translate-x-1/2 right-1/2'}
                                `}
                            style={{
                                position: 'relative',
                                [isLeftAligned ? 'left' : 'right']: '160%',
                            }}
                        >
                            <div
                                className={`absolute top-2 w-6 h-6 bg-cyan-300 rounded-full border-4 border-white
                                    ${isLeftAligned ? '-left-12' : '-right-12'}`}
                            />
                            <h3 className="text-2xl font-extrabold">{exp.title}</h3>
                            <p className="whitespace-pre-line text-base opacity-90 mt-2">{exp.role}</p>
                            <p className="text-sm text-cyan-200 mt-3">{exp.year}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);
};

export default WorkTimeline;
