import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingContainer = styled.div`
  font-size: 2.5em;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }

  & a:visited {
    color: inherit;
  }
`;
const LandingOption = styled.div`
  border: 2px solid;
  border-color: #6dd5ed #2193b0;
  width: 40%;
  height: auto;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 15%;
    border-width: 3px;
    margin-right: 5px;
  }
`;

const Landing = () => (
  <LandingContainer>
    <LandingOption>
      <Link to="/rent">RENT</Link>
    </LandingOption>
    <LandingOption>
      <Link to="/buy">BUY</Link>
    </LandingOption>
    <LandingOption>
      <Link to="/sell">SELL</Link>
    </LandingOption>
  </LandingContainer>
);

export default Landing;
