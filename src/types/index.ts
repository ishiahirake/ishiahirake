export type RemarkEdge = {
  node: {
    id: string
    frontmatter: {
      date: string
      title: string
      path: string
    }
    excerpt: string
  }
}
