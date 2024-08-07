import { useState } from 'react'
import fraglogo from './assets/img/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={fraglogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Welcome to FragInfinity</h1>
    
    </>
  )
}

export default App
