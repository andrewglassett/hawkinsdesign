import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Hawkins Design" />
        <h1>Hello & Welcome</h1>
        <h2>I have been designing digital things & processes for 12 years now. I love solving problems, especially when I can use data and user research to create a methodology.</h2>
        <p><a href="https://linkedin.com/in/andrewglassett" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="LinkedIn">🔗</span> LinkedIn </a>{` `}</p>
        <a href="https://drive.google.com/file/d/1JJ6EAPshe6jj9zF94v1cN6UJlHDDpX6O/view?usp=sharing"><span role="img" aria-label="Resume">📄</span> View Resume</a>
        <h2>Recent Experience</h2>
        <h3>Senior Product Designer - Sony Music Entertainment | Current</h3>
        <p>Research tools and methods and influence organization to make more design related decisions. Run design sprints and lead design meetings while working 100% remote.</p>
        <h3>Senior Product Designer - Handy | 2018 - 2019</h3>
        <p>Led and managed a team of product and visual designers. Collaborated with product, growth and engineering teams to create best practices. Created a design system while being the voice of design for the company.</p>
        <h3>Senior Product Designer - Vimeo | 2017 - 2018</h3>
        <p>The data designer. I use data from various sources internally and externally to make recommendations for A-B tests. I am also becoming more involved in product decisions, all the while creating prototypes in various levels of fidelity to keep products moving forward. My favorite workflow is to start with a napkin drawing, and then move right into co-working with an engineer.</p>
        <h3>Senior Product Designer - The Orchard / Sony Music | 2015 - 2017</h3>
        <p>Lead designer. Created high fidelity prototypes and specs using Sketch, code and various prototyping programs. Planned and performed design workshops and sprints. Planned and conducted interviews and usability studies with users & stakeholders. Influenced product strategy and led design for a variety of complex distribution, analytics, and accounting apps. Created and maintained styleguide.</p>
        <h3>UX Designer - Vice / Carrot Creative | 2013 - 2015</h3>
        <p>Designed user interfaces, displayed information architecture for large scale websites and apps. Created advanced prototypes for desktop & mobile. Conducted heuristic evaluations, usability tests and stakeholder interviews. Created customer experience maps and annotated wireframes.</p>
        <h3>UX/UI Designer - Warner Music / Atlantic Records | 2011 - 2013</h3>
        <p>Developed brands and designed web and mobile experiences for popular and emerging artists. Worked on a team that created a responsive web framework for Drupal. As the resident technology “guy” I was always pushing the boundaries of not only design, but in the tools we used to create.</p>
        <h2>Stuff I'm Into</h2>
        <p>I'm well informed about modern tools for expressing design & analysis. I use Figma, Google Analytics, Pen & Paper, Sticky Notes, HTML, CSS & JS everyday. I'm a bit of a food junky and am busy with various fermentations, spices and grilled things.</p>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
