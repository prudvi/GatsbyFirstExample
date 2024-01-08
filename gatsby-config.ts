import type { GatsbyConfig } from "gatsby";
import { backEndUrl } from "./src/utilityPack/commonConstants";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
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
    { resolve: "gatsby-plugin-mdx" },
    { resolve: "gatsby-plugin-sass" },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "external",
        // This is the field under which it's accessible
        fieldName: "external",
        // URL to query from
        url: backEndUrl
      },
    }
  ]
};


export default config;
