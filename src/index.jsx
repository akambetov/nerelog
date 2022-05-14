import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './routes'
import ThemeContext, { themes } from './ui/theme-context'
import { BorderlessButton } from './components/button'

const App = () => {
    const lightTheme = 'Светлая тема'
    const darkTheme = 'Темная тема'
    const [theme, setTheme] = useState(themes.dark)
    const [mode, setMode] = useState(lightTheme)

    const onThemeChange = () => {
        if (theme === themes.dark) {
            setTheme(themes.light)
            setMode((prev) => (prev === darkTheme ? lightTheme : darkTheme))
        } else {
            setTheme(themes.dark)
            setMode((prev) => (prev === darkTheme ? lightTheme : darkTheme))
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            <BorderlessButton title={mode} onClick={onThemeChange} position="absolute" />
            <Router>
                <AppRoutes />
            </Router>
        </ThemeContext.Provider>
    )
}
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
