/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteTitle: `magdiel site`,
    siteTitleAlt: `A software developer`,
    siteHeadline: `A software developer`,
    siteDescription: `A personal website and blog`,
    siteLanguage: `en`,
    siteUrl: "https://mmagdiel.dev",
    siteImage: `/banner.jpg`,
    author: `mmagdiel`,
    basePath: `/`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ],
};
