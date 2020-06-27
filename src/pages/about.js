import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div>
      <Link to="/" >home</Link>  
      <Header headerText="About me!" /> 
      <Header headerText="It's pretty cool!" /> 
      <p>Nice about page!</p>
    </div>
  )
}
