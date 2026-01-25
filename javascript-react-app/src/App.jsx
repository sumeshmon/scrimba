import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './lessions/declareitivity.jsx'
import Declaritivity from './lessions/declareitivity.jsx'

function Header() {
  return (
    <header>
      <nav>
        <img src={reactLogo} width="40px" alt="React logo" />
        <span className='logo-tagline'>ReactFacts</span>
      </nav>
    </header>
  )
}
function MainContent() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>Header
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
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

      <Header />
      <MainContent />
      <Declaritivity />
      <Footer />

    </>
  )
}

export default App
