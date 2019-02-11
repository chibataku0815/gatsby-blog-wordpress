import React from 'react'
import Helmet from 'react-helmet'

import Navbar from 'src/components/Navbar'
import {Badge} from 'src/components/atoms/'
// eslint-disable-next-line import/no-unresolved
import '../scss/all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Badge />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
