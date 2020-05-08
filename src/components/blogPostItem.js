import React from "react"

import { Link } from "gatsby"

const BlogPostItem = ({ post, blogStyles }) => (
  <li className={blogStyles.post}>
    <Link to={`/blog/${post.fields.slug}`}>
      <h2>{post.frontmatter.title}</h2>
      <small>{post.frontmatter.date}</small>
      <p>{post.excerpt}&hellip;</p>
    </Link>
  </li>
)

export default BlogPostItem
