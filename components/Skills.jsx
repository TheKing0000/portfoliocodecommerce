import React from "react";
import SkillElement from "./SkillElement";

const skills = [
  {
    name: "aws",
  },
  {
    name: "css",
  },
  {
    name: "firebase",
  },
  {
    name: "github1",
  },
  {
    name: "html",
  },
  {
    name: "javascript",
  },
  {
    name: "mongo",
  },
  {
    name: "nextjs",
  },
  {
    name: "node",
  },
  {
    name: "react",
  },
  {
    name: "shopify",
  },
  {
    name: "tailwind",
  },
];
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="h-full max-w-[1240px] mx-auto flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase dark:text-[#a7a9be]">
          {" "}
          Skills
        </p>
        <h2 className="py-8 dark:text-[#a7a9be]">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => {
            return <SkillElement urlAndName={skill.name} key={skill.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
