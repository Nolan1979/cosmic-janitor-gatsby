module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Cosmic Janitor Records',
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'Cosmic Janitor Records',
        accessToken: '',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
