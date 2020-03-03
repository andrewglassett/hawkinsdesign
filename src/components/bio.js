/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        maxWidth: rhythm(24),
        marginTop: rhythm(3)
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1),
          minWidth: 75,
          minHeight: 75,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>Hawkins Design is <strong>{author}</strong> who lives and works in Denver, CO.
      {` `}
        <a href={`https://linkedin.com/in/${social.twitter}`} target="_blank" rel="noopener noreferrer">
           LinkedIn
        </a>{` `}
        <a href={`/about`}>
           View Bio
        </a>{` `}
        <a href={`https://drive.google.com/file/d/1JJ6EAPshe6jj9zF94v1cN6UJlHDDpX6O/view?usp=sharing`}>
           Resume
        </a>{` `}
      </p>
    </div>
  )
}

export default Bio
