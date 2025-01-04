import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import styled from "styled-components";
import { FigureText } from "../components/FigureText";
import { Video } from "../components/Video";
import ruffs from "../assets/projects/propmaker/fanman-ruffs.mp4";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

export function Propmaker() {
  const { vimeoId, name, aspectRatio } = getProjectData("propmaker");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This short walk-cycle was made entirely in Toon Boom, providing a
          natural boil to the drawings. It depicts a prop maker going home after
          a long day on the set.
        </p>
        <MediaSection>
          <Video src={[ruffs]} width={"65%"} style={{ margin: "auto" }}></Video>
          <FigureText>Fig 1. Frame by frame animation in Toon Boom</FigureText>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
