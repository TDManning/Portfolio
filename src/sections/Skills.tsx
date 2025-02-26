import { motion } from "framer-motion";
import AnimatedDiv from "../components/AnimatedDiv";

const skills = [
  { category: "Languages & Frameworks", list: [
      { name: "JavaScript", level: "Intermediate", logo: "javascript.svg" },
      { name: "TypeScript", level: "Beginner", logo: "typescript.svg" },
      { name: "HTML", level: "Advanced", logo: "html5.svg" },
      { name: "CSS", level: "Intermediate", logo: "css.svg" },
      { name: "Tailwind", level: "Beginner", logo: "tailwindcss.svg" },
      { name: "Ruby", level: "Beginner", logo: "ruby.svg" },
      { name: "Rails", level: "Intermediate", logo: "rubyonrails.svg" },
      { name: "SQL", level: "Intermediate", logo: "sqlite.svg" },
      { name: "React", level: "Intermediate", logo: "react.svg" }
    ]
  },
  { category: "Testing and Debugging", list: [
      { name: "Test-Driven Development (TDD)", level: "Intermediate", logo: " " },
      { name: "RSpec", level: "Intermediate", logo: "rspec.svg" },
      { name: "Cypress", level: "Intermediate", logo: "cypress.svg" }
    ]
  },
  { category: "Tools & Workflow", list: [
      { name: "Git Workflow", level: "Advanced", logo: "git.svg" },
      { name: "GitHub Project Management", level: "Advanced", logo: "github.svg" },
      { name: "Jira", level: "Beginner", logo: "jira.svg" },
      { name: "Postman", level: "Intermediate", logo: "postman.svg" },
      { name: "Heroku", level: "Beginner", logo: "heroku.svg" },
      { name: "RESTful APIs", level: "Intermediate", logo: " " },
      { name: "Agile Workflow", level: "Advanced", logo: " " },
      { name: "Adobe InDesign", level: "Intermediate", logo: " " }
    ]
  }
];

const getLevelColor = (level: string): string => {
  switch (level) {
    case "Beginner":
      return "bg-teal-400";
    case "Intermediate":
      return "bg-yellow-400";
    case "Advanced":
      return "bg-blue-400";
    default:
      return "bg-gray-500";
  }
};

const SkillsSection = () => {
  return (
    <section className="p-8">
      <AnimatedDiv>
        <h1 className="text-5xl font-extrabold text-center text-white">My Skills</h1>
        <p className="mt-2 text-lg text-center text-gray-400 italic">
          A snapshot of my technical abilities and workflow expertise.
        </p>
        <p className="mt-4 text-center text-white">
          Discover the technologies and tools that empower my work.
        </p>
      </AnimatedDiv>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {skills.map((skillCategory, index) => (
          <div
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-400 pb-2">{skillCategory.category}</h3>
            <ul>
              {skillCategory.list.map((skill, i) => (
                <li key={i} className="mb-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{skill.name}</span>
                  <span className={`text-sm px-3 py-1 rounded-full text-white ${getLevelColor(skill.level)}`}>{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: [0, -150, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {skills.flatMap(skillCategory => skillCategory.list).map((skill, i) => (
            skill.logo && (
              <img 
                key={i} 
                src={`/logos/${skill.logo}`} 
                alt={skill.name} 
                className="h-12 w-12 object-contain opacity-60 hover:opacity-50 transition-opacity dark:invert dark:brightness-110" 
                onError={(e) => e.currentTarget.style.display='none'}
              />
            )
          ))}
        </motion.div>
      </div>
      <div className="mt-10 text-center">
        <a href="/terra-manning-student-resume.pdf" download className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
          Download My Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default SkillsSection;
