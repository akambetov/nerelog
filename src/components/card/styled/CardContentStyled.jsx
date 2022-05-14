import React from 'react'
import propTypes from 'prop-types'

export const CardContentStyled = ({ content }) => content && <p>{content}</p>

CardContentStyled.propTypes = {
    content: propTypes.string
}

CardContentStyled.defaultProps = {
    content: null
}
