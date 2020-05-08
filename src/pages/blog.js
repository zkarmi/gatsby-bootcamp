import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogPostItem from "../components/blogPostItem"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => (
          <BlogPostItem
            key={edge.node.id}
            post={edge.node}
            blogStyles={blogStyles}
          />
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
