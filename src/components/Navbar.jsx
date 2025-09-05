import React from 'react';

function Navbar() {
  return (
    <nav className=" flex justify-between items-center px-6 py-4 shadow-md font-custom scale-110">
      <div className = "flex justify-between items-center sm:mx-50 w-full text-white">
        <a href="/resume/DhruveshResume.pdf" target = "_blank" className="!text-white hover:!text-blue-400 hover:scale-125 !transition-colors ">resume</a>
        <a href="#projects" className="!text-white hover:!text-blue-400 hover:scale-125 !transition-colors">projects</a>
        <a href="#footer" className="!text-white hover:!text-blue-400 hover:scale-125 !transition-colors">contact</a>
      </div>
    </nav>
  );
}

export default Navbar;