import React from "react"

import { Link } from "gatsby"

const BlogPostItem = ({ post, blogStyles }) => (
  <li className={blogStyles.post}>
    <Link to={`/blog/${post.slug}`}>
      <h2>{post.title}</h2>
      <small>{post.publishedDate}</small>
    </Link>
  </li>
)

export default BlogPostItem
