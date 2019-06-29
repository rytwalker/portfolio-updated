import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import emailIcon from "../images/icons/email-icon.svg";
import fireIcon from "../images/icons/fire-icon.svg";
import linkedinIcon from "../images/icons/linkedin-icon.svg";
import githubIcon from "../images/icons/github-icon.svg";
import twitterIcon from "../images/icons/twitter-icon.svg";
import headshot from "../images/headshot.png";
import { FlexContainer, Half, Heading } from "../elements";
import { above, primary, primaryLight, darkGrey } from "../utilities";

const skills = [
  "JavaScript",
  "React",
  "HTML/CSS",
  "Python",
  "Node",
  "Express",
  "SQL",
  "C",
];

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutLeft>
        <img src={headshot} alt="It's me!" className="headshot" />
      </AboutLeft>
      <AboutRight>
        <div>
          <Heading style={{ marginBottom: "3rem", color: "#eee" }}>
            About
          </Heading>
          <p
            style={{
              marginBottom: "5rem",
              color: "#eee",
              fontWeight: "300",
              fontSize: "1.8rem",
            }}
          >
            My name is Ryan Walker and I am a full-stack developer from
            Youngstown, Ohio. Learning how to code started out as a hobby for
            me, but I grew obsessed with building things that required both
            creativity and logic. Right now I am currently enrolled at Lambda
            School where I spend 40+ hours a week learning the latest web
            development trends and fundamental computer science skills to bring
            my projects to life.{" "}
          </p>
          <FlexContainer>
            <Half>
              <SubHeading>Let's Connect</SubHeading>
              <ConnectListItem
                href="mailto:rytwalker@gmail.com"
                target="_blank"
              >
                <img src={emailIcon} alt="Email" />
                Email
              </ConnectListItem>
              <ConnectListItem
                href="https://www.linkedin.com/in/ryan-walker-41082b47/"
                target="_blank"
              >
                <img src={linkedinIcon} alt="Linkedin" />
                Linkedin
              </ConnectListItem>
              <ConnectListItem
                href="https://github.com/rytwalker"
                target="_blank"
              >
                <img src={githubIcon} alt="Github" />
                Github
              </ConnectListItem>
              <ConnectListItem
                href="https://twitter.com/mr_ryanwalker"
                target="_blank"
              >
                <img src={twitterIcon} alt="Twitter" />
                Twitter
              </ConnectListItem>
            </Half>
            <Half>
              <SubHeading>Skills</SubHeading>
              {skills.map(skill => (
                <SkillsListItem key={skill}>
                  <img src={fireIcon} alt="Fire" />
                  {skill}
                </SkillsListItem>
              ))}
            </Half>
          </FlexContainer>
        </div>
      </AboutRight>
    </AboutContainer>
  );
};

const AboutContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  ${above.lg`
  height: calc(100vh - 50px);
  `}
`;

const AboutLeft = styled(Half)`
  /* display: flex; */
  position: relative;
  display: none;
  height: 70%;
  color: #eee;
  ${above.xs`
    height: 100%;
  `}
  ${above.md`
    width: 0%;
  `}
  ${above.lg`
    width: 50%;
    display: block
  `}
  .headshot {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    max-height: 100%;
    display: none;
 
    ${above.lg`
      display: block;
    `}
  }
`;

const AboutRight = styled(Half)`
  align-items: center;
  flex-wrap: wrap;
  padding: 5rem;
  background-color: #9e976b;
  height: auto;
  ${above.md`
    width: 100%;
  `}
  ${above.lg`
    width: 50%;
  `}
`;

const SubHeading = styled.h2`
  width: 100%;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #eee;
`;

const SkillsListItem = styled.p`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 300;
  color: #eee;
  display: flex;
  align-items: center;
  width: 100%;
  img {
    width: 20px;
    height: 20px;
    margin-right: 1.5rem;
    color: #ef4d4f;
  }
`;

const ConnectListItem = styled.a`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #eee;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  img {
    width: 30px;
    height: 30px;
    margin-right: 1.5rem;
  }
  &:visited {
    color: #eee;
  }

  &:hover {
    color: ${darkGrey};
  }
`;

export default AboutPage;
