import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeContext, { themes } from './ui/theme-context'
import AppRoutes from './routes'

const App = () => (
    <ThemeContext.Provider value={themes.dark}>
        <Router>
            <AppRoutes />
        </Router>
    </ThemeContext.Provider>
)
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
