import React from "react";
import styled from "styled-components/macro";
import Vimeo from "@u-wave/react-vimeo";

const NoJump = styled.div`
  min-height: min(
    calc(${(props) => props.$heightRatio} * 80vw),
    calc(${(props) => props.$heightRatio} * 514px)
  );
`;

export function VimeoVideo(props) {
  const { vimeoId, aspectRatio } = props;
  const heightRatio = 0.5625;
  const vimeoSettings = {
    showByline: false,
    showPortrait: false,
    showTitle: false,
    video: vimeoId,
    autoplay: false,
    volume: 1,
    autopause: true,
    controls: true,
    responsive: true,
    playsInline: false,
    loop: true,
  };
  return (
    <NoJump $heightRatio={heightRatio} $background={""}>
      <Vimeo {...vimeoSettings} />
    </NoJump>
  );
}

export default VimeoVideo;
