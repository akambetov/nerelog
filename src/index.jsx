import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'

const App = () => (
    <Router>
        <AppRoutes />
    </Router>
)
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
