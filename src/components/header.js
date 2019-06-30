import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { useTransition } from "react-spring";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";
import { black } from "../utilities";
import useOnClickOutside from "../hooks/useOnClickOutside";
import HorizontalNavigation from "./HorizontalNavigation";

const getWidth = () => (window ? window.innerWidth : null);

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(getWidth());
  const transitions = useTransition(toggle, null, {
    from: { transform: "translate3d(-960px,0 ,0)" },
    enter: { transform: "translate3d(0,0 ,0)" },
    leave: { transform: "translate3d(-960px,0 ,0)" },
  });

  const ref = useRef();
  useOnClickOutside(ref, () => setToggle(false));

  useEffect(() => {
    // TO DO: add debouncer
    if (window) {
      window.addEventListener("resize", () => setScreenWidth(getWidth()));
    }
    return () => {
      if (window) {
        window.removeEventListener("resize", () => setScreenWidth(getWidth()));
      }
    };
  }, []);

  console.log(screenWidth);

  return (
    <StyledHeader ref={ref}>
      <HeaderContainer>
        {screenWidth < 800 ? (
          <Hamburger toggle={() => setToggle(!toggle)} />
        ) : (
          <HorizontalNavigation />
        )}
        <h1>
          <Link
            to="/"
            style={{
              color: `#fafafa`,
              textDecoration: `none`,
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <Icon name="NavLogo" /> */}
            {/* RW */}
            <img
              style={{ height: "35px" }}
              src={require("../images/logo.png")}
              alt="logo"
            />
          </Link>
        </h1>
        {transitions.map(
          ({ item, key, props }) =>
            item && <Navigation style={props} setToggle={setToggle} />
        )}
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${black};
  box-shadow: 0 1px 3px -3px rgba(0, 0, 0, 0.3);
  z-index: 2000;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 956px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export default Header;
