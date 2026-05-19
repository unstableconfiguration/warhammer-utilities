import { StrictMode } from 'react'
import Theme from './configuration/theme'
import Router from './configuration/router'

export default function App() {

    return (
        <StrictMode>
            <Theme>
                <Router />
            </Theme>
        </StrictMode>
    )
}

