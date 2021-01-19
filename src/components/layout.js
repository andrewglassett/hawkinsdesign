import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Rosario, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Hawkins Design
          {` `}
          <a
            style={{
              marginRight: rhythm(1/2),
              marginLeft: rhythm(1/2),
            }}
            href={`/`}><span role="img" aria-label="Home">🏠</span> Home</a>{` `}
          <a
            style={{
              marginRight: rhythm(1/2),
            }}
            href={`https://linkedin.com/in/andrewglassett`} target="_blank" rel="noopener noreferrer"><span role="img" aria-label="LinkedIn">🔗</span> LinkedIn
          </a>{` `}
          <a
            style={{
              marginRight: rhythm(1/2),
            }}
             href={`/about`}><span role="img" aria-label="Bio">🧔</span> Bio
          </a>{` `}
          <a href={`https://drive.google.com/file/d/1JJ6EAPshe6jj9zF94v1cN6UJlHDDpX6O/view?usp=sharing`} target="_blank" rel="noopener noreferrer">
             <span role="img" aria-label="Resume">📄</span> Resume
          </a>{` `}
        </footer>
      </div>
    )
  }
}

export default Layout
