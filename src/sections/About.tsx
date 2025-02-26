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
            My path to software development wasn’t linear. I chose to redefine my journey by changing careers and dive 
            into a field that truly resonated with my passion for creative problem-solving. 
            Curiosity and a love for solving challenges have always been my compass. I’ve worn many hats, from teaching to 
            managing logistics and leading teams, and I thrived in fast-paced environments where adaptability and collaboration were essential. 
            Whether I was optimizing freight dispatch at Amazon or running volunteer projects, I loved finding smarter, 
            more efficient ways to get things done. Ultimately, I realized that channeling this mindset into building clean, 
            user-friendly software was the ideal way to blend my skills with my passion.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ready for a career change and looking for a real challenge, I jumped into Turing School of Software &amp; Design—the
            only accredited, non-profit online coding bootcamp that wraps up in under a year.
            I spent 70–80 hours a week building applications on my own and with teams,
            learning to break down complex problems, adapt on the fly, and figure things out even when
            I didn’t have all the answers. That experience deepened my love for tackling tough challenges
            and fueled my creativity and persistence. Now, I’ve finally found a career where I can keep learning and growing every day.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At the core of everything I do is a people-first mindset. Whether I am collaborating with a team, mentoring others, or building software, 
            I believe that strong relationships and clear communication drive the best outcomes.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you'll probably find me staying active, playing my cello,
            chasing my three kids, or diving into a new tech challenge.
            I love being in environments that value innovation, teamwork, and continuous learning and I'm excited
            to bring that energy into everything I do.
          </p>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default About;
