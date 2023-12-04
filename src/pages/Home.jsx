import React, { useEffect } from 'react'
import PortfolioCard from '../components/PortfolioCard'
import HomeCard from '../components/HomeCard'
import Aboutcard from '../components/Aboutcard'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, []);
  return (
      <div className=' w-[80vw] mx-auto '>
      <PortfolioCard />
      <HomeCard />
      <Aboutcard />
      <SkillsSection />
      <ProjectSection />
      <ContactSection/>
    </div>
  )
}

export default Home