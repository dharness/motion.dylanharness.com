import React from "react";
import styled from "styled-components/macro";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import { Video } from "../components/Video";
import ruffs from "../assets/projects/bronco-henry/cowboy-ruffs.mp4";
import cowboyLeft_png from "../assets/projects/bronco-henry/cowboy_L_alpha.png";
import cowboyRight_png from "../assets/projects/bronco-henry/cowboy_R_alpha.png";
import cowboyLeft_webp from "../assets/projects/bronco-henry/cowboy_L_alpha.png?as=webp";
import cowboyRight_webp from "../assets/projects/bronco-henry/cowboy_R_alpha.png?as=webp";
import { FigureText } from "../components/FigureText";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;

  picture {
    max-width: 48%;
  }
  img {
    width: 100%;
  }
`;

const StyledVideoDiv = styled.div`
  max-height: 330px;
  display: flex;
`;

export function BroncoHenry() {
  const { vimeoId, name, aspectRatio } = getProjectData("bronco-henry");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This cowboy was animated frame by frame in Toon Boom and cleaned up in
          After Effects. I tried to push his noodly appendages to the extreme,
          making him somewhat of a glyph.
        </p>
        <MediaSection>
          <StyledVideoDiv>
            <Video src={[ruffs]}></Video>
          </StyledVideoDiv>
          <FigureText>Fig 1. Rough Animation in Toon Boom</FigureText>
          <Images>
            <picture>
              <source srcSet={cowboyLeft_webp} type="image/webp" />
              <img src={cowboyLeft_png} alt="" />
            </picture>
            <picture>
              <source srcSet={cowboyRight_webp} type="image/webp" />
              <img src={cowboyRight_png} alt="" />
            </picture>
          </Images>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
