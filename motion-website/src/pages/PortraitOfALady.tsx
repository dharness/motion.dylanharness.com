import React from "react";
import styled from "styled-components";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import { FigureText } from "../components/FigureText";
import { Video } from "../components/Video";
import ruffs_webm from "../assets/projects/portrait-of-a-lady/ruffs.webm";
import ruffs_mp4 from "../assets/projects/portrait-of-a-lady/ruffs.mp4";
import colors_webp from "../assets/projects/portrait-of-a-lady/color-study.png?as=webp";
import colors_png from "../assets/projects/portrait-of-a-lady/color-study.png";
import { MOBILE_CUTOFF } from "../sharedStyles";

const MediaSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: flex-end;
  img {
    width: 100%;
  }
  @media (max-width: ${MOBILE_CUTOFF}) {
    flex-direction: column;
  }
`;
const MediaColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  min-width: 50%;
  @media (max-width: ${MOBILE_CUTOFF}) {
    max-width: 100%;
  }
`;

export function PortraitOfALady() {
  const { vimeoId, name, aspectRatio } = getProjectData("portrait-of-a-lady");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This sequence was roughed in Toon Boom, with some cleanup done in
          After Effects. It focuses on showing the facial expression and emotion
          of a character as they react to an annoying fly.
        </p>
        <MediaSection>
          <MediaColumn>
            <Video src={[ruffs_webm, ruffs_mp4]}></Video>
            <FigureText>Fig 1. Rough animation</FigureText>
          </MediaColumn>
          <MediaColumn>
            <picture>
              <source srcSet={colors_webp} type="image/webp" />
              <img src={colors_png} alt="" />
            </picture>
            <FigureText>Fig 2. Thumbnails and color study </FigureText>
          </MediaColumn>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
