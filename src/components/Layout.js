import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Navbar } from '@components/Organisms/'
import { Footer } from '@components/molecules/'
import '../scss/all.scss'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <Helmet title={data.site.siteMetadata.title} />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      )
    }}
  />
)

export default TemplateWrapper
