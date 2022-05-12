import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.scss'

export const LayoutStyled = ({ children }) => <div className={styles.layout}>{children}</div>

LayoutStyled.propTypes = {
    children: PropTypes.node.isRequired
}
