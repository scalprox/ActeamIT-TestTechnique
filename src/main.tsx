import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "@/styles/index.scss"
import App from './App.tsx'
import {DisplayPanelProvider} from "@/context/DisplayPanelContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DisplayPanelProvider>
            <App />
        </DisplayPanelProvider>
    </StrictMode>,
)
