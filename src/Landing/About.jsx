import React from "react";
import styled from "styled-components";

const About = styled.section`
  & h2 {
    margin: 0;
    padding: 0.83em;
    text-align: center;
  }
`;

const AboutContainer = styled.div`
  padding: 0 1em;
  text-align: justify;
  text-justify: auto;

  & p:first-of-type {
    font-size: 120%;
    font-weight: bold;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 150%;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 60%;
    margin-left: 10%;
    font-size: 1.2em;
  }
`;

const AboutUs = () => (
  <About id="about">
    <h2>About us</h2>
    <AboutContainer>
      <p>
        We want to put an end to the stress and pain of securing a home of your
        choice.
      </p>
      <p>
        Housera wants to eradicate the miscommunication between your preference
        and the way agents interprets it. We present a smart, simple platform
        that enables renters to be more personal, flexible and intentional in
        making their choices for the exact type of house they want. So you are
        only ever matched with properties that meet your needs.
      </p>
    </AboutContainer>
  </About>
);

export default AboutUs;
