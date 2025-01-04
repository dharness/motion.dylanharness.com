import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../Layout";
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO";

export default function Docs({ mdx, pageContext, children }) {
  const { title, description, image, disableTableOfContents } = mdx.frontmatter;
  const { headings } = mdx;
  const { slug } = mdx.fields;
  const links = [];
  const linksChunk = description.split("|");

  // Pull the links out of the description because
  // I can't figure out how to add them to the frontmatter
  if (linksChunk.length >= 2) {
    const urls = linksChunk[1]?.split(",");
    urls?.forEach((url) => {
      links.push(url.trim());
    });
  }

  return (
    <>
      <SEO title={title} description={description} slug={slug} image={image} />
      <Layout
        links={links}
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      >
        {children}
      </Layout>
    </>
  );
}

Docs.propTypes = {
  mdx: PropTypes.shape({
    body: PropTypes.string,
    headings: PropTypes.array,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      disableTableOfContents: PropTypes.bool,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
    repositoryEditUrl: PropTypes.string,
    repositoryProvider: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
