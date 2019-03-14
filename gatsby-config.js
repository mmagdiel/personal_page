module.exports = {
    siteMetadata: {
        title: 'Gatsby Starter Blog',
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-plugin-layout`,
        `gatsby-transformer-json`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `certificates`,
                path: `${__dirname}/src/certificates`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `icons`,
                path: `${__dirname}/src/icons`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `videos`,
                path: `${__dirname}/src/videos`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown`,
                path: `${__dirname}/posts`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              // CommonMark mode (default: true)
              commonmark: true,
              // Footnotes mode (default: true)
              footnotes: true,
              // Pedantic mode (default: true)
              pedantic: true,
              // GitHub Flavored Markdown mode (default: true)
              gfm: true,
              // Plugins configs
              plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                      maxWidth: 1000,
                      quality: 80,
                      showCaptions: true,
                      linkImagesToOriginal: false
                    },
                  },
                  'gatsby-remark-prismjs'
              ],
            },
          },
    ],
}