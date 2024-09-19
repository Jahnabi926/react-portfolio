import React from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import useAOS from "../hooks/useAOS";

const SkillsSection = styled.section`
  padding: 100px 0;
  background-color: #fff;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px;

  @media (min-width: 615px) {
    flex-direction: row; /* Row layout for screens larger than 615px */
  }
`;

const SkillCard = styled.div`
  background: linear-gradient(135deg, #ecf0f1, #a3d2ca);
  color: black;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Skills = () => {
  useAOS();

  const skills = ["HTML", "CSS", "JavaScript", "React", "Redux"];

  return (
    <SkillsSection id="skills" data-aos="fade-up">
      <h2>My Skills</h2>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <h3>{skill}</h3>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
