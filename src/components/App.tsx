import {useState, useEffect } from 'react'
import Sidebar from './Sidebar.tsx'
import Main from './Main.tsx'
import '../styles/index.css'
import fetchDataFromWeatherAPI from '../functions/fetchDataFromWeatherAPI.tsx'

function App() {
  const [city, setCity] = useState('')

  function handleInput(e: string) : void {
      setCity(e)
  }

  useEffect(() => {    
    fetchDataFromWeatherAPI(city || 'Lagos')
  }, [])

  return (
    <div className="App">
      <Sidebar
      city={city}
      handleInput={handleInput} 
      />
      <Main />
    </div>
  )
}

export default App