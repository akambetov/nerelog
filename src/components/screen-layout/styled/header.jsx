import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

export const HeaderStyled = ({ title }) => title && <div className={style.header}>{title}</div>

HeaderStyled.propTypes = {
    title: PropTypes.string
}

HeaderStyled.defaultProps = {
    title: ''
}
