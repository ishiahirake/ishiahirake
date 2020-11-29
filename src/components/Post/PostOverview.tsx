import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { RemarkEdge } from "../../types"
import { Link, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(2),
  },
  date: {
    marginBottom: theme.spacing(1),
    fontWeight: 500,
  },
  body: {},
}))

interface PostOverviewProps {
  edge: RemarkEdge
}

export const PostOverview: React.FC<PostOverviewProps> = ({ edge }) => {
  const classes = useStyles()
  return (
    <div>
      <Typography className={classes.title} variant={"h4"}>
        <Link component={GatsbyLink} to={edge.node.frontmatter.path}>
          {edge.node.frontmatter.title}
        </Link>
      </Typography>
      <Typography className={classes.date} variant={"subtitle1"}>
        {edge.node.frontmatter.date}
      </Typography>
      <Typography className={classes.body} variant={"body1"} paragraph>
        {edge.node.excerpt}
      </Typography>
    </div>
  )
}
