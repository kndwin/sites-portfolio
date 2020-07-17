import React from "react"
import { Link } from "gatsby"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import 'typeface-source-sans-pro'
import styles from "./layout.module.scss"

export default function Layout ({ children }) {
  return  (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.links} to="/">
          kndwin
        </Link>
        <Link className={styles.links} to="/projects/">
          project
        </Link>
        <Link className={styles.links} to="/blog/">
          blog
        </Link>
      </nav>
      {children}
      <footer>
        <TwitterIcon /> 
        <GitHubIcon /> 
        <EmailIcon /> 
      </footer>
    </div>
  )
}
