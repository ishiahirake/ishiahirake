import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, PostOverview } from "../components"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  post: {
    marginBottom: theme.spacing(6),
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />

      <section>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <div key={edge.node.id} className={classes.post}>
              <PostOverview edge={edge} />
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

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
