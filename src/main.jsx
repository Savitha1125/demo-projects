import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import NavScrollExample from './App.jsx'
import CoffeeCards from './coffees.jsx'
import ContactForm from './Myform.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavScrollExample />
    <CoffeeCards />
    <ContactForm />
  </StrictMode>,
)
