import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";

const Nav = styled.nav`
  background-color: #ff7f50;
  padding: 15px 30px;
  position: sticky;
  top: 0;
  max-width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px); /* Blurred effect */

  @media (max-width: 500px) {
    display: none; /* Hides Nav on small screens */
  }
`;

const NavLink = styled(motion.a)`
  color: white;
  margin: 0 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  position: relative;
  text-transform: uppercase;
  transition: color 0.3s ease;

  /* Hover Effects */
  &:hover {
    color: #ffcc00; /* Changes color on hover */
  }

  /* Adding underline effect on hover */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background-color: #ffcc00;
    left: 50%;
    bottom: -5px;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const navMotionProps = {
  whileHover: { scale: 1.1 },
  transition: { duration: 0.2 },
};

const Header = () => {
  const heading = ["hero", "about", "projects", "skills", "contact"];

  return (
    <>
      <Nav>
        {heading.map((section) => (
          <NavLink key={section} href={`#${section}`} {...navMotionProps}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </NavLink>
        ))}
      </Nav>
      <HamburgerMenu links={heading} />
    </>
  );
};

export default Header;
