import React from 'react'
import propTypes from 'prop-types'

import style from './style.scss'

export const CardStyled = ({ children }) => <div className={style.container}>{children}</div>

CardStyled.propTypes = {
    children: propTypes.node
}

CardStyled.defaultProps = {
    children: null
}
