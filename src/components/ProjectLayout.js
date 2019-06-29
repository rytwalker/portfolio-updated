import React from "react";
import styled from "styled-components";
import Layout from "./layout";
import { graphql } from "gatsby";
import { Container } from "../elements/Container";
import { white, primary, darkGrey } from "../utilities";

const ProjectLayout = ({ data }) => {
  return (
    <Layout>
      <Container>
        <ProjectHeading>{data.markdownRemark.frontmatter.title}</ProjectHeading>
        <Markdown
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
        <ProjectTechContainer>
          {data.markdownRemark.frontmatter.tech.map(tech => (
            <ProjectTech key={tech}>{tech}</ProjectTech>
          ))}
        </ProjectTechContainer>
        <ProjectLinks>
          <a href={data.markdownRemark.frontmatter.links.github}>Github:</a>
          <a href={data.markdownRemark.frontmatter.links.website}>Site:</a>
        </ProjectLinks>
      </Container>
    </Layout>
  );
};

const ProjectHeading = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  padding: 2rem 0;
  text-transform: uppercase;
  font-weight: 300;
`;

const Markdown = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const ProjectTechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  width: 800px;
  margin: 0 auto;
`;

const ProjectTech = styled.div`
  /* border-bottom: 3px solid #8fdfde; */
  margin-right: 0.8rem;
  background: ${white};
  padding: 0.5rem;
  border-radius: 2.5px;
`;

const ProjectLinks = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 3rem;

  a,
  a:visited {
    font-size: 1.6rem;
    color: ${darkGrey};
    transition: all 0.2s;
    text-decoration: none;
    border-bottom: 2px solid ${primary};
    border-top: 3px solid transparent;
    /* border-radius: 5px; */
    padding: 0.5rem;
    &:hover {
      color: ${white};
      background: ${primary};
      border-top: 3px solid ${primary};
    }
    &:first-child {
      margin-right: 3rem;
    }
  }
`;

export default ProjectLayout;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        path
        tech
        links {
          github
          website
        }
      }
    }
  }
`;
