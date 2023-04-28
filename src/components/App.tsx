import {useState, useEffect } from 'react'
import Sidebar from './Sidebar.tsx'
import Main from './Main.tsx'
import '../styles/index.css'
import fetchDataFromWeatherAPI from '../functions/fetchDataFromWeatherAPI.tsx'

function App() {
  const [city, setCity] = useState('')

  function handleInput(value: string) : void {
      setCity(value)
  }

  useEffect(() => {
    (async () => {
      const data = await fetchDataFromWeatherAPI(city || 'Lagos')
      console.log(data)
      // setWeatherData(data)
      
    })()
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