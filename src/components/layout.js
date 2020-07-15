import React from "react"
import { Link } from "gatsby"
import { Container, Typography } from "@material-ui/core"
import 'fontsource-roboto'
import styles from "./layout.module.scss"

export default function Layout ({ children }) {
  return  (
    <Container maxWidth="sm">
      <div className={styles.centerRow}>
        <Link className={styles.links} to="/">
          <Typography variant="h4">kn</Typography>
        </Link>
        <Link className={styles.links}to="/projects/">
          <Typography variant="h4">projects</Typography>
        </Link>
        <Link className={styles.links}to="/blog/">
          <Typography variant="h4">blog</Typography>
        </Link>
      </div>
      {children}
      <div>
        <Link className={styles.footer}>
          Twitter
        </Link>
        <Link className={styles.footer}>
          Email
        </Link>
        <Link className={styles.footer}>
          Github
        </Link>
      </div>
    </Container>
  )
}
