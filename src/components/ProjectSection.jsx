import React from "react";
import ProjectCard from "./ProjectCard";
import proImg from "../assets/proImg.jpeg";
import screeImg from "../assets/screeImg.png"
import ticTok from "../assets/tic_tok.jpeg"
import library from "../assets/library.jpeg"

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
          GitLink={"https://github.com/mrankittiwari28/CLI-Based-Facebook-App.git"}
          HostLink={"https://mrankittiwari28.github.io/CLI-Based-Facebook-App/"}
          projectName={"CLI based facebook App"}
          topicDesc={`A command-line interface (CLI) is a text-based user interface (UI) used to run programs`}
          projectImg={screeImg}
        />
        <ProjectCard
          GitLink={"https://github.com/mrankittiwari28/Product-landing-page.git"}
          HostLink={"https://qdy5ohppzepbfmyzgmphgq.on.drv.tw/www.Product-landing-page.com/pagelanding.html"}
          projectName={"Product Landing Page"}
          topicDesc={`A product landing page is a page that gives you the relevant information you need regarding a product to make a purchase `}
          projectImg={proImg}
        />
        <ProjectCard
          GitLink={"https://github.com/mrankittiwari28/Tic-Tac-Toe-Game.git"}
          HostLink={"https://mrankittiwari28.github.io/Tic-Tac-Toe-Game/"}
          projectName={"Tic Tac Toe Game"}
          topicDesc={`Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. `}
          projectImg={ticTok}
        />
        <ProjectCard
          GitLink={"https://github.com/mrankittiwari28/Library-Management-System.git"}
          HostLink={""}
          projectName={"Library Management System"}
          topicDesc={`Library management systems are designed to manage the movement of books and maintain records of the members in a library`}
          projectImg={library}
        />
        
        <ProjectCard
          GitLink={"https://github.com/mrankittiwari28/Library-Management-System.git"}
          HostLink={""}
          projectName={"Library Management System"}
          topicDesc={`Library management systems are designed to manage the movement of books and maintain records of the members in a library`}
          projectImg={library}
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
