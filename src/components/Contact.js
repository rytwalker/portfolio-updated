import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import { SectionHeading } from "../elements/SectionHeading";
import { Container } from "../elements/Container";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <Container style={{ maxWidth: "800px" }}>
        <SectionHeading>Contact</SectionHeading>
        <p>
          I am searching for a role where I can use my development skills to
          make amazing things for the world. Let’s talk!
        </p>
        <ContactForm />
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background-color: #85a8ab;
  padding: 5rem 0;
  p {
    margin-bottom: 3rem;
  }
`;

export default Contact;
