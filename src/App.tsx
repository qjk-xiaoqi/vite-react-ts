import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((pre) => pre + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
