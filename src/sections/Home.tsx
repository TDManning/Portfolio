import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

export const Home: React.FC = () => {
  return (
    <section className="text-center p-8">
      
<AnimatedDiv>
  <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
</AnimatedDiv>
      <p className="text-lg mt-2">A showcase of my work and skills.</p>
    </section>
  );
};

export default Home;