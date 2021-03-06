const emotionConfig =
  process.env.NODE_ENV === 'production'
    ? { hoist: true }
    : { sourceMap: true, autoLabel: true };

module.exports = {
  siteMetadata: {
    title: 'Fiora',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayout: require.resolve('./src/components/Layout'),
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: emotionConfig,
    },
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Fiora',
        short_name: 'fiora',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
