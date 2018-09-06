module.exports = {
  siteMetadata: {
    title: 'Fiora',
    description: 'Fiora documentation website',
    keywords: ['fiora', 'react', 'documentation', 'forms'],
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayout: require.resolve('./src/components/Layout'),
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f04242',
        theme_color: '#f04242',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
