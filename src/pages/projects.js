import React from "react"
import Layout from "../components/layout.js"
import ProjectLinks from "../components/project.js"

export default function ProjectPage() {
  let projects = [
    {
      type: "backend",
      name: "💪 exercise tracker",
      tags: ["node","express","heroku","mongodb"],
      linkToDemo: "https://kndwin-fcc-exercise-tracker.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-exercisetracker",
      shortDescription: "several REST API endpoints that tracks a user's exercise"
    },
    {
      type: "backend",
      name: "📏 url shortener",
      tags: ["node","express","heroku","mongodb"],
      linkToDemo: "https://kndwin-fcc-urlshortener.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-urlshortener",
      shortDescription: "returns an endpoint that redirects to given URL"
    },
    {
      type: "backend",
      name: "📂 file metadata",
      tags: ["node","express","heroku","multer"],
      linkToDemo: "https://kndwin-fcc-filemetadata.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-filemetadata",
      shortDescription: "returns metadata about an uploaded file"
    },
    {
      type: "backend",
      name: "⏱️ timestamp",
      tags: ["node","express","heroku"],
      linkToDemo: "https://kndwin-fcc-timestamp.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-timestamp",
      shortDescription: "returns the date in ISO-8601 format"
    },
    {
      type: "backend",
      name: "🗣️ header parser",
      tags: ["node","express","heroku"],
      linkToDemo: "https://kndwin-fcc-headerparser.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-headerparser",
      shortDescription: "returns header information of a GET request"
    },
    {
      type: "frontend",
      name: "💬 random quote generator",
      tags: ["react","bootstrap","codepen"],
      linkToDemo: "https://cdpn.io/kndwin/debug/GRgEEaB/wQMPozXQqYBk" ,
      linkToSourceCode: "https://codepen.io/kndwin/pen/GRgEEaB",
      shortDescription: "generates a random Simpsons quote"
    },
    {
      type: "frontend",
      name: "markdown previewer",
      tags: ["react","markdown","codepen"],
      linkToDemo: "https://cdpn.io/kndwin/debug/bGNRKBB/yPMJjKwpdoEM" ,
      linkToSourceCode: "https://codepen.io/kndwin/details/bGNRKBB",
      shortDescription: "converts raw text to html and previews it side by side"
    },
    {
      type: "frontend",
      name: "drumpad",
      tags: ["react","sass","codepen"],
      linkToDemo: "https://cdpn.io/kndwin/debug/rNawrKa/LQkExyGQaOVA" ,
      linkToSourceCode: "https://codepen.io/kndwin/pen/rNawrKa",
      shortDescription: "buttons generate sounds like a pad"
    },
    {
      type: "frontend",
      name: "pomodoro timer",
      tags: ["react","sass","redux","codepen"],
      linkToDemo: "https://cdpn.io/kndwin/debug/abOdKEz/LQMExyGQjPgk",
      linkToSourceCode: "https://codepen.io/kndwin/pen/ab0dKEz",
      shortDescription: "(unstylised) simple timer built to experiment react with redux"
    },
    {
      type: "frontend",
      name: "calculator",
      tags: ["react","sass","codepen"],
      linkToDemo: "https://cdpn.io/kndwin/debug/rNawrKa/LQkExyGQaOVA" ,
      linkToSourceCode: "https://codepen.io/kndwin/pen/rNawrKa",
      shortDescription: "(unstylised) simple calculator app built to experiment with react components"
    },
    {
      type: "other",
      name: "portfolio",
      tags: ["gatsby","graphql","netlify"],
      linkToDemo: "https://kndwin.dev",
      linkToSourceCode: "https://github.com/kndwin/gatsby-portfolio",
      shortDescription: "a gatsby generate site to showcase my projects"
    },
    {
      type: "other",
      name: "de-coco",
      tags: ["react","google-map","netlify"],
      linkToDemo: "https://de-coco.com.au",
      linkToSourceCode: "https://github.com/kndwin/site-decoco-react-netlify",
      shortDescription: "simple SPA site that for a local furniture business"
    },
  ]

  let displayProject = (projectType) => {
    return (
      <div>
        <h1>{projectType}</h1>
        {projects
          .filter((project) => project.type === projectType)
          .map((project) => 
            <ProjectLinks 
              name={project.name} 
              tags={project.tags}
              linkToSourceCode={project.linkToSourceCode}
              linkToDemo={project.linkToDemo}
              shortDescription={project.shortDescription}/>)
        }
      </div>
      )
  }

  return  (
    <Layout>
      {displayProject("backend")}
      {displayProject("frontend")}
      {displayProject("other")}
    </Layout>
  )
}
