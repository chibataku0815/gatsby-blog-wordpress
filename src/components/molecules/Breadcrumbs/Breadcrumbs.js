import React from 'react'
import { Link } from 'gatsby'

const Breadcrumbs = ({ data }) => {
  console.info(data)
  return (
    <nav aria-label="breadcrumb">
      <div className="container">
        <ol className="breadcrumb m-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {(() => {
            if (data.categories.length) {
              return (
                <li className="breadcrumb-item">
                  <Link to={data.categories[0].slug} key={data.id}>
                    {data.categories[0].name}
                  </Link>
                </li>
              )
            }
          })()}
          <li className="breadcrumb-item">
            <Link to="/" key={data.id}>
              {data.title}
            </Link>
          </li>
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumbs
