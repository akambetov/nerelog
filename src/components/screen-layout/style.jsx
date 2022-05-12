import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

export const LayoutStyled = ({ children }) => <div className={style.layout}>{children}</div>

LayoutStyled.propTypes = {
    children: PropTypes.node.isRequired
}

export const HeaderStyled = ({ title }) => title && <div className={style.header}>{title}</div>

HeaderStyled.propTypes = {
    title: PropTypes.string
}

HeaderStyled.defaultProps = {
    title: ''
}

export const ContentStyled = ({ children }) => <div className={style.content}>{children}</div>

ContentStyled.propTypes = {
    children: PropTypes.node.isRequired
}

export const FooterStyled = ({ children }) => <div className={style.footer}>{children}</div>

FooterStyled.propTypes = {
    children: PropTypes.node.isRequired
}
