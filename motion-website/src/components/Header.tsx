import React, { useEffect } from "react";
import styled from "styled-components/macro";
import {
  contentWidthStyle,
  MOBILE_CUTOFF,
  ORANGE_LIGHT,
  ORANGE_MEDIUM,
} from "../sharedStyles";
import logo_webm from "../assets/logo/logo.webm";
import logo_mp4 from "../assets/logo/logo.mp4";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";
import { NavOVerlay } from "./NavOverlay";
import { Link, useLocation } from "react-router-dom";
import PageLink, { HeaderPaths } from "./Link";
import { Video } from "./Video";

const HeaderWrapper = styled.div`
  height: 100px;
  max-height: 100px;
  min-height: 100px;
`;

const HeaderContent = styled.div`
  ${contentWidthStyle};
  margin: 30px auto 0px auto;
  display: flex;
  flex-direction: row;
`;

const Name = styled.a`
  font-size: 32px;
  font-family: "Rubik Mono One", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  color: ${ORANGE_MEDIUM};
  display: flex;
  flex-direction: column;
  align-self: end;
  -webkit-align-self: flex-end; /* add prefixed version */
  -ms-flex-item-align: end; /* add prefixed version */
  > * {
    &:first-child {
      font-size: 32px;
      margin-bottom: -6px;
    }
  }
  &:nth-child(2) {
    font-size: 23px;
  }
`;

const PageLinks = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 20px;
  gap: 36px;
  align-items: center;
  @media (max-width: ${MOBILE_CUTOFF}) {
    display: none;
  }
  a {
    margin: unset;
  }
`;

const Logo = styled(Link)`
  height: 70px;
  margin-left: -30px;
  margin: unset;
  img {
    height: 100%;
  }
`;

const Hamburger = styled.button`
  z-index: 1000;
  margin-left: auto;
  background: #fff1eb;
  align-self: center;
  height: 33px;
  width: 33px;
  display: flex;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  justify-content: center;
  @media (min-width: ${MOBILE_CUTOFF}) {
    display: none;
  }
  & > img {
    height: 100%;
  }
`;

const ColorBar = styled.div`
  height: 15px;
  background: ${ORANGE_LIGHT};
`;

export function Header(props: any) {
  const { onToggleOverlay, showOverlay, isMediaQueryMatched } = props;

  const location = useLocation();

  const toggleOverlay = (isShowing: boolean) => {
    onToggleOverlay(isShowing);
  };

  if (isMediaQueryMatched) {
    toggleOverlay(false);
  }

  useEffect(() => {
    toggleOverlay(false);
  }, [location]);

  return (
    <HeaderWrapper>
      <ColorBar />
      {showOverlay && <NavOVerlay />}
      <HeaderContent>
        <Logo to={HeaderPaths.root}>
          <Video
            src={[logo_webm, logo_mp4]}
            style={{
              minWidth: "160px",
              height: "100%",
              display: "flex",
            }}
          ></Video>
        </Logo>
        {isMediaQueryMatched && (
          <Name href="/">
            <div>Dylan</div>
            <div>Harness</div>
          </Name>
        )}
        <PageLinks>
          <PageLink name="Projects" to={HeaderPaths.projects} />
          <PageLink name="Reel" to={HeaderPaths.reel} />
          <PageLink name="About" to={HeaderPaths.about} />
        </PageLinks>
        <Hamburger onClick={(_) => toggleOverlay(!showOverlay)}>
          {showOverlay ? <img src={close}></img> : <img src={hamburger}></img>}
        </Hamburger>
      </HeaderContent>
    </HeaderWrapper>
  );
}
