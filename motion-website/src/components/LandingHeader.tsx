import React from "react";
import styled from "styled-components/macro";
import {
  contentWidthStyle,
  MOBILE_CUTOFF,
  ORANGE_LIGHT,
  ORANGE_MEDIUM,
} from "../sharedStyles";
import logo_webm from "../assets/logo/logo.webm";
import logo_mov from "../assets/logo/logo.mov";

import { Link } from "react-router-dom";
import PageLink, { HeaderPaths } from "./Link";
import { Video } from "./Video";

const HeaderWrapper = styled.div`
  height: 200px;
  max-height: 200px;
  min-height: 200px;
`;

const HeaderContent = styled.div`
  ${contentWidthStyle};
  margin: 30px auto 0px auto;
  display: flex;
  flex-direction: column;
`;

const Name = styled.a`
  font-size: 32px;
  align-self: end;
  font-family: "Rubik Mono One", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  color: ${ORANGE_MEDIUM};
  display: flex;
  flex-direction: row;
  align-self: center;
  > * {
    &:first-child {
      font-size: 30px;
      margin-bottom: -6px;
      &::after {
        content: ".";
      }
    }
  }
  &:nth-child(2) {
    font-size: 30px;
  }
`;

const PageLinks = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 20px;
  margin: auto;
  gap: 36px;
  align-items: center;
  @media (max-width: ${MOBILE_CUTOFF}) {
    display: "";
  }
  a {
    margin: 10px 20px 0px 20px;
  }
`;

const Logo = styled(Link)`
  height: 95px;
  margin-left: -30px;
  margin: auto;
  img {
    height: 100%;
  }
`;

const ColorBar = styled.div`
  height: 15px;
  background: ${ORANGE_LIGHT};
`;

export function LandingHeader(props: any) {
  return (
    <HeaderWrapper>
      <ColorBar />
      <HeaderContent>
        <Logo to={HeaderPaths.root}>
          <Video src={[logo_webm, logo_mov]} style={{ height: "100%" }}></Video>
        </Logo>

        <Name href="/">
          <div>Dylan</div>
          <div>Harness</div>
        </Name>

        <PageLinks>
          <PageLink name="Projects" to={HeaderPaths.projects} />
          <PageLink name="Reel" to={HeaderPaths.reel} />
          <PageLink name="About" to={HeaderPaths.about} />
        </PageLinks>
      </HeaderContent>
    </HeaderWrapper>
  );
}
