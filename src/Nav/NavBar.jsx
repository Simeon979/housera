import React, { useState } from "react";
import styled from "styled-components";
import "../css/all.css";

const NavBarContainer = styled.nav`
  font-size: 1em;
  color: white;
  @media screen and (min-width: 768px) {
    margin-top: 1em;
    display: flex;
  }
  padding: 0;
`;

const NavBarToggle = styled.i`
  color: #0e24a0;
  cursor: pointer;
  position: absolute;
  right: 10px;
  @media screen and (min-width: 768px) {
    display: none !important;
  }
`;

const LogoContainer = styled.div`
  padding: 0.5em;
  background-color: #dee4e7;
  font-size: 1.5em;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 40px;
    top: -5px;
    width: 10%;
    height: auto;
    font-size: 2em;
  }
`;

const Logo = styled.a`
  color: #0e24a0;
  font-family: "Dancing Script", cursive;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`;

const NavLinkItem = styled.li`
  text-align: center;
  font-weight: bold;
  padding: 0.5em;
  @media screen and (min-width: 768px) {
    margin-right: 1em;
    &:last-of-type {
      margin-right: 1.5em;
    }
  }
`;

const NavLinkContainer = styled.ul`
  list-style-type: none;
  display: ${props => (props.hidden ? "none" : "initial")};
  width: 100%;
  margin: 0;
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

const NavBar = () => {
  const [toggleState, setToggleState] = useState("close");

  const handleNavBarToggle = () => {
    console.log("toggled");
    if (toggleState === "close") {
      setToggleState("open");
    } else {
      setToggleState("close");
    }
  };
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo>Housera</Logo>
        <NavBarToggle onClick={handleNavBarToggle} className="fas fa-bars" />
      </LogoContainer>
      <NavLinkContainer hidden={toggleState === "close"}>
        <NavLinkItem href="#">
          <NavLink>Home</NavLink>
        </NavLinkItem>
        <NavLinkItem href="#">
          <NavLink>About</NavLink>
        </NavLinkItem>
        <NavLinkItem href="#">
          <NavLink>Services</NavLink>
        </NavLinkItem>
        <NavLinkItem href="#">
          <NavLink>Contact Us</NavLink>
        </NavLinkItem>
      </NavLinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;
