import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Projects } from "./pages/Projects";
import { DemoReel } from "./pages/DemoReel";
import { SkiBoots } from "./pages/SkiBoots";
import { BroncoHenry } from "./pages/BroncoHenry";
import { FeeRanger } from "./pages/FeeRanger";
import { FreshCaught } from "./pages/FreshCaught";
import { GatorGum } from "./pages/GatorGum";
import { OverEats } from "./pages/OverEats";
import { PortraitOfALady } from "./pages/PortraitOfALady";
import { Propmaker } from "./pages/Propmaker";
import { PurpleBusiness } from "./pages/PurpleBusiness";
import { Normalize } from "styled-normalize";
import { Page } from "./components/Page";
import { About } from "./pages/About";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
    opacity: 1;
  }
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// prettier-ignore
export function Router() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Page content={<Projects />} isLandingPage={true} />} />
            <Route path="/projects" element={<Page content={<Projects />} isLandingPage={true} />} />
            <Route path="/about" element={<Page content={<About />} />} />
            <Route path="/reel" element={<Page content={<DemoReel />} />} />
            <Route path="/ski-boots" element={<Page content={<SkiBoots />} />} />
            <Route path="/bronco-henry" element={<Page content={<BroncoHenry />} />} />
            <Route path="/fee-ranger" element={<Page content={<FeeRanger />} />} />
            <Route path="/fresh-caught" element={<Page content={<FreshCaught />} />} />
            <Route path="/gator-gum" element={<Page content={<GatorGum />} />} />
            <Route path="/over-eats" element={<Page content={<OverEats />} />} />
            <Route path="/portrait-of-a-lady" element={<Page content={<PortraitOfALady />} />} />
            <Route path="/propmaker" element={<Page content={<Propmaker />} />} />
            <Route path="/purple-business" element={<Page content={<PurpleBusiness />} />} />
            <Route path="*" element={<Page content={<Projects />} isLandingPage={true} />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
