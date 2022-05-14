import React from 'react'
import PropTypes from 'prop-types'

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
    title: PropTypes.string
}

HeaderStyled.defaultProps = {
    title: ''
}
