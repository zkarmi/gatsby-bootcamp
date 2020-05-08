import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout pageTitle="404 Not Found">
    <h1>Page Not Found</h1>
    <p>
      <Link to="/">Head home</Link>
    </p>
  </Layout>
)

export default NotFoundPage
