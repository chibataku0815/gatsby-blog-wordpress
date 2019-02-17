// @flow

import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

const moduleClass = classNames(style.navbarBrand, '')

const Logo = () => (
  <a className={moduleClass} href="/">
    クレジットカード比較
  </a>
)

export default Logo
