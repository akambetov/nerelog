import React from 'react'
import propTypes from 'prop-types'

import withTheme from '../../../hocs/with-theme'
import style from './style.scss'

export const FooterStyled = withTheme(({ children, theme }) => (
    <div className={style.footer} style={{ color: theme.primary }}>
        {children}
    </div>
))

FooterStyled.propTypes = {
    children: propTypes.node.isRequired
}
