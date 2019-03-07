const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/projects${node.frontmatter.path}`,
          component: path.resolve("./src/components/ProjectLayout.js"),
          context: {
            slug: node.frontmatter.path,
          },
        });
      });
      resolve();
    });
  });
};
