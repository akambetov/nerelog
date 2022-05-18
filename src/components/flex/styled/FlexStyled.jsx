import React from 'react'
import propTypes from 'prop-types'

import withTheme from '../../../hocs/with-theme'
import style from './style.scss'

export const FlexStyled = withTheme(({ theme, children, direction }) => (
    <div
        className={style.flex}
        style={{ flexDirection: direction, backgroundColor: theme.noColor }}
    >
        {children}
    </div>
))

FlexStyled.propTypes = {
    children: propTypes.node.isRequired,
    direction: propTypes.string
}

FlexStyled.defaultProps = {
    direction: 'row'
}
