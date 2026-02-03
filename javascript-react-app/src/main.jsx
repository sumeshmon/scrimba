import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './travel.css'
// import App from './App.jsx'
// import App from './travel-journal/App.jsx'
import App from './contact-card/App.jsx'

createRoot(document.getElementById('root')).render(
  <App/> 
)


/**
 * Challenge - Travel journy:
 * 
 * - Create an App component in a separate file.
 *   Import it here and render it
 * - Create a "components" folder and a Header component.
 *   Render the Header inside the App component.
 * - Follow the Travel Journal design to build the Header
 *   for our page.
 */