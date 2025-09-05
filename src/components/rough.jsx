import React, { useState, useEffect } from 'react';

function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  
  const fullText = "Hi! I am Dhruvesh";
  const typingSpeed = 50;

  // Skills data with icons (you can replace with actual icons)
  const skills = [
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'Java', logo: '/logos/java.png' },
    { name: 'React', logo: '/logos/react.png' },
    { name: 'MySQL', logo: '/logos/mysql.png' },
    { name: 'MongoDB', logo: '/logos/mongodb.png' },
    { name: 'Docker', logo: '/logos/docker.png' },
    { name: 'springboot', logo: '/logos/springboot.png' },
    { name: 'fastapi', logo: '/logos/fastapi.png' },
    { name: 'Pandas', logo: '/logos/pandas.png' },
    { name: 'Numpy', logo: '/logos/numpy.png' },
    { name: 'Git', logo: '/logos/git.png' },
    { name: 'AWS', logo: '/logos/aws.png' },
    { name: 'Excel', logo: '/logos/excel.png' },
    { name: 'Tableau', logo: './logos/tableau.png' }
  ];

  // Typing animation
  useEffect(() => {
  if (currentIndex < fullText.length) {
    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + fullText[currentIndex]);
      setCurrentIndex(prev => prev + 1);
      
      // Check if "Hi! I am" has been typed (assuming it's at the beginning)
      const currentText = displayText + fullText[currentIndex];
      if (currentText.includes("Hi! I am") && !showAbout) {
        setTimeout(() => {
          setShowAbout(true);
          setTimeout(() => setShowSkills(true), 100);
        }, 0);
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }
}, [currentIndex, fullText, displayText, showAbout]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 font-custom">
      {/* Hero Text */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          {displayText}
          <span className="typing-cursor">|</span>
        </h1>
      </div>

      {/* About Section - Slides up from bottom */}
      <div className={`text-center max-w-2xl transition-all duration-1000 transform mb-8 ${
        showAbout 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}>
        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-loose">
          <span className="bg-white text-black p-1 focus-texts mr-2 text-black hover:!text-black hover:!bg-white ">Curious</span>{""} analytical <span className="bg-white text-black p-1 focus-texts mr-2 text-black hover:!text-black hover:!bg-white ">problem solver</span>{""} who takes <span className="bg-white text-black p-1 focus-texts mr-2 text-black hover:!text-black hover:!bg-white ">ownership</span>{""} of complex tasks, passionate about turning data and ideas into impactful solutions. Skilled in <span className="bg-violet-900 text-white ">fullStackDevelopment</span>, <span className="bg-violet-900 text-white">machineLearning</span>, and <span className="bg-violet-900 text-white">dataAnalysis.</span>
        </p>
      </div>

      {/* Skills Section - Icons running left to right */}
      <div className={`transition-all duration-1000 ${
        showSkills ? 'opacity-100' : 'opacity-0'
      }`}>

        <div className="bg-gradient-to-r from-indigo-600 to-violet-900 mb-7 px-5">
          <h4 className="text-xl text-white md:text-2xl text-center">Tech Stack & Skills:</h4>
        </div> 
      </div>

      <div className={`w-screen overflow transition-all duration-1000 ${
        showSkills ? 'opacity-100' : 'opacity-0'
      }`}>
        
        {/* Skills Container */}
        <div className="relative overflow-hidden bg-white p-2">
          <div className="flex skills-scroll gap-8">
            {/* Triple the skills for seamless infinite scroll */}
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src={skill.logo}
                  alt={skill.name}
                  className=" w-15 h-15 object-contain opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for scrolling animation */}
      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        .skills-scroll {
          animation: infiniteScroll 25s linear infinite;
          width: max-content;
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
          font-weight: 300 !important;
          vertical-align: center;
          horizontal-align: left;
          margin-left: -10px;
          line-height: 0.8;
        }
        
        /* Optional: Pause on hover if you want
        .skills-scroll:hover {
          animation-play-state: paused;
        }
        */
      `}</style>
    </div>
  );
}

export default HeroSection;