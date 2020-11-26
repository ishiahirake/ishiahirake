import React from "react"
import { Link } from "gatsby"

interface PostOverviewProps {
  edge: any
}

export const PostOverview: React.FC<PostOverviewProps> = ({ edge }) => {
  return (
    <div key={edge.node.id}>
      <h3>
        <Link to={edge.node.frontmatter.path}>
          {edge.node.frontmatter.title}
        </Link>
      </h3>
      <p>{edge.node.excerpt}</p>
    </div>
  )
}
