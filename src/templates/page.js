import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Breadcrumbs } from '@components/molecules/'
import Layout from '../components/Layout'

export const PageTemplate = ({ title, content }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <Layout>
      <PageTemplate title={page.title} content={page.content} />
      <Breadcrumbs data={data} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`
