import { useState } from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import festivalScheduler from "./FestivalScheduler.gif"; 
import moodBoost from "./MoodBoost.gif"; 
import motivationalPosters from "./MotivationalPosters.gif"; 
import tracker from "./Tracker.gif"; 
import littleShop from "./littleShop.gif"; 
import rancidTomatillos from "./RancidTomatillos.gif"; 
import romCom from "./RomCom.gif"; 
import coloRandom from "./ColoRandom.gif"; 
import rockPaperScissor from "./RockPaperScissor.gif"

const projects = [
  {
    title: "Music Festival Scheduler",
    description: "A React & Rails app for admin to manage festival schedules",
    duration: "16 hours",
    collaboration: "Solo Project",
    highlights: [
      "Completed both the frontend and backend in under 16 hours as part of a take-home challenge.",
      "Connected with a RESTful Rails API to fetch shows and handle CRUD operations for user schedules.",
      "Incorporated robust error handling to maintain a smooth user experience during API failures.",
      "Leveraged React functional components, hooks, and a responsive grid layout to ensure maintainability."
    ],
    video: [festivalScheduler],
    techStack: ["React", "React Router", "Javascript", "CSS", "Rails", "PostgreSQL", "RSpec"],
    github_frontend: "https://github.com/TDManning/festival-scheduler-fe",
    github_backend: "https://github.com/TDManning/festival-schedule-api",
  },
  {
    title: "Mood Boost",
    description: "An uplifting site with jokes, quotes, breathing exercise and user tracking",
    duration: "2 weeks",
    collaboration: "Group Project",
    highlights: [
      "Employed a modular SOA design to ensure smooth integration with the React frontend.",
      "Integrated robust testing for frontend and backend using Cypress, RSpec, Factory Bot, Faker, Shoulda-Matchers, and SimpleCov.",
      "Integrated third-party APIs to fetch jokes and quotes.",
      "Collaborated with a diverse team using GitHub project boards, a disciplined git workflow, and agile methodologies to streamline project management and decision-making.",
    ],
    video: [moodBoost],
    techStack: ["React", "Javascript", "CSS", "Rails", "PostgreSQL", "Cypress", "RSpec"],
    github_frontend: "https://github.com/TDManning/mood_boost_fe",
    github_backend: "https://github.com/TDManning/mood_boost_be",
    liveDemo: "https://mood-boost-fe.vercel.app/",
  },
  {
    title: "Tracker, by Turing",
    description: "A full-featured web app for managing job applications, contacts, and companies",
    duration: "3.5 weeks",
    collaboration: "Group Project",
    highlights: [
      "Continuous integration and testing via RSpec, Cypress and continuous integration through CircleCI.",
      "Implemented robust user registration and login functionality to ensure secure authentication and effective user management for the application.",
      "Utilized GitHub project boards and a structured git workflow to maintain agile development practices and efficient team collaboration.",
    ],
    video: [tracker],
    techStack: ["React", "TypeScript", "Rails", "PostgreSQL", "Cypress", "RSpec", "CircleCI"],
    github_frontend: "https://github.com/turingschool/tracker-crm-fe",
    github_backend: "https://github.com/turingschool/tracker-crm",
    liveDemo: "https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/",
  },
  {
    title: "Little Shop",
    description: "Service-Oriented E-Commerce Application",
    duration: "2 weeks",
    collaboration: "Group Project",
    highlights: [
      "Developed Little Shop as a group project using a service-oriented architecture with separate backend (Rails API) and frontend communicating via APIs.",
      "implemented CRUD operations, one-to-many relationships, and model validations.",
      "Developed a frontend (using a Vite starter repo) that consumes the Rails API, incorporating CSS adjustments and JavaScript refactors for optimal data display.",
      "Collaborated as a team by breaking down complex tasks into manageable pieces and applying agile principles."
    ],
    video: [littleShop],
    techStack: ["Javascript", "CSS", "Rails", "PostgreSQL", "RSpec"],
    github_frontend: "https://github.com/TDManning/little-shop-fe",
    github_backend: "https://github.com/TDManning/little-shop-be",
  },
  {
    title: "Hang In There",
    description: "Users can view, create and save motivational (or unmotivational) posters",
    duration: "1 week",
    collaboration: "Solo Project-Frontend, Paired Project-Backend",
    highlights: [
      "Emphasized efficient DOM manipulation, clean JavaScript practices, and flexbox-based CSS for precise layout control.",
      "Deployed to Heroku CLI to deploy, pushing code updates, and running migrations and seeds to ensure continuous, seamless updates.",
      "Provides endpoints to create, retrieve, update, and delete poster records, supporting both random generation and custom user inputs.",
    ],
    video: [motivationalPosters],
    techStack: ["Rails", "JavaScript", "CSS", "PostgreSQL", "Node.js", "Heroku"],
    github_frontend: "https://github.com/TDManning/hang-in-there",
    github_backend: "https://github.com/TDManning/hang_in_there_api",
    liveDemo: "https://github.com/TDManning/hang-in-there",
  },

  {
    title: "Rancid Tomatillos",
    description: "A movie website where users can upvote, downvote and view movie details",
    duration: "1 week",
    collaboration: "Paired Project",
    highlights: [
      "Implemented multi-page navigation with React Router v6.",
      "Managed asynchronous data flows by making multiple network requests to fetch and display movie data.",
      "Integrated comprehensive testing with Cypress to ensure robust application performance.",
      "Utilized detailed planning and communication tools for wireframing, component architecture design and project management"
    ],
    video: [rancidTomatillos],
    techStack: ["React", "JavaScript", "CSS", "HTML", "Cypress"],
    github: "https://github.com/TDManning/rancid-tomatillos",
    liveDemo: "https://rancid-tomatillos-a8epnhzkd-tdmannings-projects.vercel.app/",
  },
  {
    title: "RomCom",
    description: "View positive affirmations and mantras",
    duration: "5 days",
    collaboration: "Solo Project",
    highlights: [
      "Learn to create a responsive user interface that adapts gracefully to various screen sizes and devices.",
      "Understand how to listen for user events and update the DOM accordingly, ensuring interactive features work as intended.",
      "Implement error handling and user feedback mechanisms (e.g., disabling buttons or displaying alerts) to improve the overall user experience."
    ],
    video: [romCom],
    techStack: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/TDManning/self-care-center",
    liveDemo: "https://tdmanning.github.io/self-care-center/",
  },
  {
    title: "ColoRandom",
    description: "A movie website where users can upvote, downvote and view movie details.",
    duration: "1 week",
    collaboration: "Group Project",
    highlights: [
      "Successfully implemented all required game features, including tracking player wins and dynamically updating the UI.",
      "Ensured functions adhered to the Single Responsibility Principle (SRP) and were DRY.",
      "Utilized semantic HTML elements to improve readability and accessibility.",
      "Used event delegation to efficiently handle dynamic interactions."
    ],
    video: [coloRandom],
    techStack: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/TDManning/coloRandomSite",
    liveDemo: "https://tdmanning.github.io/coloRandomSite/",
  },
  {
    title: "Rock Paper Scissors",
    description: "A Rock, Paper, Scissors game with an animal themed advanced mode",
    duration: "1 week",
    collaboration: "Solo Project",
    highlights: [
      "Utilized DOM manipulation (querySelector, innerText, classList.toggle, etc.) to dynamically update the page.",
      "Implemented local storage (saveWinsToStorage, retrieveWinsFromStorage) to persist win records between sessions.",
      "Broke down problems into manageable steps, debugging issues incrementally."
    ],
    video: [rockPaperScissor],
    techStack: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/TDManning/Rock-Paper-Scissors",
    liveDemo: "https://tdmanning.github.io/Rock-Paper-Scissors/",
  },
];

export const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<typeof projects[number] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [playAnimation, setPlayAnimation] = useState(false);

  const openModal = (project: typeof projects[number]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setSelectedProject(null);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.video.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.video.length - 1 : prev - 1
      );
    }
  };

  const getThumbnailSrc = (project: typeof projects[number]) => {
    if (project.title === "Music Festival Scheduler") {
      return "/homepage.png"; 
    } else if (project.title === "Mood Boost") {
      return "/Home-Page.png";
    } else if (project.title === "Tracker, by Turing") {
      return "/TrackerImage.png";
    } else if (project.title === "Little Shop") {
      return "/LitleShopHome.png";
    } else if (project.title === "Hang In There") {
      return "/motivational-posters.png";
    } else if (project.title === "Rancid Tomatillos") {
      return "/Rancid.png";
    } else if (project.title === "RomCom") {
      return "/RomCom.png";
    } else if (project.title === "ColoRandom") {
      return "/ColoRandom.png";
    } else if (project.title === "Rock Paper Scissors") {
      return "/rock-paper-scissor.png";
    }
    return project.video[0];
  };

  return (
    <section className="p-8">
      <AnimatedDiv>
        <h1 className="text-5xl font-extrabold text-center text-black dark:text-white">
          My Projects
        </h1>
        <p className="mt-2 text-lg text-center text-gray-400 italic">
          Welcome to my projects page! Here, you'll find a collection of apps I've built, ranging from solo work to collaborative team projects.
        </p>
      </AnimatedDiv>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => {
          const thumbnailSrc = getThumbnailSrc(project);
          const isPNG = thumbnailSrc.endsWith(".png");
  
          return (
            <div
              key={index}
              className={`relative cursor-pointer aspect-[4/3] overflow-hidden rounded-lg border-4 border-gray-300 bg-white p-4 shadow-lg 
                ${isPNG ? "border-black hover:border-blue-800 dark:hover:border-blue-800 transition duration-200" : ""}`}
              onClick={() => openModal(project)}
            >
              <img
                src={thumbnailSrc}
                alt={project.title}
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          );
        })}
      </div>
        {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center p-4"
          onClick={handleBackgroundClick}
        >
          <div
            className="relative bg-black p-8 rounded-lg w-full max-w-[95%] sm:max-w-[1200px] text-white max-h-[95vh] flex flex-col sm:flex-row gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center w-full sm:w-2/3">
              <h2 className="text-4xl font-bold mb-4 text-center text-white-300">
                {selectedProject.title}
              </h2>
              <div className="flex items-center justify-center w-full">
                {selectedProject.video.length > 1 && (
                  <button onClick={prevImage} className="mr-4 text-white text-3xl font-bold">
                    &lt;
                  </button>
                )}
                <img
                  src={selectedProject.video[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg shadow-lg"
                />
                {selectedProject.video.length > 1 && (
                  <button onClick={nextImage} className="ml-4 text-white text-3xl font-bold">
                    &gt;
                  </button>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col justify-center">
              <p className="text-lg text-blue-300 font-semibold leading-relaxed">
                {selectedProject.description}
              </p>
  
              <p className="mt-2 text-sm text-gray-400">
                <strong className="text-blue-400">Duration:</strong> {selectedProject.duration} | 
                <strong className="text-blue-400"> Collaboration:</strong> {selectedProject.collaboration}
              </p>
              <hr className="my-4 border-gray-700" />
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Project Highlights</h3>
              <ul className="list-disc pl-6 space-y-2">
                {selectedProject.highlights.map((highlight, i) => (
                  <li key={i} className="text-base text-gray-200">{highlight}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {selectedProject.github_frontend && (
                  <a href={selectedProject.github_frontend} target="_blank" rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                    GitHub Frontend
                  </a>
                )}
                {selectedProject.github_backend && (
                  <a href={selectedProject.github_backend} target="_blank" rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                    GitHub Backend
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                    GitHub
                  </a>
                )}
                {selectedProject.liveDemo && (
                  <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
  
};

export default Projects;
