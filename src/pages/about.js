import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>I grew up in Staten Island, NY, and moved to the city in 2012.</p>
    <p>
      Let's work together! <Link to="/contact">Contact Me</Link>
    </p>
  </Layout>
)

export default AboutPage
