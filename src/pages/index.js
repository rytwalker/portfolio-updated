import React from "react";

import Layout from "../components/layout";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Container } from "../elements/Container";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Banner />
      <Projects />
    </Container>
    <Contact />
  </Layout>
);

export default IndexPage;
