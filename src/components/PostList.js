import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="">{title}</h1>
            {posts.map(({ node: post }) => (
              <div className="card" key={post.id}>
                <Link className="button is-small" to={post.slug}>
                  <img src={post.featured_media.link} alt=""/>
                  <p>{post.title}</p>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.substr(0, 100),
                      }}
                    />
                    <small>{post.date}</small>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    featured_media {
      link
    }
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "YYYY年MM月DD日")
    slug
  }
`
