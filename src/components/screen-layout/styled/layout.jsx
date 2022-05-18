import React from 'react'
import propTypes from 'prop-types'

import withTheme from '../../../hocs/with-theme'
import style from './style.scss'

export const LayoutStyled = withTheme(({ children, theme }) => (
    <div className={style.layout} style={{ backgroundColor: theme.noColor }}>
        {children}
    </div>
))

LayoutStyled.propTypes = {
    children: propTypes.node.isRequired
}
