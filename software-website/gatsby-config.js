module.exports = {
  pathPrefix: "/",
  trailingSlash: "never",
  siteMetadata: {
    siteTitle: `Dylan Harness`,
    defaultTitle: `Dylan Harness`,
    siteTitleShort: `Dylan Harness`,
    siteDescription: `Dylan Harness is a Software Engineer.`,
    siteUrl: `https://dylanharness.com`,
    siteAuthor: `Dylan Harness`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        homePath: `src/home`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `examples/gatsby-theme-docs`,
        gatsbyRemarkPlugins: [
          // {
          //   resolve: require.resolve("./gatsby-remark-custom-attributes.js"),
          // },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dylan Harness`,
        short_name: `Dylan Harness`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dylanharness.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
