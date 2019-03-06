import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>© {new Date().getFullYear()} by Ryan Walker</StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 50px;
  font-weight: 900;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
