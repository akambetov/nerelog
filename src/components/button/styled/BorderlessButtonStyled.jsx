import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'
import withTheme from '../../../hocks/with-theme'

const BorderlessButtonStyled = withTheme(({ theme, title, position, onClick }) => (
    <button
        className={style.borderless}
        style={{ backgroundColor: theme.noColor, color: theme.primary, position }}
        type="button"
        onClick={onClick}
    >
        {title}
    </button>
))

BorderlessButtonStyled.propTypes = {
    title: PropTypes.string.isRequired,
    position: PropTypes.string,
    onClick: PropTypes.func
}

BorderlessButtonStyled.defaultProps = {
    position: 'static',
    onClick: () => {}
}

export default BorderlessButtonStyled
