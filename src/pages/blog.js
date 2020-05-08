import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogPostItem from "../components/blogPostItem"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

// Render Contentful posts in list
// 1. Swap out markdown query for contentful query
// 2. Update component to render new data
// 3. Test

const BlogPage = () => {
  // build GraphQL request
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle="Blog">
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
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
