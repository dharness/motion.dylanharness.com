import React from "react";
import styled from "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import { isMobileDevice, kebabToTitle } from "../utils";
import {
  MOBILE_CUTOFF,
  contentWidthPx,
  contentWidthVw,
  projectGridGap,
} from "../sharedStyles";

const ProjectThumbnailWrapper = styled.div<{ $bgColor: string }>`
  background: ${(p) => p.$bgColor};
  position: relative;
  &:hover {
    cursor: pointer;
  }
  width: 100%;
  min-height: min(
    calc((0.75 * ${contentWidthVw} / 2) - (${projectGridGap} / 2)),
    calc((0.75 * ${contentWidthPx} / 2) - (${projectGridGap} / 2))
  );
`;

const ProjectThumbnailImg = styled.img`
  justify-self: start;
  &:nth-of-type(2n) {
    justify-self: end;
  }
  max-width: 100%;
`;

const ProjectThumbnailOverlay = styled.div<{
  $hoverColor: string;
  $doHover: boolean;
}>`
  position: absolute;
  z-index: 1;
  background: ${(props) => props.$hoverColor};
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  ${ProjectThumbnailWrapper}:hover & {
    opacity: ${(p) => (p.$doHover ? 1 : 0)};
  }
`;

const ProjectTitle = styled.div<{ $doHover: boolean }>`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
  font-family: futura-pt, sans-serif;
  font-size: 36px;
  font-weight: 700;
  text-align: center;

  ${ProjectThumbnailWrapper}:hover & {
    opacity: ${(p) => (p.$doHover ? 1 : 0)};
  }
`;

const StyledLink = styled(Link)`
  @media (max-width: ${MOBILE_CUTOFF}) {
    padding-top: 4%;
    &:first-of-type {
      padding-top: 0;
    }
  }
`;

const isMobile = isMobileDevice();
const doHover = !isMobile;
export function ProjectThumbnail(props: any) {
  const { hoverColor, name, thumbnailSet } = props;
  return (
    <StyledLink to={"/" + name}>
      <ProjectThumbnailWrapper $bgColor={hoverColor}>
        <ProjectTitle $doHover={doHover}>
          <p>{kebabToTitle(name)}</p>
        </ProjectTitle>
        <ProjectThumbnailOverlay $hoverColor={hoverColor} $doHover={doHover} />
        <picture>
          <source srcSet={thumbnailSet.webp} type="image/webp" />
          <ProjectThumbnailImg src={thumbnailSet.png} alt="" />
        </picture>
      </ProjectThumbnailWrapper>
    </StyledLink>
  );
}
