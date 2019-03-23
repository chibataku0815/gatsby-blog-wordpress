import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Breadcrumbs } from '@components/molecules/'
import { Badge } from '@components/atoms/'
import Layout from '../../components/Layout'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  modified,
  featuredMedia,
  author,
}) => {
  return (
    <section className="wp-themes container pt-5">
      <div className="cps-post-box col-lg-8">
        {categories && categories.length ? (
          <div>
            {categories.map(category => (
              <span
                className="cps-post-cat category-blog"
                key={`${category.slug}cat`}
              >
                <Link to={`/${category.slug}/`}>
                  <Badge value={category.name} />
                </Link>
              </span>
            ))}
          </div>
        ) : null}
        <h1 className="cps-post-title mt-3">{title}</h1>
        <div className="text-right">
          <time className="entry-date">
            {date}/{modified}
          </time>
        </div>
        <img src={featuredMedia.link} className="my-3" alt="" />
        <div
          className="cps-post-main"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div>
          <p>
            {date} - posted by{' '}
            <Link to={`/author/${author.slug}`}>{author.name}</Link>
          </p>
          {categories && categories.length ? (
            <div>
              <h4>Categories</h4>
              <ul className="taglist">
                {categories.map(category => (
                  <li key={`${category.slug}cat`}>
                    <Link to={`/${category.slug}/`}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {tags && tags.length ? (
            <div>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={`${tag.slug}tag`}>
                    <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        modified={post.modified}
        featuredMedia={post.featured_media}
        author={post.author}
      />
      <Breadcrumbs data={data.wordpressPost} />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "YYYY年MM月DD日")
    modified(formatString: "YYYY年MM月DD日")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "YYYY年MM月DD日")
      modified(formatString: "YYYY年MM月DD日")
      featured_media {
        link
      }
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
    }
  }
`
