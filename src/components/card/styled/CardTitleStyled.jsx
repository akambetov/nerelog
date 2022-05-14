import React from 'react'
import propTypes from 'prop-types'

export const CardTitleStyled = ({ title }) => title && <p>{title}</p>

CardTitleStyled.propTypes = {
    title: propTypes.string
}

CardTitleStyled.defaultProps = {
    title: null
}
