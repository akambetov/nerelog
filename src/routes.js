import { Route, Routes } from 'react-router-dom'

import MainPage from './features/main-page'

export default () => (
    <Routes>
        {' '}
        <Route path="/" element={<MainPage />} />
    </Routes>
)
