import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "../components/Projects";
import { Container } from "../elements/Container";

const About = () => (
  <Layout>
    <SEO title="projects" />
    <Container>
      <Projects all />
    </Container>
  </Layout>
);

export default About;
