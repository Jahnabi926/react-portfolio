import React from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import useAOS from "../hooks/useAOS";

const AboutSection = styled.section`
  padding: 160px 0;
  background-color: #f5f5f5;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
    position: relative;
    font-weight: bold;
    &::after {
      content: "";
      width: 60px;
      height: 4px;
      background-color: #007bff;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.3s ease, left 0.3s ease;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 800px;
    line-height: 1.6;
    margin: 0 auto;
  }
`;

const About = () => {
  useAOS();

  return (
    <AboutSection id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        I am a Mathematics postgraduate with a passion for front-end
        development. My journey from solving complex mathematical problems to
        crafting intuitive and engaging user interfaces has been both exciting
        and fulfilling. I enjoy leveraging my analytical skills to create
        beautiful, functional web applications. Additionally, I have a strong
        background in testing, where I was dedicated to finding unique bugs and
        edge cases in both frontend websites and mobile apps. My commitment to
        thorough testing and quality assurance reflects my passion and
        dedication to delivering exceptional work.{" "}
      </p>
    </AboutSection>
  );
};

export default About;
