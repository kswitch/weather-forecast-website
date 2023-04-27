async function fetchDataFromWeatherAPI<T>(value: string) : Promise<T | undefined> {
    
    const apiKey = `e13eae33440b5e72e386cdc8dfe97460`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`

        try {
            const res = await fetch(url)
            if(!res.ok) {
                throw Error(res.statusText)
            }
            const data = await res.json()
            console.log(data); //Remove this from code later
            
            return data
        }
        catch(err) {
            console.warn(err)
        }
}

export default fetchDataFromWeatherAPI