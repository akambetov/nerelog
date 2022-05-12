import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

export const ContentStyled = ({ children }) => <div className={style.content}>{children}</div>

ContentStyled.propTypes = {
    children: PropTypes.node.isRequired
}
