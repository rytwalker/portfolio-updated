import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { above, primary } from "../utilities";
import ProjectCard from "./ProjectCard";

const PROJECT_LIST_QUERY = graphql`
  query ProjectListQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            description
            imgUrl {
              childImageSharp {
                fluid(maxWidth: 956) {
                  src
                }
              }
            }
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
        <SectionHeading>
          <span>my featured </span>Projects
        </SectionHeading>
        <ProjectsContainer>
          {allMarkdownRemark.edges.map(edge => (
            <ProjectCard
              key={edge.node.frontmatter.path}
              title={edge.node.frontmatter.title}
              description={edge.node.frontmatter.description}
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
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2.4rem;
  margin-bottom: 3rem;
  text-align: center;
  span {
    color: ${primary};
    text-transform: lowercase;
  }
`;

export default Projects;
