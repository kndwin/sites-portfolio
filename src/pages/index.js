import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Img from "gatsby-image"
import styles from "./index.module.scss"

export default function HomePage({ data }) {
  return ( 
    <Layout>
      <Img className={styles.image}
        fluid={ data.file.childImageSharp.fluid } />
      <h1 className={styles.h1_color}>about me</h1>
      <p>
        💬&nbsp;
          <a className={styles.link}
            href="https://www.bible.com/bible/72/JHN.3.30.HCSB"
            rel='noreferrer'
            target='_blank'>
            john 3:30
          </a>
        <br />
        🎨&nbsp; 
          <a className={styles.link}
            href="https://github.com/morhetz/gruvbox"
            rel='noreferrer'
            target='_blank'>
            gruvbox
          </a> dark
        <br />
        ☕ cold drip
        <br />
        👨‍💻 aspiring full-stack dev
        <br />
        🎹 hobbyist producer (big big fan of&nbsp;
          <a className={styles.link}
            href="https://www.youtube.com/watch?v=-C-2AqRD8io"
            rel='noreferrer'
            target='_blank'>
            porter
          </a> and&nbsp;
          <a className={styles.link}
            href="https://www.youtube.com/watch?v=5ldbggv2zaQ"
            rel='noreferrer'
            target='_blank'>
            kings k
          </a>)!
        <br />
        💻 amatuer&nbsp;
          <a className={styles.link}
            href="https://archlinux.org"
            rel='noreferrer'
            target='_blank'>
            arch
          </a> user
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
