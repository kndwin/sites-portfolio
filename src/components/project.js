import React from "react"
import styles from "./project.module.scss"

export default function ProjectLinks (props) {

  // convert string to css module class name
  let tagClass = (tag) => {
    var cssModuleTag = "";
    switch (tag) {
      case 'node':
        cssModuleTag = styles.node
        break;
      case 'heroku':
        cssModuleTag = styles.heroku
        break;
      default: 
        break;
    }
    return cssModuleTag;
  }


  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.shortDescription}</p>
      <span>
        <a href={props.linkToDemo}
          className={styles.link}>
          demo
        </a>
        &nbsp; (
        <a href={props.linkToSourceCode}
          className={styles.link}>
          source code
        </a>
        ) &nbsp;
      {props.tags.map((tag) => 
        <span className={`${tagClass(tag)} ${styles.tag}`}>
          {tag}
        </span>
      )}
      </span>
    </div>
  )
}
