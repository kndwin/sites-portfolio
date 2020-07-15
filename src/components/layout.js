import React from "react"
import { Link } from "gatsby"
import { Typography, AppBar, Container,
  Toolbar, IconButton, MenuItem, Menu} 
  from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import 'fontsource-roboto'
import styles from "./layout.module.scss"

export default function Layout ({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return  (
    <Container maxWidth="xl">
        <AppBar className={styles.AppBar}color="primary" position="sticky" >
          <Toolbar variant="regular">
            <IconButton onClick={handleClick} edge="start" color="inherit">
              <MenuIcon /> 
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link className={styles.links} to="/">
                  <Typography >Home</Typography>
                </Link>
              </MenuItem >
              <MenuItem onClick={handleClose}>
                <Link className={styles.links} to="/projects/">
                  <Typography >Projects</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={styles.links} to="/blog/">
                  <Typography >Blog</Typography>
                </Link>
              </MenuItem>
            </Menu>
            <Typography variant="h6">Home</Typography>
            <IconButton color="inherit">
              <TwitterIcon /> 
            </IconButton>
            <IconButton color="inherit">
              <GitHubIcon /> 
            </IconButton>
            <IconButton color="inherit">
              <EmailIcon /> 
            </IconButton>
          </Toolbar>
        </AppBar>
      {children}
    </Container>
  )
}
