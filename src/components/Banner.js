import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Icon, black, white } from "../utilities";

const Banner = () => {
  return (
    <StyledBanner>
      <Hero>
        <span className="name">Ryan Walker</span>
        <span className="tag">Is a Developer</span>
        <HeroBg width="100%" height="193" viewBox="0 0 333 193" fill="none">
          <circle cx="236.5" cy="96.5" r="96.5" fill="#8FDFDE" />
          <circle
            cx="96.5"
            cy="96.5"
            r="96.5"
            fill="#D1345B"
            fill-opacity="0.8"
          />
        </HeroBg>
      </Hero>
      {/* <a href="/about"> */}
      <DownArrow name="arrowDown" />
      {/* </a> */}
    </StyledBanner>
  );
};

const DownArrow = styled(Icon)`
  width: 50px;
  height: 50px;
`;

const HeroBg = styled.svg`
  position: absolute;
  top: 0;
  z-index: -100;
`;

const StyledBanner = styled.div`
  min-height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hero = styled.h1`
  width: 333px;
  height: 193px;
  position: relative;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
  .name,
  .tag {
    display: block;
    text-transform: uppercase;
    line-height: 1;
    z-index: 100;
    padding: 0 1.6rem;
  }
  .name {
    color: ${black};
    font-weight: 900;
    font-size: 3.6rem;
  }

  .tag {
    color: ${white};
    font-weight: 700;
    font-size: 2.8rem;
  }
`;

export default Banner;
