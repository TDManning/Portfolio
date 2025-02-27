import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

export const About: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedDiv>
          <h2 className="text-3xl font-bold text-teal-500 mb-8 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My path to software development wasn’t linear. After taking eight years away from paid work to raise my three kids, I returned to the 
            workforce and made the deliberate choice to change careers, pursuing a field that truly resonated with my passion for creative problem-solving.  
            I have worn many hats, from teaching to managing logistics and leading teams, and I thrived in fast-paced environments where adaptability and 
            collaboration were essential. Whether I was optimizing freight dispatch at Amazon or organizing large-scale volunteer projects, I love finding smarter, 
            more efficient ways to get things done. Ultimately, I realized that channeling this mindset into building clean, user-friendly 
            software was the perfect way to merge my skills with my passion.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            To make that transition, I sought out a rigorous program that would push me to grow. I found that challenge at Turing School of Software & Design—the only accredited, 
            non-profit online coding bootcamp that takes under a year. I spent 70–80 hours a week building applications on my own and with teams, 
            learning to break down complex problems, adapt on the fly, and figure things out even when I didn’t have all the answers. That experience deepened my love 
            for tackling tough challenges and gave me the intellectual fulfillment I had been searching for. Now, I’ve finally found a career where I can keep learning and growing every day.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At the core of everything I do is a people-first mindset. Whether I am collaborating with a team, mentoring others, or building software, 
            I believe that strong relationships and clear communication drive the best outcomes.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Outside of coding, I love staying active through obstacle course races and weightlifting, playing my cello, keeping up with my three kids, or exploring new technologies. 
            I enjoy being in spaces that foster innovation, teamwork, and continuous learning, and I bring that same energy into everything I do.
          </p>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default About;
