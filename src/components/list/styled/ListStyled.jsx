import React from 'react'
import propTypes from 'prop-types'

import style from './style.scss'

export const ListStyled = ({ children }) => (
    <div className={style['list-container']}>{children}</div>
)

ListStyled.propTypes = { children: propTypes.node.isRequired }
