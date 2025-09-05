import React from 'react';
import { Mail, Linkedin, Github, FileText } from "lucide-react";

function Footer(){
	return (
	    <footer id = "footer" className="bg-gray-900 text-gray-300 !font-custom py-10 px-4">
	      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
	        
	        {/* Left side - Name and Tagline */}
	        <div className="text-center md:text-left">
	          <h2 className="text-lg !font-custom font-semibold text-white">
	            Dhruvesh Chauhan
	          </h2>
	          <p className="text-sm">
	            Master’s Student @ Rutgers New Brunswick | Computer & Information Sciences<br />
	            Open to Summer 2026 Internships<br/>
	          </p>
	          <p className = "mt-4"><em className = "text-sm bg-violet-900 text-white">dhruvesh.chauhan13@gmail.com</em></p>
	        </div>

	        {/* Right side - Social Links + Resume */}
	        <div className="flex items-center gap-5">
	          <a
	            href="https://www.linkedin.com/in/dhruveshchauhan/"
	            target="_blank"
	            rel="noopener noreferrer"
	            className="hover:text-blue-400 transition-colors"
	          >
	            <Linkedin className="w-6 h-6" />
	          </a>
	          <a
	            href="https://github.com/dhruvesh131199"
	            target="_blank"
	            rel="noopener noreferrer"
	            className="hover:text-gray-400 transition-colors"
	          >
	            <Github className="w-6 h-6" />
	          </a>
	          <a
	            href="mailto:dhruvesh.chauhan13@gmail.com"
	            className="hover:text-red-400 transition-colors"
	          >
	            <Mail className="w-6 h-6" />
	          </a>
	          <a
	            href="resume/DhruveshResume.pdf" // put your resume file in public folder
	            target="_blank"
	            rel="noopener noreferrer"
	            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
	          >
	            <FileText className="w-4 h-4" />
	            Resume
	          </a>
	        </div>
	      </div>

	      {/* Bottom - Copyright */}
	      <div className="mt-6 text-center text-xs text-gray-500">
	        © {new Date().getFullYear()} Dhruvesh Chauhan. All rights reserved.
	      </div>
	    </footer>
	  );
}

export default Footer;
