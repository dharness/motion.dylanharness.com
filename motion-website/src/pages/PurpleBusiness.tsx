import React from "react";
import styled from "styled-components";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
//webp
import concept1_webp from "../assets/projects/purple-business/concept-01.png?as=webp";
import concept2_webp from "../assets/projects/purple-business/concept-02.png?as=webp";
import concept3_webp from "../assets/projects/purple-business/concept-03.png?as=webp";
import concept4_webp from "../assets/projects/purple-business/concept-04.png?as=webp";
import concept5_webp from "../assets/projects/purple-business/concept-05.png?as=webp";
import concept6_webp from "../assets/projects/purple-business/concept-06.png?as=webp";
//png
import concept1_png from "../assets/projects/purple-business/concept-01.png";
import concept2_png from "../assets/projects/purple-business/concept-02.png";
import concept3_png from "../assets/projects/purple-business/concept-03.png";
import concept4_png from "../assets/projects/purple-business/concept-04.png";
import concept5_png from "../assets/projects/purple-business/concept-05.png";
import concept6_png from "../assets/projects/purple-business/concept-06.png";

const MediaSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
  gap: 2%;
  img {
    width: 100%;
  }
`;

export function PurpleBusiness() {
  const { vimeoId, name, aspectRatio } = getProjectData("purple-business");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          A small project in After Effects focused on delivering an animation in
          a short time frame, and with a minimal shape-centric design. Below are
          some explorations for different compositions and color schemes:
        </p>
        <MediaSection>
          <picture>
            <source srcSet={concept1_webp} type="image/webp" />
            <img src={concept1_png} alt="" />
          </picture>
          <picture>
            <source srcSet={concept2_webp} type="image/webp" />
            <img src={concept2_png} alt="" />
          </picture>
          <picture>
            <source srcSet={concept3_webp} type="image/webp" />
            <img src={concept3_png} alt="" />
          </picture>
          <picture>
            <source srcSet={concept4_webp} type="image/webp" />
            <img src={concept4_png} alt="" />
          </picture>
          <picture>
            <source srcSet={concept5_webp} type="image/webp" />
            <img src={concept5_png} alt="" />
          </picture>
          <picture>
            <source srcSet={concept6_webp} type="image/webp" />
            <img src={concept6_png} alt="" />
          </picture>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
