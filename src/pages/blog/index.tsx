import * as React from 'react'
import { Link, graphql } from 'gatsby'
import CustomLayout from '../../components/layout'

const BlogPage = ({ data }: any) => {
  return (
    <CustomLayout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </CustomLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        slug
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
      }
    }
  }
`

export default BlogPage