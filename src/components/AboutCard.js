import React from "react";
import styled from "styled-components";
import { primaryLight } from "../utilities/index";

const AboutCard = () => {
  return (
    <StyledAboutCard>
      <h1>About</h1>
      <p>
        My name is Ryan Walker and I am a full-stack developer from Youngstown,
        Ohio. I started my journey as a developer in the fall of 2017. Ever
        since starting my development journey, I have fallen more in love with
        the process. I am currently enrolled at Lambda School. I love JavaScript
        and learn more about it everyday. I also know: HTML, CSS, LESS, Python,
        and C. And like using frameworks like React and Django.
      </p>
      <div>
        <h2>Let's Connect</h2>
        <ul>
          <li>
            <a href="http://gmail.com">Email</a>
          </li>
          <li>
            <a href="http://gmail.com">Linkedin</a>
          </li>
          <li>
            <a href="http://gmail.com">Github</a>
          </li>
          <li>
            <a href="http://gmail.com">Twitter</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>Python</li>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>C</li>
        </ul>
      </div>
    </StyledAboutCard>
  );
};

const StyledAboutCard = styled.div`
  background: ${primaryLight};
`;

export default AboutCard;
