import React from 'react'
import propTypes from 'prop-types'

import style from './style.scss'
import withTheme from '../../../hocs/with-theme'

export const ContentStyled = withTheme(({ theme, children }) => (
    <div className={style.content} style={{ color: theme.primary }}>
        {children}
    </div>
))

ContentStyled.propTypes = {
    children: propTypes.node.isRequired
}
