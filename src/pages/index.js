import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Brent this is my first website with Gatsby</h2>
      <p>
        Contact me <Link to="/contact">here</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
