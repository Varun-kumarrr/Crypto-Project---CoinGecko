import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { CurrencyContext } from './Context/CurrencyContext'
import Routing from './components/Routing/Routing'


function App() {

  const [currency, setCurrency] = useState('usd')

  return (
    <>
      <CurrencyContext.Provider value={{currency,setCurrency}}>
        <Routing/>
      </CurrencyContext.Provider>
    </>
  )
}

export default App
