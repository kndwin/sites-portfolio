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
          <img className={styles.image}
            src={'../../images/pages/kndwin.png'} /> 
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
          <TwitterIcon fontSize='large' 
            className={styles.icon}/> 
          <GitHubIcon fontSize='large'
            className={styles.icon}/> 
          <EmailIcon fontSize='large'
            className={styles.icon}/> 
        </footer>
      </div>
    </>
  )
}
