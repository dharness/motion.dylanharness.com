/* @jsx jsx */
import { useState, useRef, Fragment } from "react";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

import TableOfContents from "@rocketseat/gatsby-theme-docs/src/components/Docs/TOC";
import Sidebar from "@rocketseat/gatsby-theme-docs/src/components/Sidebar";
import Header from "@rocketseat/gatsby-theme-docs/src/components/Header";
import Overlay from "@rocketseat/gatsby-theme-docs/src/components/Overlay";
import {
  Container,
  Main,
  Children,
} from "@rocketseat/gatsby-theme-docs/src/components/Layout/styles";

import styled from "styled-components";
import LinkButton from "../../../../components/LinkButton";

const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
`;

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
  links,
}) {
  const contentRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0;

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };
  const containerStyle = isMenuOpen
    ? { overflow: "hidden", maxHeight: "80vh" }
    : {};
  return (
    <Fragment>
      <Overlay isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
      <Container style={containerStyle}>
        <Sidebar isMenuOpen={isMenuOpen} />
        <Main>
          <Header handleMenuOpen={handleMenuOpen} />

          <Children ref={contentRef}>
            <TitleRow>
              {title && (
                <h1 style={{ marginBottom: 0, marginRight: 20 }}>{title}</h1>
              )}
              <LinksSection>
                {links.map((link) => (
                  <LinkButton link={link} key={link} />
                ))}
              </LinksSection>
            </TitleRow>
            {children}
          </Children>

          <TableOfContents
            headings={headings}
            disableTOC={disableTOC}
            contentRef={contentRef}
          />
        </Main>
      </Container>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disableTableOfContents: PropTypes.bool,
  title: PropTypes.string,
  headings: PropTypes.array,
  links: PropTypes.array,
};

Layout.defaultProps = {
  disableTableOfContents: false,
  title: "",
  headings: null,
  links: [],
};
