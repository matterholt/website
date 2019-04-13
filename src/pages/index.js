import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mountain from "../images/mountain.jpg"
import BackgroundImage from 'gatsby-background-image'


const MainBackground = {
  BackgroundImage: url("{ mountain }),
}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainBackground>
      <h2>
        Matt Atterholt, you can't be a Dev with a website so boom this gats-be
        it
      </h2>
      <p> On my way towards Unicorn Web Developer.. J.K.</p>
      <p>
        {" "}
        So much to keep track, This field is amazing and I want to become a
        great developer and solve problems using web technologies. I hope my
        perspective will help other devs{" "}
      </p>
    </MainBackground>
    <div
      style={{ maxWidth: `300px`, marginBottom: `1.45rem`, background: `blue` }}
    />
    <Link to="/About/"> About</Link>
    <Link to="/BlogPost/"> Blog</Link>
    <Link to="/page-2/"> DEMMMOO</Link>
  </Layout>
)

export default IndexPage
