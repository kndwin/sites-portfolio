import React from "react"
import styles from "./project.module.scss"

export default function ProjectLinks (props) {

  // convert string to css module class name
  const tagInfo = (tag) => {
    var tagInfo = {
      cssModule: '',
      link: '',
      logo: ''
    };

    switch (tag) {
      case 'node':
        tagInfo = {
          cssModule: styles.node,
          link: 'https://nodejs.org',
          logo: 'https://simpleicons.org/icons/node-dot-js.svg'
        }
        break;
      case 'heroku':
        tagInfo = {
          cssModule: styles.heroku,
          link: 'https://heroku.com',
          logo: 'https://simpleicons.org/icons/heroku.svg'
        }
        break;
      case 'mongodb':
        tagInfo = {
          cssModule: styles.mongodb,
          link: 'https://mongodb.com',
          logo: 'https://simpleicons.org/icons/mongodb.svg'
        }
        break;
      case 'express':
        tagInfo = {
          cssModule: styles.express,
          link: 'https://expressjs.com',
        }
        break;
      case 'multer':
        tagInfo = {
          cssModule: styles.multer,
          link: 'https://github.com/expressjs/multer',
        }
        break;
      case 'react':
        tagInfo = {
          cssModule: styles.react,
          link: 'https://reactjs.org',
          logo: 'https://simpleicons.org/icons/react.svg'
        }
        break;
      case 'bootstrap':
        tagInfo = {
          cssModule: styles.bootstrap,
          link: 'https://getbootstrap.com',
          logo: 'https://simpleicons.org/icons/bootstrap.svg'
        }
        break;
      case 'codepen':
        tagInfo = {
          cssModule: styles.codepen,
          link: 'https://codepen.io',
          logo: 'https://simpleicons.org/icons/codepen.svg'
        }
        break;
      case 'markdown':
        tagInfo = {
          cssModule: styles.markdown,
          link: 'https://github.com/markedjs/marked',
          logo: 'https://simpleicons.org/icons/markdown.svg'
        }
        break;
      case 'sass':
        tagInfo = {
          cssModule: styles.sass,
          link: 'https://sass-lang.com',
          logo: 'https://simpleicons.org/icons/sass.svg'
        }
        break;
      case 'redux':
        tagInfo = {
          cssModule: styles.redux,
          link: 'https://redux.js.org',
          logo: 'https://simpleicons.org/icons/redux.svg'
        }
        break;
      case 'gatsby':
        tagInfo = {
          cssModule: styles.gatsby,
          link: 'https://gatsbyjs.org',
          logo: 'https://simpleicons.org/icons/gatsby.svg'
        }
        break;
      case 'graphql':
        tagInfo = {
          cssModule: styles.graphql,
          link: 'https://graphql.org',
          logo: 'https://simpleicons.org/icons/graphql.svg'
        }
        break;
      case 'netlify':
        tagInfo = {
          cssModule: styles.netlify,
          link: 'https://netlify.com',
          logo: 'https://simpleicons.org/icons/netlify.svg'
        }
        break;
      case 'google-map':
        tagInfo = {
          cssModule: styles.google_map,
          link: 'https://developers.google.com/maps/documentation',
          logo: 'https://simpleicons.org/icons/googlemaps.svg'
        }
        break;
      case 'd3':
        tagInfo = {
          cssModule: styles.d3,
          link: 'https://d3js.org',
          logo: 'https://simpleicons.org/icons/d3-dot-js.svg'
        }
        break;
      default: 
        break;
    }
    return tagInfo;
  }

  return (
    <div>
      <p>
        <span className={styles.name}>
          {props.name} -&nbsp;
        </span>
        {props.shortDescription}
        <br />
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
          )
        </span>
        <br />
        <div className={styles.tag_group}>
          {props.tags.map((tag) => 
              <a href={tagInfo(tag).link}
                className={styles.tag_link}>
                <span className={`${tagInfo(tag).cssModule} 
                  ${styles.tag}`}>
                  {tag}
                  <img src={tagInfo(tag).logo} 
                    className={styles.logo}/>
                </span>
              </a>
          )}
        </div>
      </p>
    </div>
  )
}
