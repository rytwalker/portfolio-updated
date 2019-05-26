import React from "react";
import styled from "styled-components";
import { black, primary } from "../utilities/colors";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  padding: 1rem 2rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #1f1f1f;
  }

  .btn-link {
    font-size: 2rem;
    font-weight: 300;
    color: #1f1f1f;
    text-decoration: none;
    text-transform: uppercase;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      color: ${primary};
    }

    .btn-icon {
      margin-left: 1rem;
    }
  }
`;

export default Button;
