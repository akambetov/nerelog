import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'
import withTheme from '../../../hocks/with-theme'

export const ContentStyled = withTheme(({ theme, children }) => (
    <div className={style.content} style={{ color: theme.primary }}>
        {children}
    </div>
))

ContentStyled.propTypes = {
    children: PropTypes.node.isRequired
}
