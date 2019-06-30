import styled from "styled-components";
import { primary } from "../colors";

const SocialIcon = styled.svg`
  transition: all 0.2s;

  &:hover {
    fill: ${primary};
  }
`;

export default SocialIcon;
