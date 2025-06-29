import { useState } from 'react'
import './App.css'
import CoinTable from './components/CoinTable/CoinTable'
import NavBar from './components/NavBar/NavBar'

function App() {
  
  const [currency,setCurrency] = useState('usd')

  return (
    <>
      <NavBar setCurrency={setCurrency}/>
      
      <CoinTable currency={currency}/>
    </>
  )
}

export default App
