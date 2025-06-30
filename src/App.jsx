import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { CurrencyContext } from './Context/CurrencyContext'


function App() {

  const [currency, setCurrency] = useState('usd')

  return (
    <>
      <CurrencyContext.Provider value={{currency,setCurrency}}>
        <HomePage />
      </CurrencyContext.Provider>
    </>
  )
}

export default App
