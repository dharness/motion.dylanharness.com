import React from "react";
import styled from "styled-components/macro";
import { VimeoVideo } from "../components/VimeoVideo";
import { Video } from "../components/Video";
import { FigureText } from "../components/FigureText";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import digWide from "../assets/projects/fee-ranger/dig-wide.mp4";
// webp
import turnaround_webp from "../assets/projects/fee-ranger/turnaround_4x.png?as=webp";
import objectsLeft_webp from "../assets/projects/fee-ranger/objects_left.png?as=webp";
import objectsRight_webp from "../assets/projects/fee-ranger/objects_right.png?as=webp";
import characterSpread_webp from "../assets/projects/fee-ranger/characte-concept-spread.png?as=webp";
//png
import turnaround_png from "../assets/projects/fee-ranger/turnaround_4x.png";
import objectsLeft_png from "../assets/projects/fee-ranger/objects_left.png";
import objectsRight_png from "../assets/projects/fee-ranger/objects_right.png";
import characterSpread_png from "../assets/projects/fee-ranger/characte-concept-spread.png";
import { MOBILE_CUTOFF } from "../sharedStyles";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`;

const TurnaroundWrapper = styled.div`
  picture {
    display: flex;
    width: 120%;
    margin-left: -10%;
  }
`;
const ObjectsRow = styled.div`
  display: flex;
  picture {
    display: flex;
    position: relative;
    min-width: 59%;
    right: 11.5%;
    &:first-of-type {
      left: -6.3%;
      right: "";
    }
  }
  @media (max-width: ${MOBILE_CUTOFF}) {
    flex-direction: column;
    picture {
      position: static;
    }
  }
`;
const CharacterSpreadWrapper = styled.div`
  picture {
    display: flex;
    width: 110%;
    margin-left: -5%;
  }
`;

export function FeeRanger() {
  const { vimeoId, name, aspectRatio } = getProjectData("fee-ranger");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This project takes a character all the way from concept, through
          sculpting, retopology, rigging, and animation. The character was made
          in ZBrush, rigged and animated in C4D, and finally, rendered with
          Redshift.
        </p>
        <MediaSection>
          <TurnaroundWrapper>
            <picture>
              <source srcSet={turnaround_webp} type="image/webp" />
              <img src={turnaround_png} />
            </picture>
          </TurnaroundWrapper>
          <FigureText>Fig 1. Ranger turnaround</FigureText>
          <p>
            The ranger character was rigged using the C4D character object, with
            a few additional controls added with constraints for the eyes. The
            bird is a much simpler design, so he's composed of just a few bones,
            some deformers, and user data controls. Both characters, as well as
            all their accessories, were textured in Substance Painter. I added a
            little flair to the lighting with some blockers to simulate tree
            leaves in the distance. Finally, I composited in a bit of
            particulate matter to give it that sprightly forest feel!
          </p>
          <ObjectsRow>
            <picture>
              <source srcSet={objectsLeft_webp} type="image/webp" />
              <img src={objectsLeft_png} alt="" />
            </picture>
            <picture>
              <source srcSet={objectsRight_webp} type="image/webp" />
              <img src={objectsRight_png} alt="" />
            </picture>
          </ObjectsRow>
          <FigureText>Fig 2. Ranger accessories</FigureText>

          <Video src={[digWide]}></Video>
          <FigureText>Fig 3. Scrapped dig animation</FigureText>
          <p>
            Early versions of the project had the ranger digging in the forest
            for hidden fees! It was a great exercise in body mechanics, but was
            ultimately cut to reduce production time.
          </p>

          <CharacterSpreadWrapper>
            <picture>
              <source srcSet={characterSpread_webp} type="image/webp" />
              <img src={characterSpread_png} alt="" />
            </picture>
          </CharacterSpreadWrapper>
          <FigureText>Fig 4. Rough sketch and color study</FigureText>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
