import { motion } from "framer-motion";
import AnimatedDiv from "../components/AnimatedDiv";

const skills = [
  { category: "Languages & Frameworks", color: "from-yellow-400 to-orange-500", list: [
      { name: "JavaScript", logo: "javascript.svg" },
      { name: "TypeScript", logo: "typescript.svg" },
      { name: "HTML", logo: "html5.svg" },
      { name: "CSS", logo: "css.svg" },
      { name: "Tailwind", logo: "tailwindcss.svg" },
      { name: "Ruby", logo: "ruby.svg" },
      { name: "Rails", logo: "rubyonrails.svg" },
      { name: "SQL", logo: "sqlite.svg" },
      { name: "React", logo: "react.svg" }
    ]
  },
  { category: "Testing & Debugging", color: "from-green-400 to-teal-500", list: [
      { name: "Test-Driven Development (TDD)", logo: "" },
      { name: "RSpec", logo: "rspec.svg" },
      { name: "Cypress", logo: "cypress.svg" }
    ]
  },
  { category: "Tools & Workflow", color: "from-blue-400 to-indigo-500", list: [
      { name: "Git Workflow", logo: "git.svg" },
      { name: "GitHub Project Management", logo: "github.svg" },
      { name: "Jira", logo: "jira.svg" },
      { name: "Postman", logo: "postman.svg" },
      { name: "Heroku", logo: "heroku.svg" },
      { name: "RESTful APIs", logo: "" },
      { name: "Agile Workflow", logo: "" },
      { name: "Adobe InDesign", logo: "" }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section className="p-8">
      <AnimatedDiv>
        <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white">
          My Skills
        </h1>
        <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 italic">
          A snapshot of my technical abilities and workflow expertise.
        </p>
      </AnimatedDiv>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-2 border-transparent
                        hover:shadow-xl transform hover:scale-105
                        bg-gradient-to-r ${skillCategory.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4 border-b-2 border-gray-300 dark:border-white pb-2">
              {skillCategory.category}
            </h3>
            <ul className="space-y-3">
              {skillCategory.list.map((skill, i) => (
                <li key={i} className="text-lg font-bold text-center text-gray-700 dark:text-gray-200">
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {skills.flatMap(skillCategory => skillCategory.list).map((skill, i) =>
          skill.logo ? (
            <img
              key={i}
              src={`/logos/${skill.logo}`}
              alt={skill.name}
              className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100 dark:invert dark:brightness-125"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
