import React from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import useAOS from "../hooks/useAOS";

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: #f5f5f5;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #007bff;
  }
`;
const Projects = () => {
  useAOS();

  const projects = [
    {
      title: "Finding Falcone",
      description:
        "A strategic web-based game built with React.js, where the player’s objective is to find Queen Falcone hidden on one of six planets. The game involves selecting planets and vehicles to search for the Queen, all while managing limited resources like fuel and time. The player must make decisions on which vehicle to use based on fuel capacity and speed, making it a challenging and engaging experience. ",
      link: "https://github.com/Jahnabi926/geektrust-finding-falcone.git",
    },
    {
      title: "Reeco",
      description:
        "A dynamic shopping cart application built with React.js. Users can filter products using a search bar, add new items, approve or mark items as missing, and modify item details such as price and quantity. The app offers a streamlined interface for managing product lists efficiently.",
      link: "https://github.com/Jahnabi926/Reeco.git",
    },
    {
      title: "React To-Do App",
      description:
        "A dynamic to-do list application developed with React.js. This project allows users to efficiently manage their tasks with features including adding new tasks, editing existing ones, deleting tasks, and marking tasks as completed.",
      link: "https://github.com/Jahnabi926/React-todo-App",
    },
    {
      title: "Linked Dropdowns",
      description:
        "An interactive web application demonstrating dynamic dropdown menus where the options in one dropdown are dependent on the selection of another. Built with React.js, this project showcases the ability to handle linked data and user interactions, making it useful for forms or applications requiring hierarchical or dependent selections.",
      link: "https://github.com/Jahnabi926/Linked-Dropdowns",
    },
  ];

  return (
    <ProjectsSection id="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
