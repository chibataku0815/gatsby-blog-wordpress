import React from 'react'
import Helmet from 'react-helmet'
import { Navbar } from '@components/Organisms/'
import { Footer } from '@components/molecules/'
import '../scss/all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
