import React from "react";
// import { Link } from "gatsby";
import styled from "styled-components";
import { above, primary, black } from "../utilities";

const screenWidth = window.innerWidth;

const ProjectCard = ({
  description,
  index,
  links,
  mobile,
  path,
  src,
  title,
}) => {
  return (
    <StyledProjectCard mobile={mobile}>
      {(index % 2 === 0 || screenWidth) < 960 && (
        <ImageContainer mobile={mobile}>
          <img src={src} alt="project" />
        </ImageContainer>
      )}
      <ContentContainer mobile={mobile}>
        <ProjectCardHeading>{title}</ProjectCardHeading>

        <p>{description}</p>
        {/* <StyledLink to={`/projects${path}`}>Read more...</StyledLink> */}
        <ButtonContainer>
          <Button href={links.website} target="_blank">
            SITE
          </Button>
          <Button href={links.github} target="_blank">
            GITHUB
          </Button>
        </ButtonContainer>
      </ContentContainer>
      {index % 2 !== 0 && screenWidth > 960 && (
        <ImageContainer mobile={mobile}>
          <img src={src} alt="project" />
        </ImageContainer>
      )}
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
  color: ${black};
  ${above.lg`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: ${({ mobile }) => (mobile ? "75%" : "100%")};
  `}
  p {
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  img {
    max-height: ${({ mobile }) => (mobile ? "500px" : "auto")};
    width: ${({ mobile }) => (mobile ? "auto" : "100%")};
  }
`;

const ContentContainer = styled.div`
  ${above.lg`
      padding: ${({ mobile }) => (mobile ? "0 5.25rem" : "0 13rem")};
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
   `}
`;

// const StyledLink = styled(Link)`
//   color: ${primary};
//   &:visited {
//     color: ${primary};
//   }
// `;

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
  margin-top: 5rem;
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
