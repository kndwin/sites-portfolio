import React from "react"
import Layout from "../components/layout.js"

export default function About({data}) {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({node}) => 
        <div>
          <h1>{node.frontmatter.title}</h1>
          <p>{node.frontmatter.date}</p>
          <p>{node.wordCount.words}</p>
          <p>{node.excerpt}</p>
          <p>{node.timeToRead}</p>
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query BlogMetadataQuery {
    allMarkdownRemark {
      edges {
        node {
          timeToRead
          frontmatter {
            date
            title
          }
          wordCount {
            words
          }
          excerpt
        }
      }
    }
  }
`
