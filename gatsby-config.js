require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [
          'node_modules/bootstrap/scss/_functions.scss',
          'node_modules/bootstrap/scss/_variables.scss',
          'src/scss/colors.scss',
          'src/scss/fonts.scss',
          'node_modules/bootstrap/scss/_mixins.scss',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@sass': 'src/sass',
          '@templates': 'src/templates',
          '@posts': 'content/posts',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: `${process.env.GATSBY_API_BASE_URL}`,
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['material icons'],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto+Sans+JP', 'Noto+Sans+JP', 'material icons'],
        },
      },
    },
    'gatsby-plugin-flow',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify',
  ],
}
