import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
function App() {

const [value, setValue] = useState(0)
  return (
    <>
      <main>
      <div className="dice-container">
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
      </div>
        
      </main>
    </>
  )
}

export default App
