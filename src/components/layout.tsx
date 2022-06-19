import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import FooterComponent from './common/footerComponent';
import HeaderComponent from './common/headerComponent';
import './Menu.scss';

const CustomLayout = ({ pageTitle, children }: any) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div key={'container' + '-' + pageTitle} className={"container"}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <HeaderComponent title={data.site.siteMetadata.title} />
      <main>
        <h1 className={"heading"}>{pageTitle}</h1>
        {children}
      </main>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default CustomLayout