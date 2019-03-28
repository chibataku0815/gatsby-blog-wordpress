// @flow

import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import style from './style.module.scss'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      widgets: {},
    }
  }

  componentDidMount() {
    console.log('DidMount')
    axios.get(`${process.env.GATSBY_API_SIDEBAR_URL}`).then(res => {
      console.log(res.data)
      const widgets = res.data
      this.setState({ widgets })
    })
  }
  render() {
    const { children } = this.props

    return (
      <aside className={style.sidebar}>
        <div
          className="cps-post-main"
          dangerouslySetInnerHTML={{ __html: this.state.widgets.rendered }}
        />
      </aside>
    )
  }
}

export default Sidebar
