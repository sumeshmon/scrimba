import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './lessions/declareitivity.jsx'
import Declaritivity from './lessions/declareitivity.jsx'

function MainContent() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer if I know React</li>
      </ol>
    </main>
  )
}
function Header() {
  return (
    <header>
      <img src={reactLogo} width="40px" alt="React logo" />
    </header>
  )
}
function Footer() {
  return (
    <footer>
      <small>© 2025 Sumesh development. All rights reserved.</small>
    </footer>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Declaritivity />
      <Header/>
      <MainContent/>
      <Footer/>
     
    </>
  )
}

export default App
