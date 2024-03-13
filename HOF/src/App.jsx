import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HOF from './HOF'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HOF/>
    </>
  )
}

export default App
