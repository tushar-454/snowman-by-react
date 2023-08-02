import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import Skill from './Skill/Skill';
import Workshipe from './Workshipe/Workshipe';
import DarkMode from './darkmode/DarkMode';

const Home = () => {
  return (
    <>
      <DarkMode />
      <Header />
      <Features />
      <Workshipe />
      <AboutMe />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
