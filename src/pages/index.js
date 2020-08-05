import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Img from "gatsby-image"
import styles from "./index.module.scss"

export default function Home({ data }) {
  return ( 
    <Layout>
      <Img className={styles.image}
        fluid={ data.file.childImageSharp.fluid } />
      <h1>hey there!</h1>
      <p>
        Nice to meet you! My name is Kevin 
        <br />
        and this is my place of expression!
        <br />
      </p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "images/pages/kndwin.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
