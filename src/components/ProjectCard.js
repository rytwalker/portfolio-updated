import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { primary, black } from "../utilities";

const ProjectCard = ({ description, links, path, src, title }) => {
  console.log(description);
  return (
    <StyledProjectCard>
      <img src={src} alt="project" />
      <ProjectCardHeading>{title}</ProjectCardHeading>
      <ButtonContainer>
        {/* <Button>MORE</Button> */}
        <Button href={links.website} target="_blank">
          SITE
        </Button>
        <Button href={links.github} target="_blank">
          GITHUB
        </Button>
      </ButtonContainer>
      <p>{description}</p>
      <StyledLink to={`/projects${path}`}>Read more...</StyledLink>
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  color: ${black};
  img {
    width: 100%;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${primary};
  &:visited {
    color: ${primary};
  }
`;

const ProjectCardHeading = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${black};
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  border: 1px solid ${black};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${black};
  text-decoration: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  &:visited {
    color: ${black};
  }
  &:hover {
    border-color: ${black};
    color: ${primary};
    border: 1px solid ${primary};
  }
`;

export default ProjectCard;
