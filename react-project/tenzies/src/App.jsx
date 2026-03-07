import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import { nanoid } from 'nanoid'
function App() {


  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: true, 
        id: nanoid() 
      }))

    // or 
    //   const arr = Array.from({ length: 10 }, () => {
    //   return Math.floor(Math.random() * 6) + 1
    // })
  }

  // console.log(generateAllNewDice());

  const [dice, setdice] = useState(generateAllNewDice())
  // console.log(1, dice);

  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={hold}
      id={die.id}
    />
  ))
  function hold(id){
    console.log(id)
  }

  function rollDice() {
    setdice(generateAllNewDice())
  }
  return (
    <>
      <main>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}

export default App
