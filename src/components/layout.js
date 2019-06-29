/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { useSpring, animated } from "react-spring";

import Footer from "./Footer";
import Header from "./Header";
import HorizontalSocialBar from "./HorizontalSocialBar";
import "./layout.css";

const Layout = ({ children }) => {
  const [toggle, set] = useState(false);
  const fade = useSpring({ opacity: toggle ? 1 : 0 });
  useEffect(() => set(true), []);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <animated.div style={fade}>
          <Header siteTitle={data.site.siteMetadata.title} />

          <main>{children}</main>

          <HorizontalSocialBar />
          <Footer />
        </animated.div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
