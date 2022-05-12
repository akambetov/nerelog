import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

export const LayoutStyled = ({ children }) => <div className={style.layout}>{children}</div>

LayoutStyled.propTypes = {
    children: PropTypes.node.isRequired
}
