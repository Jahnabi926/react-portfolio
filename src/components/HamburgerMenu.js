import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background: #ff7f50;
  color: white;
  transform: translateX(${(props) => (props.open ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  @media (min-width: 500px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 20px 0;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

const HamburgerIcon = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  z-index: 1002; /* Above Sidebar and Overlay */

  @media (min-width: 500px) {
    display: none;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`;

const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Below Sidebar but above content */

  @media (min-width: 500px) {
    display: none;
  }
`;

// Motion Variants

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

const overlayVariants = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, transitionEnd: { display: "none" } },
};

const HamburgerMenu = ({ links, isHeroInView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Handle clicks outside the sidebar

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    //Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      //unbind the event listener on clean up

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <HamburgerIcon
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <GiHamburgerMenu />
      </HamburgerIcon>
      <Sidebar
        ref={sidebarRef}
        open={isOpen}
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        aria-hidden={!isOpen}
        role="navigation"
      >
        <CloseIcon onClick={closeSidebar} aria-label="Close navigation menu">
          <AiOutlineClose />
        </CloseIcon>
        {links.map((section) => (
          <MenuItem key={section} href={`#${section}`}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </MenuItem>
        ))}
      </Sidebar>
      <Overlay
        open={isOpen}
        onClick={closeSidebar}
        variants={overlayVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        aria-hidden={!isOpen}
      />
    </>
  );
};

export default HamburgerMenu;
