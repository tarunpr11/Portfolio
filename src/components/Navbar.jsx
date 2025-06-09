import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex items-center justify-between mx-20'>
      <div> 
        <img src="/images/Avatar.webp" alt="Avatar" width={45} height={45} />
      </div>
      <div className='flex items-center justify-evenly gap-28 bg-[#D9D9D9]/30 text-white rounded-full px-10 py-4 font-lexend font-normal text-lg'>
        <div onClick={() => scrollTo('about')} className="cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">About Me</div>
        <div onClick={() => scrollTo('projects')} className="cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">Projects</div>
        <div onClick={() => scrollTo('certifications')} className="cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">Certifications</div>
        <div onClick={() => scrollTo('contact')} className="cursor-pointer text-[#88C0D0] transform transition-transform duration-300 hover:-translate-y-1">Contact Me</div>
      </div>
    </div>
  );
};

export default Navbar;
