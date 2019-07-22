import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { primary, black } from "../utilities";
import ProjectCard from "./ProjectCard";

const PROJECT_LIST_QUERY = graphql`
  query ProjectListQuery {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            description
            mobile
            links {
              github
              website
            }
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

const PROJECT_LIST_QUERY_ALL = graphql`
  query ProjectListQueryAll {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            description
            mobile
            links {
              github
              website
            }
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

const Projects = ({ all }) => (
  <StaticQuery
    query={all ? PROJECT_LIST_QUERY_ALL : PROJECT_LIST_QUERY}
    render={({ allMarkdownRemark }) => (
      <StyledProjects id="projects">
        <SectionHeading>
          {!all && <span>my featured </span>}Projects
        </SectionHeading>
        <ProjectsContainer>
          {allMarkdownRemark.edges.map((edge, index) => (
            <ProjectCard
              key={edge.node.frontmatter.path}
              title={edge.node.frontmatter.title}
              description={edge.node.frontmatter.description}
              src={edge.node.frontmatter.imgUrl.childImageSharp.fluid.src}
              path={edge.node.frontmatter.path}
              links={edge.node.frontmatter.links}
              index={index}
              mobile={edge.node.frontmatter.mobile}
            />
          ))}
        </ProjectsContainer>
        {/* {!all && <Button to="/projects">View All Projects</Button>} */}
      </StyledProjects>
    )}
  />
);

const StyledProjects = styled.section`
  padding-top: 50px;
  margin-bottom: 3rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin-top: 5rem;
`;

const Button = styled(Link)`
  border: 1px solid ${black};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${black};
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin: auto;
  &:visited {
    color: ${black};
  }
  &:hover {
    border-color: ${black};
    color: ${primary};
    border: 1px solid ${primary};
  }
`;

export default Projects;
