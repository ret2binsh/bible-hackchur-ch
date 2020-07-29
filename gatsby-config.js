module.exports = {
  siteMetadata: {
    siteTitle: `Hackchurch Bible`,
    defaultTitle: `Hackchurch Bible`,
    siteTitleShort: `hackchurch-bible`,
    siteDescription: `The free manual for cyber security`,
    siteUrl: `https://bible.hackchur.ch`,
    siteAuthor: `@jesseflorig`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#b10a1b`,
    basePath: `/`,
    footer: `Sponsored by Hack Church`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/hack-church/bible-hachur-ch`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hack Church Bible`,
        short_name: `HC Bible`,
        start_url: `/`,
        background_color: `#b10a1b`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://bible.hackchur.ch`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
