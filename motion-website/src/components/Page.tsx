import { useLayoutEffect, useState } from "react";
import styled from "styled-components/macro";
import { LandingHeader } from "./LandingHeader";
import { Header } from "./Header";
import React from "react";
import { Footer } from "./Footer";
import { MOBILE_CUTOFF } from "../sharedStyles";

const PageWrapper = styled.div<{ $scrollable: boolean }>`
  display: flex;
  min-height: 100%;
  flex-direction: column;

  overflow: ${(p) => (p.$scrollable ? "" : "clip")};
  height: ${(p) => (p.$scrollable ? "" : "100%")};
`;

export function Page(props: any) {
  const { isLandingPage } = props;
  const mediaQuery = `(min-width: ${MOBILE_CUTOFF})`;
  const [showOverlay, setShowOverlay] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(
    window.matchMedia(mediaQuery).matches
  );

  useLayoutEffect(() => {
    window.matchMedia(mediaQuery).addEventListener("change", (e) => {
      setIsMediaQueryMatched(e.matches);
    });
  }, []);

  const onToggleOverlay = (isShowingOverlay: boolean) => {
    setIsScrollable(!isShowingOverlay);
    setShowOverlay(isShowingOverlay);
  };

  const CurrentHeader =
    isLandingPage && isMediaQueryMatched ? LandingHeader : Header;
  return (
    <PageWrapper $scrollable={isScrollable}>
      <CurrentHeader
        onToggleOverlay={onToggleOverlay}
        isMediaQueryMatched={isMediaQueryMatched}
        showOverlay={showOverlay}
      />
      {props.content}
      <Footer />
    </PageWrapper>
  );
}

Page.defaultProps = {
  isLandingPage: false,
};
