import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './travel.css'
import './chef-claude.css'
import './card.css'
import './form.css'
import './sound-pad.css'
import './meme.css'
// import App from './App.jsx'
// import App from './travel-journal/App.jsx'
// import App from './contact-card/App.jsx'
// import App from './jokes/App.jsx'
import App from './challenges/App'
// import App from "./chef-claude/App.jsx" 
// import App  from './meme-generator/App'
// import App from "./challenges/fetching-data/App"
// import App from "./challenges/state-effects/App"



// console.log(import.meta.env.VITE_HF_ACCESS_TOKEN)
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