import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          id
        }
      }
    `}
    render={data => (
      <div>
        <p>test</p>
        <p>{data.site.id}</p>
      </div>
    )}
  />
)



export default Logo