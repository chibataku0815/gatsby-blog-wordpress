// @flow

import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { FooterBottom } from 'components/atoms/'
import style from './style.module.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(name: { eq: "footerNav" }) {
          items {
            wordpress_id
            title
            url
          }
        }
      }
    `}
    render={data => (
      <footer className="bg-primary text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-4">
              <h5 className={style['footer-nav-title']}>機能&特徴から選ぶ</h5>
              <ul className="navbar-nav pt-2">
                {data.wordpressWpApiMenusMenusItems.items.map(item => (
                  <li className="nav-item mb-2" key={item.wordpress_id}>
                    <Link
                      className={style['footer-nav-text']}
                      to={item.url}
                      key={item.wordpress_id}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-4" />
            <div className="col-4">
              <h5 className={style['footer-nav-title']}>このサイトについて</h5>
              <p className={style['footer-nav-text']}>
                当サイトはクレジットカードを上手に選び、便利なポイントサービスなどを紹介する無料情報ポータルです。
              </p>
            </div>
          </div>
        </div>
        <FooterBottom />
      </footer>
    )}
  />
)

export default Footer
