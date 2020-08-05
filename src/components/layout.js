import React from "react"
import { Link } from "gatsby"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import 'typeface-source-sans-pro'
import styles from "./layout.module.scss"

export default function Layout ({ children }) {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav_wrapper}>
          <div className={styles.links_wrapper}>
            <Link className={styles.link} to="/">
              kndwin
            </Link>
            <Link className={styles.link} to="/projects/">
              project
            </Link>
            <Link className={styles.link} to="/blog/">
              blog
            </Link>
          </div>
        </nav>
        <body className={styles.body}>
          {children}
        </body>
        <footer className={styles.footer}>
          <a className={styles.icon_links} 
            href="https://twitter.com/kndwindev">
            <TwitterIcon fontSize='large' 
              className={`${styles.icon} + ${styles.blue}`}/> 
          </a>
          <a className={styles.icon_links} 
            href="https://github.com/kndwin">
            <GitHubIcon fontSize='large'
              className={`${styles.icon} + ${styles.grey}`}/> 
          </a>
          <a className={styles.icon_links} 
            href="mailto:me@kndwin.dev?subject=kndwindev">
            <EmailIcon fontSize='large'
              className={`${styles.icon} + ${styles.red}`}/> 
          </a>
        </footer>
      </div>
    </>
  )
}
