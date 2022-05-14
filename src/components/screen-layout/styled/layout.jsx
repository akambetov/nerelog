import React from 'react'
import PropTypes from 'prop-types'

import withTheme from '../../../hocks/with-theme'
import style from './style.scss'

export const LayoutStyled = withTheme(({ children, theme }) => (
    <div className={style.layout} style={{ backgroundColor: theme.noColor }}>
        {children}
    </div>
))

LayoutStyled.propTypes = {
    children: PropTypes.node.isRequired
}
