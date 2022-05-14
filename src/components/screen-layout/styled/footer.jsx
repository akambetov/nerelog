import React from 'react'
import PropTypes from 'prop-types'

import withTheme from '../../../hocks/with-theme'
import style from './style.scss'

export const FooterStyled = withTheme(({ children, theme }) => (
    <div className={style.footer} style={{ color: theme.primary }}>
        {children}
    </div>
))

FooterStyled.propTypes = {
    children: PropTypes.node.isRequired
}
