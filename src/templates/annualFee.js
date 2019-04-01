import React from 'react'
// import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
// import Layout from 'components/Layout'
import { CustomTypeList } from '@components/atoms/'

function AnnualFeeTypes(props) {
  console.info(JSON.stringify(props.data.allWordpressWpCreditCard.edges))
  const customPosts = props.data.allWordpressWpCreditCard.edges
  return (
    <div>
      {customPosts.map(customPost => (
        <CustomTypeList
          key={customPost.node.id}
          title={customPost.node.title}
          posts=""
        />
      ))}
    </div>
  )
}

export default AnnualFeeTypes

export const AnnualFeeTypesQuery = graphql`
  query GetAnnualFee {
    allWordpressWpCreditCard(filter: { annual_fee: { eq: 87 } }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
