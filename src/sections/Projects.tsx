import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

export const Projects: React.FC = () => {
  return (
    <section className="p-8">
      <AnimatedDiv>
  <h1 className="text-4xl font-bold">Projects</h1>
</AnimatedDiv>

      <p className="mt-2">Check out some of my work.</p>
    </section>
  );
};

export default Projects;