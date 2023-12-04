import React from "react";
import ProjectCard from "./ProjectCard";
import quoteImg from "../assets/quoteImg.png"
import lightLampImg from "../assets/lightLampImg.png"
import employeeImg from "../assets/employeeImg.png"
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useRef } from "react";

const ProjectSection = () => {
  const scrollRef = useRef(null);

  const hScrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const hScrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };
  return (
    <div data-aos="fade-down" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">
        My Projects :)
      </h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide"
      >
        <ProjectCard
          GitLink={"https://github.com/Kshitijawasthi/quote_generator"}
          HostLink={"https://joyful-crumble-ba82d7.netlify.app/"}
          projectName={"Quote Generator"}
          topicDesc={`Its a quote generating website which gives different quotes using api method`}
          projectImg={quoteImg}
        />
        <ProjectCard
          GitLink={"https://github.com/Kshitijawasthi/lightlamp"}
          HostLink={"https://astonishing-hummingbird-18a8d6.netlify.app/"}
          projectName={"Light Lamp"}
          topicDesc={`Its a UI In which we added a button turn off and turn on the lamp in our website `}
          projectImg={lightLampImg}
        />
        <ProjectCard
          GitLink={"https://github.com/Kshitijawasthi/employee_managment"}
          HostLink={"https://splendid-sherbet-918d2c.netlify.app/"}
          projectName={"Employee Management Software"}
          topicDesc={`This website work as managing employees in our company name email mob no every thing is included `}
          projectImg={employeeImg}
        />
        <ProjectCard
          GitLink={"https://github.com/Kshitijawasthi/quote_generator"}
          HostLink={""}
          projectName={"Quote Generator"}
          topicDesc={`Its a quote generating website which gives different quotes using api method`}
          projectImg={quoteImg}
        />
        <ProjectCard
          GitLink={"https://github.com/Kshitijawasthi/quote_generator"}
          HostLink={""}
          projectName={"Quote Generator"}
          topicDesc={`Its a quote generating website which gives different quotes using api method`}
          projectImg={quoteImg}
        />
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowSmLeft
          onClick={hScrollLeft}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
        <h2 className="gradient-text font-mono text-lg uppercase">
          Slide for more
        </h2>
        <HiArrowSmRight
          onClick={hScrollRight}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
