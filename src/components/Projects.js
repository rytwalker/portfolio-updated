import React from "react";
import { StaticQuery } from "gatsby";
import styled from "styled-components";
import { above } from "../utilities";
import ProjectCard from "./ProjectCard";
import { PROJECT_LIST_QUERY } from "../queries";

const Projects = () => (
  <StaticQuery
    query={PROJECT_LIST_QUERY}
    render={({ allMarkdownRemark }) => (
      <StyledProjects id="projects">
        <SectionHeading>Projects</SectionHeading>
        <ProjectsContainer>
          {allMarkdownRemark.edges.map(edge => (
            <ProjectCard
              key={edge.node.frontmatter.path}
              title={edge.node.frontmatter.title}
              src={edge.node.frontmatter.imgUrl.childImageSharp.fluid.src}
              path={edge.node.frontmatter.path}
            />
          ))}
        </ProjectsContainer>
      </StyledProjects>
    )}
  />
);

const StyledProjects = styled.section`
  padding-top: 50px;
`;

const ProjectsContainer = styled.div`
  ${above.md`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
  `}
  ${above.lg`
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2rem;
      
  `}
`;

const SectionHeading = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.6rem;
  margin-bottom: 3rem;
`;

export default Projects;
