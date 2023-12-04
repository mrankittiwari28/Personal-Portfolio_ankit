import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsSection = () => {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
        <SkillsCard title={"Reactjs"} value={85} />
        <SkillsCard title={"Nodejs"} value={65} />
        <SkillsCard title={"Expressjs"} value={75} />
        <SkillsCard title={"TailwindCss"} value={75} />
        <SkillsCard title={"MongoDB"} value={55} />
      </div>
    </div>
  );
};

export default SkillsSection;
