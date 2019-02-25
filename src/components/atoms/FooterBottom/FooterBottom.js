// @flow

import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import style from './style.module.scss'

const FooterBottom = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(name: { eq: "footerBottomNav" }) {
          items {
            wordpress_id
            title
            url
          }
        }
      }
    `}
    render={data => (
      <div className={style.footerBottom}>
        <div className="container d-flex align-items-center justify-content-between">
          <ul className={style.footerBottomNav}>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li className={style.footerBottomNavItem} key={item.wordpress_id}>
                <Link
                  className={style.footerBottomText}
                  to={item.url}
                  key={item.wordpress_id}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="copyright">
            2018–2019 クレジットカードおすすめ比較
          </div>
        </div>
      </div>
    )}
  />
)

export default FooterBottom
