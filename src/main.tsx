import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return "App component"
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
