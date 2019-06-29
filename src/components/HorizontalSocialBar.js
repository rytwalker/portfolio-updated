import React from "react";
import styled from "styled-components";
import { Icon, primary } from "../utilities";

const HorizontalSocialBar = () => {
  return (
    <StyledSocialBar>
      <div className="container">
        <a href="https://github.com/rytwalker" target="_blank">
          <Icon name="Github" />
        </a>
        <a href="https://linkedin.com" target="blank">
          <Icon name="Linkedin" />
        </a>
        <a href="https://twitter.com/mr_ryanwalker" target="blank">
          <Icon name="Twitter" />
        </a>
      </div>
    </StyledSocialBar>
  );
};

const StyledSocialBar = styled.div`
  height: 50px;
  background-color: ${primary};
  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 85%;
    margin: 0 auto;
    a {
      height: 100%;
      display: flex;
      align-items: center;
      &:hover {
        color: blue;
      }
    }
  }
`;

export default HorizontalSocialBar;
