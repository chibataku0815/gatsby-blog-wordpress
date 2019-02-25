import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import style from './style.module.scss'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section pt-5">
        <div className="container p-0">
          <div className="col-lg-8">
            <h1 className="">{title}</h1>
            {posts.map(({ node: post }) => (
              <div className={style.card} key={post.id}>
                <Link className="d-flex" to={post.slug}>
                  <div className={style.cardThumb}>
                    <img
                      src={post.featured_media.link}
                      className={style.cardImg}
                      alt=""
                    />
                  </div>
                  <div className={style.cardBody}>
                    <h3 className={style.cardTitle}>{post.title}</h3>
                    <div
                      className={style.cardText}
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.substr(0, 100),
                      }}
                    />
                    <div className="text-right">
                      <small className={style.cardDate}>{post.date}</small>
                    </div>
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
    date(formatString: "YYYY年MM月DD日")
    slug
  }
`
