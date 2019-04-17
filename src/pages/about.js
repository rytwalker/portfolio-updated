import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutCard from "../components/AboutCard";
import headshot from "../images/mobile-headshot.png";

const About = () => (
  <Layout>
    <SEO title="about" />
    <img
      src={headshot}
      alt="Ryan's face"
      style={{ width: "100%", display: "block" }}
    />
    <AboutCard />
  </Layout>
);

export default About;
