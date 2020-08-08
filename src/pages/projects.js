import React from "react"
import Layout from "../components/layout.js"
import ProjectLinks from "../components/project.js"

export default function ProjectPage() {
  let projects = [
    {
      type: "backend",
      name: "url shortner",
      tags: ["node","heroku"],
      linkToDemo: "example.com",
      linkToSourceCode: "example.com/source",
      shortDescription: "This project does this and that"
    },
    {
      type: "backend",
      name: "file metadata",
      tags: ["node","heroku"],
      linkToDemo: "example.com",
      linkToSourceCode: "example.com/source",
      shortDescription: "This project does this and that"
    },
  ]
  return  (
    <Layout>
      {projects.map((project) => 
        <ProjectLinks name={project.name} 
          tags={project.tags}
          linkToSourceCode={project.linkToSourceCode}
          linkToDemo={project.linkToDemo}
          shortDescription={project.shortDescription}/>
      )}
    </Layout>
  )
}
