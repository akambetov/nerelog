import React, { useContext } from 'react'

import ThemeContext from '../ui/theme-context'

export default (Component) => (props) => {
    const theme = useContext(ThemeContext)

    return <Component theme={theme} {...props} />
}
