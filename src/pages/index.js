import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return  (
    <div style={{ color: 'purple' }}>
      <Link to="/about/">Contact</Link>
      <Header headerText="Hello!" />
    </div>
  )
}
