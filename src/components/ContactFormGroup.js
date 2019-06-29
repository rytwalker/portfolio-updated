import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { primaryDark, primaryLight } from "../utilities";

const ContactFormGroup = ({
  inputName,
  inputValue,
  label,
  handleInputChange,
  textArea = false,
}) => {
  const [toggle, setToggle] = useState(false);

  const { value } = useSpring({ value: toggle ? 100 : 0, from: { value: 0 } });

  const focusInput = () => {
    setToggle(true);
  };

  const blurInput = e => {
    setToggle(false);
  };

  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      {!textArea ? (
        <FormInput
          type="text"
          name={inputName}
          id={inputName}
          onChange={e => handleInputChange(e)}
          onFocus={focusInput}
          onBlur={blurInput}
          value={inputValue}
        />
      ) : (
        <FormTextArea
          name={inputName}
          id={inputName}
          onChange={e => handleInputChange(e)}
          onFocus={focusInput}
          onBlur={blurInput}
          value={inputValue}
        />
      )}
      <animated.div
        style={{
          height: "4px",
          background: `${primaryDark}`,
          width: value.interpolate(value => `${value}%`),
          borderRadius: "3px",
        }}
      />
    </FormGroup>
  );
};

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const FormLabel = styled.label`
  font-size: 1.4rem;
  /* margin-bottom: 2px; */
  text-transform: uppercase;
  font-weight: 700;
`;
const FormInput = styled.input`
  font-size: 1.6rem;
  padding: 1rem;
  border: none;
  /* border-bottom: 2px solid #ddd; */
  font-family: inherit;
  font-size: 1.4rem;
  border-radius: 3px;
  transition: all 0.3s;
  transform-origin: left;
  &:focus {
    outline: 0;
    /* border-bottom: 2px solid ${primaryLight}; */
  }
`;

const FormTextArea = styled.textarea`
  font-size: 1.6rem;
  padding: 1rem;
  border: none;
  font-family: inherit;
  font-size: 1.4rem;
  border-radius: 3px;
  transition: all 0.3s;
  transform-origin: left;
  min-width: 100%;
  max-width: 100%;
  min-height: 14rem;
  &:focus {
    outline: 0;
  }
`;

export default ContactFormGroup;
