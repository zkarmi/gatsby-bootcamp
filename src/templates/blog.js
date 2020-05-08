import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <small>{data.markdownRemark.frontmatter.date}</small>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
  </Layout>
)

export default Blog
