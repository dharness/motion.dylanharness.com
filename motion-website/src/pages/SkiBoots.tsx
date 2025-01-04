import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import { Video } from "../components/Video";
import styled from "styled-components/macro";
import shoeTiltDemo from "../assets/projects/ski-boots/shoe-tilt-slider.mp4";
import characterTurnDemo from "../assets/projects/ski-boots/character-turn-slider.mp4";
import uiReceipt from "../assets/projects/ski-boots/UI-receipt-demo.mp4";
import creditCard from "../assets/projects/ski-boots/card-with-reflections.mp4";
import ruffs from "../assets/projects/ski-boots/spin-drop-demo.mp4";

const SliderDemoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;

const SliderDemoWrapper = styled.div`
  display: flex;
`;

const BottomGrid = styled.div<{ $height: number }>`
  display: flex;
  max-height: ${(props) => props.$height};
  justify-content: space-between;
  margin-bottom: 35px;
`;

const BottomGridCol = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  justify-content: space-between;
`;

export function SkiBoots() {
  const { vimeoId, name, aspectRatio } = getProjectData("ski-boots");
  const bottomGridHeight = 700;
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This sequence shows how quick and easy purchasing boots can be online
          with a credit card. It was mostly made in After Effects with support
          from Toon Boom and C4D.
        </p>
        <p>
          The character is a blend of frame by frame animation and After Effects
          rigging. The entry sequence, with its rapid movement and many small
          overlapping parts was faster to do by hand. But the slower, ease-out
          at the end of the rotation was easier to do using a rig, since a small
          amount of motion would require many frames. The hair was done entirely
          frame by frame and cleaned up in After Effects.
        </p>
        <SliderDemoRow>
          <SliderDemoWrapper>
            <Video
              src={[characterTurnDemo]}
              style={{
                maxHeight: 500,
              }}
            ></Video>
          </SliderDemoWrapper>
          <SliderDemoWrapper>
            <Video
              src={[shoeTiltDemo]}
              style={{
                marginLeft: "auto",
                maxHeight: 500,
              }}
            ></Video>
          </SliderDemoWrapper>
        </SliderDemoRow>
        <p>
          The boots were made in After Effects, and rigged with simple DUIK
          sliders for their perspective. In order to quickly work out the subtle
          perspective shifts of the boot I modified an old boot model I had and
          referenced it in After Effects.
        </p>
        <BottomGrid $height={bottomGridHeight}>
          <Video src={[ruffs]} />
          <BottomGridCol>
            <Video
              style={{
                maxHeight: "calc(58% - 10px)",
                display: "inline-block",
                marginLeft: "auto",
                zIndex: 100,
                boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.05)",
                borderRadius: 10,
                overflow: "clip",
              }}
              src={[uiReceipt]}
            />
            <Video
              style={{
                maxHeight: "calc(42% - 10px)",
                display: "inline-block",
                marginLeft: "auto",
              }}
              width=""
              src={[creditCard]}
            />
          </BottomGridCol>
        </BottomGrid>
        <p>
          The credit card was another simple DUIK rig to give it some
          perspective as it scales around its ethereal plane.
        </p>
      </PageContentWrapper>
    </>
  );
}
