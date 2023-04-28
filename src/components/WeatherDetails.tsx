function weatherDetails({weatherData}: {weatherData: any}) {  
    const currentWeather = weatherData[0]
    const iconID = currentWeather && currentWeather.weather[0].icon
    
    return (
        <div className="weather-details">
            {
                weatherData.length ?
                (
                    <>
                        <div className="temp-and-weather">
                            <p className="location">{currentWeather.name}</p>
                            <div className="temp-main">
                                <img src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} className="weather-icon" alt="Weather Icon"/>
                                <p className="temperature">{currentWeather.main.temp}<sup>&deg;C</sup></p>
                            </div>
                            <div className="weather-main">
                                {currentWeather.weather[0].main}
                            </div>
                        </div>
                        <div className="humidity-and-wind-speed">
                            <div className="humidity">
                                <p className="text">Humidity</p>
                                <p>{currentWeather.main.humidity}%</p>
                            </div>
                            <div className="wind-speed">
                                <p className="text">Wind speed</p>
                                <p>{currentWeather.wind.speed} km/j</p>
                            </div>
                        </div>
                    </>
                ) 
                : 
                (
                    <>
                        Loading...
                    </>
                )
            }
            
        </div>
    )
}

export default weatherDetails