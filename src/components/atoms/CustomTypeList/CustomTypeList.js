import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const CustomTypeList = ({ posts, title }) => (
  <section className="section pt-5">
    <div className="container p-0">
      <div className="col-lg-8">
        <div className={style.card}>
          <p>{title}</p>
          <p>{posts}</p>
        </div>
      </div>
    </div>
  </section>
)

CustomTypeList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default CustomTypeList
