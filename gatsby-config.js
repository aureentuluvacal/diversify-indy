module.exports = {
  pathPrefix: "/diversify-indy",
  siteMetadata: {
    title: `Diversify Indy`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    url: "https://www.example.com",
    // Used for SEO. Must be the full URL for the default image
    image: "https://www.example.com/og-image.jpg",
    // Used for SEO
    author: "Irma Mesa, Built with Gatsby",
    // Used for an optional intro section at the top of the posts template
    intro: "John Doe is a photographer....",
    menuLinks: [
      {
        name: "Diversify Indy",
        slug: "/speakers/",
      },
      {
        name: "Contact",
        slug: "/contact/",
      },
    ],
    footerLinks: [
      {
        name: "Twitter",
        url: "https://twitter.com/_justirma",
      },
      {
        name: "Email",
        url: "mailto:irmammesa@gmail.com",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-theme-amsterdam`,
    },
    `gatsby-plugin-theme-ui`,
  ],
}
