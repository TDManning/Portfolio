import { useState } from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const projects = [
  {
    title: "Music Festival Scheduler",
    description: "A React & Rails app for an admin to manage festival schedules.",
    duration: "16 hours",
    collaboration: "Solo Project",
    highlights: [
      "Full application built in under 16 hours",
      "Implemented a fully RESTful Rails API",
      "Fully responsive UI", 
      "Utilized React state management",
    ],
    images: ["/homepage.png", "/homepageresponsive.png", "/manageschedule.png"], 
    techStack: ["React", "Javascript", "CSS", "Rails", "PostgreSQL"],
    github_frontend: "https://github.com/TDManning/festival-scheduler-fe",
    github_backend: "https://github.com/TDManning/festival-schedule-api",
    liveDemo: "https://music-festival-demo.com",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce platform with cart and checkout features.",
    duration: "4 weeks",
    collaboration: "Group Project",
    highlights: [
      "Implemented Stripe API for payments",
      "Optimized database queries for performance",
      "Built a custom authentication system",
    ],
    images: ["/images/ecommerce-1.gif"], 
    techStack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/yourusername/ecommerce-app",
    liveDemo: "https://ecommerce-demo.com",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce platform with cart and checkout features.",
    duration: "4 weeks",
    collaboration: "Group Project",
    highlights: [
      "Implemented Stripe API for payments",
      "Optimized database queries for performance",
      "Built a custom authentication system",
    ],
    images: ["/images/ecommerce.gif"],
    techStack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/yourusername/ecommerce-app",
    liveDemo: "https://ecommerce-demo.com",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce platform with cart and checkout features.",
    duration: "4 weeks",
    collaboration: "Group Project",
    highlights: [
      "Implemented Stripe API for payments",
      "Optimized database queries for performance",
      "Built a custom authentication system",
    ],
    images: ["/images/ecommerce.gif"],
    techStack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/yourusername/ecommerce-app",
    liveDemo: "https://ecommerce-demo.com",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce platform with cart and checkout features.",
    duration: "4 weeks",
    collaboration: "Group Project",
    highlights: [
      "Implemented Stripe API for payments",
      "Optimized database queries for performance",
      "Built a custom authentication system",
    ],
    images: ["/images/ecommerce.gif"],
    techStack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/yourusername/ecommerce-app",
    liveDemo: "https://ecommerce-demo.com",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce platform with cart and checkout features.",
    duration: "4 weeks",
    collaboration: "Group Project",
    highlights: [
      "Implemented Stripe API for payments",
      "Optimized database queries for performance",
      "Built a custom authentication system",
    ],
    images: ["/images/ecommerce.gif"],
    techStack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/yourusername/ecommerce-app",
    liveDemo: "https://ecommerce-demo.com",
  },
];

export const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="p-8">
      <AnimatedDiv>
        <h1 className="text-5xl font-extrabold text-center text-white">My Projects</h1>
        <p className="mt-2 text-lg text-center text-gray-400 italic">
          "Code, coffee, and creativity – a developer's perfect trio."
        </p>
        <p className="mt-4 text-center text-white">
          Welcome to my projects page! Here, you'll find a collection of apps I've built,
          ranging from solo experiments to collaborative team projects.
        </p>
      </AnimatedDiv>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 min-h-[800px]">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-100 object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(project)}
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
              {project.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              {project.duration} | {project.collaboration}
            </p>
            <p className="mt-2 text-base md:text-lg lg:text-xl text-gray-700">
              {project.description}
            </p>

            <ul className="mt-2 list-disc pl-5 text-gray-700 text-base md:text-lg lg:text-xl">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <div className="flex gap-2 mt-4 flex-wrap">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-300 text-base md:text-lg lg:text-xl px-2 py-1 rounded-full text-gray-900"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              {project.github_frontend ? (
                <>
                  <a
                    href={project.github_frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium text-base md:text-lg lg:text-xl"
                  >
                    GitHub Frontend
                  </a>
                  {project.github_backend && (
                    <a
                      href={project.github_backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium text-base md:text-lg lg:text-xl"
                    >
                      GitHub Backend
                    </a>
                  )}
                </>
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium text-base md:text-lg lg:text-xl"
                >
                  GitHub
                </a>
              ) : null}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium text-base md:text-lg lg:text-xl"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center p-4"
          onClick={handleBackgroundClick}
        >
          <div
            className="relative bg-black p-6 rounded-lg max-w-3xl w-full text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
            <div className="flex items-center justify-center mt-4">
              {selectedProject.images.length > 1 && (
                <button onClick={prevImage} className="mr-4 text-white text-3xl font-bold">
                  &lt;
                </button>
              )}
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full max-h-[90vh] object-contain rounded"
              />
              {selectedProject.images.length > 1 && (
                <button onClick={nextImage} className="ml-4 text-white text-3xl font-bold">
                  &gt;
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;