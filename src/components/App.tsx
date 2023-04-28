import { useState, useEffect } from 'react'
import Sidebar from './Sidebar.tsx'
import Main from './Main.tsx'
import '../styles/index.css'
import fetchDataFromWeatherAPI from '../functions/fetchDataFromWeatherAPI.tsx'
import { eventObjects } from '../interfaces/typeDeclarations.tsx'

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<object[]>([])

  function handleInput(value: string) : void {
    setCity(value)
  }

  useEffect(() => {
    (async () => {
      const data = await fetchDataFromWeatherAPI(city || 'Lagos')
      setWeatherData(data)
    })()

  }, [])

  async function handleEnter(e: eventObjects) : Promise<void> {
    if(e.key == 'Enter') {
      const data = await fetchDataFromWeatherAPI(city || 'Lagos')
      setWeatherData(data)
    }
  }

  return (
    <div className="App">
      <Sidebar
      city={city}
      handleInput={handleInput}
      handleEnter={handleEnter}
      weatherData={[...weatherData]}
      />
      <Main />
    </div>
  )
}

export default App