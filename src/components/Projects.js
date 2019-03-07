import React from "react";
// import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectImageOneSRC from "../images/suzies-scores-1.png";
import projectImageTwoSRC from "../images/treasure-hunt-1.png";
import projectImageThreeSRC from "../images/daily-pages-1.png";

// import { PROJECT_LIST_QUERY } from "../queries/project-list-query";

const PROJECT_LIST_QUERY = graphql`
  query ProjectListQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={PROJECT_LIST_QUERY}
    render={({ allMarkdownRemark }) => (
      <StyledProjects id="projects">
        <SectionHeading>Projects</SectionHeading>
        {allMarkdownRemark.edges.map(edge => (
          <ProjectCard
            key={edge.node.frontmatter.path}
            title={edge.node.frontmatter.title}
            src={projectImageOneSRC}
            path={edge.node.frontmatter.path}
          />
        ))}
        <ProjectCard title="Suzie's Scores" src={projectImageOneSRC} />
        <ProjectCard title="Treasure Hunt" src={projectImageTwoSRC} />
        <ProjectCard title="Daily Pages" src={projectImageThreeSRC} />
      </StyledProjects>
    )}
  />
);

const StyledProjects = styled.section`
  padding-top: 50px;
`;

const SectionHeading = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.6rem;
  margin-bottom: 3rem;
`;

export default Projects;
