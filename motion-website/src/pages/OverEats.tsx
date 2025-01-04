import React from "react";
import styled from "styled-components/macro";
import { VimeoVideo } from "../components/VimeoVideo";
import { Video } from "../components/Video";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import styleframe1_png from "../assets/projects/over-eats/overEats_sf_01.png";
import styleframe2_png from "../assets/projects/over-eats/overEats_sf_02.png";
import styleframe1_webp from "../assets/projects/over-eats/overEats_sf_01.png?as=webp";
import styleframe2_webp from "../assets/projects/over-eats/overEats_sf_02.png?as=webp";
import longHands from "../assets/projects/over-eats/overEats_zoomed-out-hands_wide.mp4";
import handRig from "../assets/projects/over-eats/overEats_hand-rig-demo_tall.mp4";
import { FigureText } from "../components/FigureText";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Styleframes = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  picture {
    box-sizing: border-box;
    width: calc(50% - 20px);
    min-height: calc(50% - 20px);
  }
`;
const StyleframeImg = styled.img`
  width: 100%;
`;
const C4dVideos = styled.div`
  display: flex;
  max-height: 500px;
`;

export function OverEats() {
  const { vimeoId, name, aspectRatio } = getProjectData("over-eats");

  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This speculative ad spot would be part of a social media awareness
          campaign for a food delivery app. It was made in C4D and rendered with
          Redshift. The fire is a a few planes with some extrusion applied,
          animated in a choppy, stop motion way!
        </p>
        <MediaSection>
          <Styleframes>
            <picture>
              <source srcSet={styleframe1_webp} type="image/webp" />
              <StyleframeImg src={styleframe1_png} alt="" />
            </picture>
            <picture>
              <source srcSet={styleframe2_webp} type="image/webp" />
              <StyleframeImg src={styleframe2_png} alt="" />
            </picture>
          </Styleframes>
          <FigureText>Fig 1. Concept illustrations</FigureText>
          <C4dVideos>
            <Video
              style={{
                paddingRight: 30,
              }}
              width=""
              src={[longHands]}
            ></Video>
            <Video src={[handRig]}></Video>
          </C4dVideos>
          <FigureText>Fig 2. Behind the scenes in C4D</FigureText>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
