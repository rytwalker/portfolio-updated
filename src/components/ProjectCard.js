import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { primary } from "../utilities";

const ProjectCard = ({ src, title }) => {
  return (
    <StyledProjectCard>
      <img src={src} alt="project" />
      <ProjectCardHeading>{title}</ProjectCardHeading>
      <p>
        Aside from coding, I spend a night of my week hosting a pub quiz at a
        local restaurant. After realizing that there is..
      </p>
      <Link>See more...</Link>
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  img {
    width: 100%;
    margin-bottom: 2rem;
  }
  a,
  a:visited {
    color: ${primary};
  }

  p {
    margin-bottom: 1rem;
  }
`;

const ProjectCardHeading = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export default ProjectCard;
