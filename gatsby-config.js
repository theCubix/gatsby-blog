module.exports = {
  siteMetadata: {
    title: `Generischer Blog`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fl1mauti4xe7`,
        accessToken: `1c18ea3ae3ea8971396493d7208cacd546e006acad5cc13270128e9de4c47b1f`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`
      }
    }
  ]
};