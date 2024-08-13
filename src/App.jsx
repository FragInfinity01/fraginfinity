import { useState } from 'react'
import fraglogo from './assets/img/logo.png'
import './VerticalText.css'
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
      <VerticalText/>
    </>
  )
}

function VerticalText() {
  return (
    <div className="vertical-text-container">
      <div className="vertical-text">FRAG INFINITY</div>
    </div>
  );
}

export default App
