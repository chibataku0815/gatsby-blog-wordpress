import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Sidebar } from '@components/molecules/'
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
                  <div className={style['card-thumb']}>
                    <img
                      src={post.featured_media.link}
                      className={style['card-img']}
                      alt=""
                    />
                  </div>
                  <div className={style['card-body']}>
                    <h3 className={style['card-title']}>{post.title}</h3>
                    <div
                      className={style['card-text']}
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.substr(0, 100),
                      }}
                    />
                    <div className="text-right">
                      <small className={style['card-date']}>{post.date}</small>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4">
          <Sidebar />
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
