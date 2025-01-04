import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { Video } from "../components/Video";
import { FigureText } from "../components/FigureText";
import { VideoTitle } from "../components/VideoTitle";
import { getProjectData, kebabToTitle } from "../utils";
import { PageContentWrapper } from "../components/PageContentWrapper";
import blender from "../assets/projects/gator-gum/blender_package_wide.webm";
import blender_mp4 from "../assets/projects/gator-gum/blender_package_wide.mp4";

import styled from "styled-components";
import packageDesign_webp from "../assets/projects/gator-gum/package-design.png?as=webp";
import packageDesign_png from "../assets/projects/gator-gum/package-design.png";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 40px;
  img {
    width: 100%;
  }
`;

export function GatorGum() {
  const { vimeoId, name, aspectRatio } = getProjectData("gator-gum");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          Gator gum is inspired by fun, bold, color palettes and vintage
          packaging design. The frame by frame animation was done in Toon Boom
          Harmony, and cleaned up in After Effects. The gum package was made in
          blender and composited for a seamless loop.
        </p>
        <MediaSection>
          <picture>
            <source srcSet={packageDesign_webp} type="image/webp" />
            <img src={packageDesign_png} alt="" />
          </picture>
          <FigureText>Fig 1. Gum package illustration</FigureText>
          <Video src={[blender, blender_mp4]} width={"100%"}></Video>
          <FigureText>Fig 2. Gum package in Blender</FigureText>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
