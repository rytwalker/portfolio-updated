import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectImageOneSRC from "../images/suzies-scores-1.png";
import projectImageTwoSRC from "../images/treasure-hunt-1.png";
import projectImageThreeSRC from "../images/daily-pages-1.png";

const Projects = () => {
  return (
    <StyledProjects>
      <SectionHeading>Projects</SectionHeading>
      <ProjectCard title="Suzie's Scores" src={projectImageOneSRC} />
      <ProjectCard title="Treasure Hunt" src={projectImageTwoSRC} />
      <ProjectCard title="Daily Pages" src={projectImageThreeSRC} />
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

const SectionHeading = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.6rem;
  margin-bottom: 3rem;
`;

export default Projects;
