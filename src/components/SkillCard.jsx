import React from 'react';

const SkillCard = ({ Src, Name }) => {
  return (
    <div>
      <div className="relative p-5 m-5 w-64 h-80 flex flex-col items-center justify-evenly rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Glass Background */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(136,192,208,0.1)] to-[rgba(69,98,106,0.1)] backdrop-blur-md border border-white/20 shadow-lg hover:border-white/40 z-0" />

        {/* Foreground Content */}
        <div className="z-10 flex flex-col items-center">
          <img
            src={Src}
            alt="Skill"
            className="w-40 h-40 rounded-full mb-3 brightness-125 contrast-125"
          />
          <p className="text-white text-xl font-bold mt-2 drop-shadow-md brightness-110">
            {Name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
