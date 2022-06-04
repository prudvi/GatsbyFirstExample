import { StaticImage } from 'gatsby-plugin-image';
import * as React from "react";
import CustomLayout from '../components/layout';

// styles
import { badgeStyle, codeStyles, descriptionStyle, docLink, docLinkStyle, linkStyle, listItemStyles, listStyles, pageStyles, paragraphStyles } from '../css/styles';

 const dummyLinks = [
  {
      text: "Tutorial",
      url: "https://www.gatsbyjs.com/docs/tutorial/",
      description:
          "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
      color: "#E95800",
  },
  {
      text: "How to Guides",
      url: "https://www.gatsbyjs.com/docs/how-to/",
      description:
          "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
      color: "#1099A8",
  },
  {
      text: "Reference Guides",
      url: "https://www.gatsbyjs.com/docs/reference/",
      description:
          "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
      color: "#BC027F",
  },
  {
      text: "Conceptual Guides",
      url: "https://www.gatsbyjs.com/docs/conceptual/",
      description:
          "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
      color: "#0D96F2",
  },
  {
      text: "Plugin Library",
      url: "https://www.gatsbyjs.com/plugins",
      description:
          "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
      color: "#8EB814",
  },
  {
      text: "Build and Host",
      url: "https://www.gatsbyjs.com/cloud",
      badge: true,
      description:
          "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
      color: "#663399",
  },
  {
      text: "New to GATSBY",
      url: "https://www.gatsbyjs.com/cloud",
      badge: true,
      description:
          "Interested to learn more on Gatsby with other Backend",
      color: "red",
  },
]
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <CustomLayout pageTitle="Home Page">
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/dog.webp"
        />

        <p style={paragraphStyles}>
          Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this page
          update in real-time. 😎
        </p>
        <ul style={listStyles}>
          <li style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${docLink.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {docLink.text}
            </a>
          </li>
          {dummyLinks.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </CustomLayout>
    </main>
  )
}

export default IndexPage
