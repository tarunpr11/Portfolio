import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Certificate from './Certificate';

const Certifications = () => {
  const certificates = [
    {
      Src: "./images/certificates/Flutter.webp",
      Name: "Flutter & Dart",
      Description:
        "I completed a comprehensive Flutter & Dart certification course on Udemy, taught by Angela Yu. This hands-on program covered the fundamentals and advanced concepts of mobile app development, including state management, APIs, Firebase integration, and responsive UI design. Through this course, I gained practical experience building real-world apps and deepened my understanding of cross-platform development using Flutter.",
    },
    {
        Src: "./images/certificates/DS.webp",
        Name: "Data Science for Engineers",
        Description: "I successfully completed the Data Science for Engineers certification offered by NPTEL, an initiative by the Ministry of Education, Government of India. This course provided a strong foundation in data science principles, covering essential topics such as probability and statistics, data wrangling, machine learning algorithms, and model evaluation techniques. Through practical assignments and hands-on exercises, I developed a solid understanding of how to extract insights from data and apply analytical techniques"
    },
    {
        Src: "./images/certificates/Rank7.webp",
        Name: "Rank 7: 2022-23", 
        Description: "I was awarded a Meritorious Certificate by Vellore Institute of Technology, Chennai, in recognition of securing the 7th rank in the Department of B.Tech Computer Science and Engineering with a specialization in Artificial Intelligence and Robotics. This honor reflects consistent academic excellence and dedication to mastering core and advanced concepts in computer science, AI, and robotics throughout my undergraduate program."
    }
    // Add more certificates here as needed
  ];

  const itemsPerPage = 1;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const slideRef = useRef(null);

  // Animate on certificate change
  useEffect(() => {
    gsap.fromTo(
      slideRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [currentPage]);

  // Auto slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentCertificate = certificates[currentPage];

  return (
    <div className="text-white font-lexend font-normal px-6 pb-24">
      <div className="text-4xl text-center py-5 mb-20">
        <p className="pb-3 font-bold">CERTIFICATIONS</p>
        <div className="h-1 bg-[#88C0D0] w-48 mx-auto"></div>
      </div>

      <div className="flex justify-center py-8 my-5">
        <div ref={slideRef} className="transition-all">
          <Certificate
            key={currentCertificate.Name}
            Src={currentCertificate.Src}
            Name={currentCertificate.Name}
            Description={currentCertificate.Description}
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full inline-block ${
              idx === currentPage ? 'bg-[#88C0D0]' : 'bg-gray-400'
            } cursor-pointer`}
            onClick={() => setCurrentPage(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
