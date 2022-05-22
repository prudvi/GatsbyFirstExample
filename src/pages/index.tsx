import { StaticImage } from 'gatsby-plugin-image';
import * as React from "react";
import Layout from '../components/layout';
// data
import { dummyLinks } from './routes';
// styles
import { badgeStyle, codeStyles, descriptionStyle, docLink, docLinkStyle, linkStyle, listItemStyles, listStyles, pageStyles, paragraphStyles } from './styles';

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Layout pageTitle="Home Page">
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
      </Layout>
    </main>
  )
}

export default IndexPage
