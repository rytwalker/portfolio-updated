import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Icon, black, primary, white } from "../utilities";
import Button from "../elements/Button";

const Banner = () => {
  return (
    <StyledBanner>
      <Hero>
        <span className="name">Ryan Walker</span>
        <span className="tag">Is a Web Developer.</span>
        {/* <HeroBg width="100%" height="193" viewBox="0 0 333 193" fill="none">
          <circle cx="236.5" cy="96.5" r="96.5" fill="#8FDFDE" />
          <circle
            cx="96.5"
            cy="96.5"
            r="96.5"
            fill="#D1345B"
            fill-opacity="0.8"
          />
        </HeroBg> */}
      </Hero>
      <Button>
        <Link className="btn-link" to="/#projects">
          <Icon name="code" className="btn-icon" />
          View Projects
        </Link>
      </Button>
    </StyledBanner>
  );
};

const DownArrow = styled(Icon)`
  width: 30px;
  height: 30px;
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
    line-height: 0.9;
    z-index: 100;
    padding: 0 1.6rem;
  }
  .name {
    color: ${black};
    font-weight: 900;
    font-style: italic;
    font-size: 4.8rem;
  }

  .tag {
    color: ${primary};
    font-weight: 300;
    font-size: 3.6rem;
    text-transform: lowercase;
  }
`;

export default Banner;
