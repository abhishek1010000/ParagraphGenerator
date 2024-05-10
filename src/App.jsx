import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoremGenerator from './LoremGen/LoremGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoremGenerator/>
    </>
  )
}

export default App
