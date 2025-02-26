import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    console.log("Button clicked: navigating to /projects");
    navigate('/projects');
  };

  const handleAboutClick = () => {
    console.log("Button clicked: navigating to /about");
    navigate('/about');
  };

  return (
    <section 
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-8 sm:px-14 lg:px-24 overflow-hidden transition-all duration-300 mt-[-1px] pt-[80px] sm:pt-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 -z-50"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-teal-500 dark:bg-teal-700 opacity-70 rotate-12 blur-[80px]"></div>
        <div className="absolute bottom-0 left-[25%] w-[350px] h-[350px] bg-blue-500 dark:bg-purple-500 opacity-50 rotate-[-10deg] blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between flex-grow space-y-6 sm:space-y-8 lg:space-y-12">
        <div className="max-w-lg text-center lg:text-left">
          <AnimatedDiv>
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500 dark:text-teal-300 tracking-wide uppercase">
                Terra Manning
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
                Crafting Code,  
                <span className="text-teal-500 dark:text-teal-300"> Building Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 opacity-80 leading-[1.8]">
                As a <span className="text-teal-500 dark:text-teal-300 font-semibold">Software Engineer</span>, creativity fuels my code.  
                I turn challenges into solutions, one line at a time.
              </p>
              <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleProjectsClick}
                  className="flex-1 px-6 py-3 bg-transparent text-teal-500 border border-teal-500 hover:bg-teal-500 hover:text-white dark:bg-transparent dark:text-teal-400 dark:border-teal-400 dark:hover:bg-teal-500 dark:hover:text-white font-medium text-lg rounded-full transition-colors">
                  Explore My Work
                </button>
                <button
                  onClick={handleAboutClick}
                  className="flex-1 px-6 py-3 bg-transparent text-teal-500 border border-teal-500 hover:bg-teal-500 hover:text-white dark:bg-transparent dark:text-teal-400 dark:border-teal-400 dark:hover:bg-teal-500 dark:hover:text-white font-medium text-lg rounded-full transition-colors">
                  Read My Story
                </button>
              </div>
            </div>
          </AnimatedDiv>
        </div>
        <div className="relative flex justify-center lg:justify-end w-full lg:w-auto"> 
          <div className="absolute bottom-0 left-1/2 -translate-x-1/5 w-[50%] h-[85%] bg-teal-300 dark:bg-teal-600 opacity-70 rounded-lg shadow-lg z-[100]"></div>

          <div className="relative w-[100%] max-w-[700px] lg:max-w-[800px] h-auto object-cover z-[101]">
            <img 
              src="/portfolio-image-removebg.png"  
              alt="Profile" 
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;