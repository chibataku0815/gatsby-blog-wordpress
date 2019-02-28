import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'

export const CustomPostTypesTemplate = ({ content, title, date }) => {
  return (
    <section>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div>
              <p>{date} - posted by </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CustomPostTypesTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const CustomPostTypes = ({ data }) => {
  const { WordpressWpCreditCard: creditCard } = data

  return (
    <Layout>
      <Helmet title={`${creditCard.title} | Blog`} />
      <CustomPostTypesTemplate
        content={creditCard.content}
        title={creditCard.title}
        date={creditCard.date}
      />
    </Layout>
  )
}

CustomPostTypes.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CustomPostTypes

export const CustomPostTypesQuery = graphql`
  query GetCreditCard {
    allWordpressWpCreditCard {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
