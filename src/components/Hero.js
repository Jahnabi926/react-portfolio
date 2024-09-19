import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ecf0f1, #ffb6c1);

  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Decorative background elements */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    z-index: 0;
  }

  &::before {
    top: -150px;
    left: -150px;
  }

  &::after {
    bottom: -150px;
    right: -150px;
  }
`;

const HeroContent = styled.div`
  z-index: 1;
`;

const HeroHeading = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ffcc00, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2f4f4f;
  margin-bottom: 40px;
  max-width: 600px;
`;

const HeroButton = styled(motion.button)`
  padding: 12px 25px;
  font-size: 1.2rem;
  color: #f39c12;
  background-color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #f39c12;
    color: white;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`;

const animationProps = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1,
  },
};

const handleScrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    window.scrollTo({
      top: projectsSection.offsetTop,
      behavior: "smooth",
    });
  }
};

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <HeroHeading {...animationProps} style={{ y: -50 }}>
          Jahnabi Sarma
        </HeroHeading>
        <HeroDescription {...animationProps} transition={{ delay: 0.5 }}>
          Passionate Mathematician Turned Frontend Developer
        </HeroDescription>
        <HeroButton
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          onClick={handleScrollToProjects}
        >
          View My Work
        </HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
