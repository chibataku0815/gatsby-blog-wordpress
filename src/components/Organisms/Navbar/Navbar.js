// @flow

import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Logo } from 'components/atoms/'
import style from './style.module.scss'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(name: { eq: "gNav" }) {
          items {
            wordpress_id
            title
            url
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Logo />
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li className="nav-item" key={item.wordpress_id}>
                <Link
                  className={style.navLink}
                  to={item.url}
                  key={item.wordpress_id}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )}
  />
)

export default Navbar
