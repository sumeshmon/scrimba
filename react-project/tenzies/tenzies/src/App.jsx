import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
function App() {

  const [value, setValue] = useState(0)

  function generateAllNewDice() {
   
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))

    // or 
    //   const arr = Array.from({ length: 10 }, () => {
    //   return Math.floor(Math.random() * 6) + 1
    // })
  }

  const [dice, setdice] = useState(generateAllNewDice())
  const diceElements = dice.map(items =>
    <Die
      key={items.id}
      value={items}
    />
  )

  function rollDice(){
    setdice(generateAllNewDice())
  }
  return (
    <>
      <main>
        <div className="dice-container">
          {diceElements}
        </div>
         <button onClick={rollDice}>Roll Dice</button>
      </main>
    </>
  )
}

export default App
