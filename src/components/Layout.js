import React from 'react'
import Helmet from 'react-helmet'
import { Navbar } from '@components/Organisms/'
import { Badge } from '@components/atoms/'
// eslint-disable-next-line import/no-unresolved
import '../scss/all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Badge value="test" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
