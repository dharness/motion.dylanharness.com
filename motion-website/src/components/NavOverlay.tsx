import styled from "styled-components/macro";
import { MOBILE_CUTOFF } from "../sharedStyles";
import PageLink, { HeaderPaths } from "./Link";
import React from "react";
import logo_webm from "../assets/logo/logo.webm";
import logo_mp4 from "../assets/logo/logo.mp4";
import { Video } from "./Video";

const NavOverlayDiv = styled.div`
  opacity: 1;
  overflow: clip;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 999;
  background: white;
  @media (min-width: ${MOBILE_CUTOFF}) {
    display: none;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  font-size: 24px;
`;

const StyledFooter = styled.div`
  height: 14px;
  background: #fff1eb;
  width: 100%;
  margin-top: auto;
`;

export function NavOVerlay() {
  return (
    <NavOverlayDiv>
      <StyledWrapper>
        <Video
          src={[logo_webm, logo_mp4]}
          style={{
            height: "100px",
            marginBottom: "40px",
            marginTop: "auto",
          }}
        ></Video>
        <PageLink name="Projects" to={HeaderPaths.projects} />
        <PageLink name="Reel" to={HeaderPaths.reel} />
        <PageLink name="About" to={HeaderPaths.about} />
        <StyledFooter />
      </StyledWrapper>
    </NavOverlayDiv>
  );
}
