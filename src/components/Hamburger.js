import React from "react";
import styled from "styled-components";
import { white } from "../utilities";

const Hamburger = ({ toggle }) => {
  return (
    <HamburgerContainer onClick={toggle}>
      <Top />
      <Line />
      <Bottom />
    </HamburgerContainer>
  );
};

const HamburgerContainer = styled.div`
  width: 30px;
  height: 19px;
  cursor: pointer;
  position: relative;
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  position: absolute;
  background: ${white};
  border-radius: 2px;
  top: 50%;
`;

const Top = styled(Line)`
  transform: translate3d(0, -8px, 0);
`;

const Bottom = styled(Line)`
  transform: translate3d(0, 8px, 0);
`;

export default Hamburger;
