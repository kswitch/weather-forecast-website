async function fetchDataFromWeatherAPI(value: string) : Promise<object[] | undefined> {
    
    const apiKey = `e13eae33440b5e72e386cdc8dfe97460`
    const current = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}`
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${apiKey}`

        try {
            const currentWeather = await fetch(current)
            const weatherForecast = await fetch(forecast)

            if(!currentWeather.ok || !weatherForecast.ok) {
                throw Error(currentWeather.statusText) //This needs to be handled better in future.
            }

            const currentWeatherData = await currentWeather.json()
            const weatherForecastData = await weatherForecast.json()

            // console.log([currentWeatherData, weatherForecastData]); //Remove this from code later

            return [currentWeatherData, weatherForecastData]
        }
        catch(err) {
            console.warn(err)
        }
}

export default fetchDataFromWeatherAPI