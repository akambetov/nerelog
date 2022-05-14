import { createContext } from 'react'

import * as light from './light.theme.style'
import * as dark from './dark.theme.style'

export const themes = {
    dark: {
        noColor: dark.noColor,
        primary: dark.primary
    },
    light: {
        noColor: light.noColor,
        primary: light.primary
    }
}

export default createContext(themes.dark)
