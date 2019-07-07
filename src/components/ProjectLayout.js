import React from "react";
import styled from "styled-components";
import Layout from "./layout";
import { graphql } from "gatsby";
import { Container } from "../elements/Container";
import { white, primary, black } from "../utilities";

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
          mobile={data.markdownRemark.frontmatter.mobile}
        />
        <ProjectTechContainer>
          <h3>TECH:</h3>
          {data.markdownRemark.frontmatter.tech.map(tech => (
            <ProjectTech key={tech}>{tech}</ProjectTech>
          ))}
        </ProjectTechContainer>
        <ProjectLinks>
          <a href={data.markdownRemark.frontmatter.links.github}>Github</a>
          <a href={data.markdownRemark.frontmatter.links.website}>Site</a>
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
  max-width: 800px;
  margin: 0 auto;
  ul {
    list-style: circle;
    padding-left: 2rem;
  }
  .gatsby-resp-image-wrapper {
    /* height: 500px; */
    
  }
  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    margin: 0 auto;
    height: ${({ mobile }) => (mobile ? "500px !important" : "")};
    width: ${({ mobile }) => (mobile ? "auto!important" : "100%")};
    padding-bottom: ${({ mobile }) => (mobile ? "0px !important" : "0")};
    /* left: ${({ mobile }) => (mobile ? "35% !important" : "200px")}; */
  }

  .gatsby-resp-image-background-image {
    /* opacity: ${({ mobile }) => (mobile ? "0 !important" : "0")}; */
    /* position: ${({ mobile }) =>
      mobile ? "static !important" : "relative"}; */
  }
`;

const ProjectTechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto;
  h3 {
    width: 100%;
    font-size: 1.8rem;
    font-style: normal;
  }
`;

const ProjectTech = styled.div`
  /* border-bottom: 3px solid #8fdfde; */
  margin-right: 0.8rem;
  background: ${white};
  padding: 0.5rem;
  border-radius: 2.5px;
`;

const ProjectLinks = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-start;
  a {
    width: 150px;
    margin-right: 3rem;
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
    &:visited {
      color: ${black};
    }
    &:hover {
      border-color: ${black};
      color: ${primary};
      border: 1px solid ${primary};
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
        mobile
        imgUrls {
          childImageSharp {
            fluid(maxWidth: 956) {
              src
            }
          }
        }
        links {
          github
          website
        }
      }
    }
  }
`;
