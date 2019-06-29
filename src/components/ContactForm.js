import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { black, lightGrey, secondary } from "../utilities";
import ContactFormGroup from "./ContactFormGroup";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState({ type: "", message: "" });

  const toggleSubmitMessage = (type, message) => {
    setMessage({ type, message });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // alert animation shit
  const showAlert = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: submitted ? 1 : 0,
    x: submitted ? 0 : 20,
    height: submitted ? 35 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  const handleFormSubmit = e => {
    e.preventDefault();
    if (
      !formValues.name.length ||
      !formValues.email.length ||
      !formValues.message.length
    ) {
      toggleSubmitMessage("failure", "Please fill out every field!");
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formValues }),
      })
        .then(() => {
          setFormValues({ name: "", email: "", message: "" });
          toggleSubmitMessage("success", "Thank you for reaching out!");
        })
        .catch(error => alert(error));
    }
  };

  const handleInputChange = e =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  return (
    <>
      <StyledForm
        onSubmit={handleFormSubmit}
        data-netlify="true"
        name="portfolio"
      >
        <AlertContainer>
          <AnimatedAlert
            style={{
              background:
                `${message.type}` === "success" ? `${secondary}` : "#B57760",
              opacity: showAlert.opacity,
              transform: showAlert.x.interpolate(
                x => `translate3d(0,${x}px,0)`
              ),
            }}
          >
            {message.message}
          </AnimatedAlert>
        </AlertContainer>
        <ContactFormGroup
          inputValue={formValues.name}
          inputName="name"
          label="name:"
          handleInputChange={handleInputChange}
        />
        <ContactFormGroup
          inputValue={formValues.email}
          inputName="email"
          label="email:"
          handleInputChange={handleInputChange}
        />
        <ContactFormGroup
          inputValue={formValues.message}
          inputName="message"
          label="message:"
          handleInputChange={handleInputChange}
          textArea={true}
        />

        <input type="hidden" name="form-name" value="contact" />
        <FormButton>Send</FormButton>
      </StyledForm>
      {/* <button onClick={() => setSubmitted(!submitted)}>Toggle</button> */}
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

const FormButton = styled.button`
  font-size: 1.8rem;
  color: ${lightGrey};
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  background: ${black};
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s all;
  text-align: center;
  text-decoration: none;
  &:hover {
    background: transparent;
    border: 1px solid ${black};
    color: ${black};
  }
  &:focus {
    outline: 0;
    border: 2px solid #eee;
  }
`;

const Alert = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #eee;
  height: 35px;
  will-change: transform, opacity;
  overflow: hidden;
  border: 1px solid black;
  position: relative;
  background: ${secondary};
  font-weight: bold;
  /* padding: 1rem; */
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.2s;
`;

const AlertContainer = styled.div`
  height: 35px;
  will-change: transform, opacity;
  overflow: hidden;
  /* border: 1px solid black; */
  position: relative;
`;

const AnimatedAlert = animated(Alert);

export default ContactForm;
