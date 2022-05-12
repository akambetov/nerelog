import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

export const FooterStyled = ({ children }) => <div className={style.footer}>{children}</div>

FooterStyled.propTypes = {
    children: PropTypes.node.isRequired
}
