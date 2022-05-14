import React from 'react'
import propTypes from 'prop-types'

import withTheme from '../../../hocks/with-theme'
import style from './style.scss'

export const HeaderStyled = withTheme(
    ({ title, theme }) =>
        title && (
            <div className={style.header} style={{ color: theme.primary }}>
                {title}
            </div>
        )
)

HeaderStyled.propTypes = {
    title: propTypes.string
}

HeaderStyled.defaultProps = {
    title: ''
}
