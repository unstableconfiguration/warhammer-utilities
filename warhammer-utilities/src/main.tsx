import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/home'
import Theme from './configuration/theme'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Theme>
            <Home />
        </Theme>
    </StrictMode>,
)
