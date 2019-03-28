import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import style from './style.module.scss'

const iconClass = classNames(style['breadcrumb-icons'], 'material-icons')

const Breadcrumbs = ({ data }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb m-0">
        <li className={style['breadcrumb-items']}>
          <span className={iconClass}>home</span>
          <Link to="/" className={style['breadcrumb-link']}>
            Home
          </Link>
        </li>
        {(() => {
          if (data.categories) {
            return (
              <li className={style['breadcrumb-items']}>
                <Link
                  to={data.categories[0].slug}
                  key={data.id}
                  className={style['breadcrumb-link']}
                >
                  {data.categories[0].name}
                </Link>
              </li>
            )
          } else {
            return <p>test</p>
          }
        })()}
        <li className={style['breadcrumb-items']}>
          <Link to="/" key={data.id} className={style['breadcrumb-link']}>
            {data.title}
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
