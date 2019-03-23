// @flow

import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'
import type { Props } from './type'

const moduleClass = classNames(style.badge, style['badge-my-yellow'])

const Badge = ({ value }: Props) => <span className={moduleClass}>{value}</span>

export default Badge
