import React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";

const ProjectLayout = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Layout>
  );
};

export default ProjectLayout;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        path
      }
    }
  }
`;
