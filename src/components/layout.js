import React from "react"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

import Head from "./head"
import Header from "./header"
import Footer from "./footer"

const Layout = props => (
  <>
    <Head title={props.pageTitle} />
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  </>
)

export default Layout
