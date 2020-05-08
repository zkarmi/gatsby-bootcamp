import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const queryContentful = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      <h1>{data.contentfulBlogPost.title}</h1>
      <small>{data.contentfulBlogPost.publishedDate}</small>
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog

// // For Markdown implementation: graphql query
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// // For Markdown implementation: Blog template functional component
// const Blog = ({ data }) => (
//   <Layout>
//     <h1>{data.markdownRemark.frontmatter.title}</h1>
//     <small>{data.markdownRemark.frontmatter.date}</small>
//     <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
//   </Layout>
// )

// export default Blog
