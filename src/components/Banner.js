import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useSpring, useTrail, animated } from "react-spring";
import { black, primary } from "../utilities";

const items = ["Ryan Walker", "Is a Web Developer."];
const classes = ["name", "tag"];
const config = { mass: 5, tension: 2000, friction: 200 };

const Banner = () => {
  const [toggle, set] = useState(false);
  const fade = useSpring({
    opacity: toggle ? 1 : 0,
    config: { duration: 500 },
  });
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  useEffect(() => {
    setTimeout(() => set(true), 250);
  }, []);
  return (
    <StyledBanner>
      <Hero>
        {trail.map(({ x, height, ...rest }, index) => (
          <AnimatedTitleContainer
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.span className={classes[index]}>
              {items[index]}
            </animated.span>
          </AnimatedTitleContainer>
        ))}
      </Hero>

      <AnimatedLink style={fade} className="btn-link" to="/#projects">
        <animated.span style={fade}>{"</> View Projects"}</animated.span>
      </AnimatedLink>
      {/* <button onClick={() => set(!toggle)}>Toggle</button> */}
    </StyledBanner>
  );
};

// const CodeIcon = styled(Icon)`
//   margin-left: 5px;
//   height: 20px;
//   fill: red;
// `;

const TitleContainer = styled.div`
  will-change: transform, opacity;
  /* overflow: hidden; */
  position: relative;
  /* padding-bottom: 1rem; */
  width: 100%;
`;

const AnimatedTitleContainer = animated(TitleContainer);

const StyledBanner = styled.div`
  min-height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn-link {
    border: 1px solid ${black};
    border-radius: 4px;
    padding: 1rem 2rem;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 2rem;
    font-weight: 300;
    color: #1f1f1f;
    text-decoration: none;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      border-color: #1f1f1f;
      color: ${primary};
      border: 1px solid ${primary};
    }
    span {
      margin-left: 5px;
    }
  }
`;

const Hero = styled.h1`
  position: relative;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
  height: 120px;
  overflow: hidden;
  .name,
  .tag {
    display: block;
    text-transform: uppercase;
    line-height: 0.9;
    z-index: 100;
    padding: 0 1.6rem;
  }
  .name {
    color: ${black};
    font-weight: 300;
    font-size: 4.8rem;
  }

  .tag {
    color: ${primary};
    font-weight: 300;
    font-size: 4rem;
    text-transform: lowercase;
  }
`;

const AnimatedLink = animated(Link);

export default Banner;
