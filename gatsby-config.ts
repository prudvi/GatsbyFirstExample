import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    { resolve: "gatsby-plugin-image" },
    { resolve: "gatsby-plugin-sharp" },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    { resolve: "gatsby-plugin-mdx"}

  ]
};

export default config;
