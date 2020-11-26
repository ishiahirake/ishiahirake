import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, PostOverview } from "../components"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <section>
      {data.allMarkdownRemark.edges.map(edge => {
        return <PostOverview key={edge.node.id} edge={edge} />
      })}
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            path
          }
          excerpt
        }
      }
    }
  }
`
