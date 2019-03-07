import React from "react";
import { Link } from "gatsby";
import { animated } from "react-spring";
import styled from "styled-components";
import { primary, white } from "../utilities";

const Navigation = ({ style }) => {
  return (
    <StyledNav style={style}>
      <Link to="/">Home</Link>
      <Link to="/#projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/#contact">Contact</Link>
    </StyledNav>
  );
};

const StyledNav = styled(animated.nav)`
  position: absolute;
  width: 105%;
  left: -2.5%;
  top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(7, 7, 7, 0.6);

  a {
    color: ${white};
    font-weight: 900;
    text-transform: uppercase;
    padding: 1rem 2.2rem;
    font-size: 3.6rem;
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      background-color: rgba(7, 7, 7, 0.7);
      color: ${primary};
    }
  }
`;

export default Navigation;
