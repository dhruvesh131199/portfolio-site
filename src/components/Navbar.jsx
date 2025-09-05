import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className=" flex justify-between items-center px-6 py-4 shadow-md font-custom scale-110">
      <div className = "flex justify-between items-center sm:mx-50 w-full text-white">
        <a href="resume/DhruveshResume.pdf" target = "_blank" className="!text-white hover:!text-blue-400 hover:scale-125 !transition-colors ">resume</a>
        <Link to="projects" smooth={true} duration={500} offset={-70} spy={true} className="cursor-pointer hover:text-blue-400">
          projects
        </Link>
        <Link to="footer" smooth={true} duration={500} offset={-70} spy={true} className="cursor-pointer hover:text-blue-400">
          contact
        </Link> 
      </div>
    </nav>
  );
}

export default Navbar;