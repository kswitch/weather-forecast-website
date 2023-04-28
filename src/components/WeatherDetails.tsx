function weatherDetails({weatherData}: {weatherData: any}) {  
    const currentWeather = weatherData[0]
    const iconID = currentWeather.weather[0].icon

    return (
        <div className="weather-details">
            <div className="temp-and-weather">
                <div>
                    <img src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} className="weather-icon" alt="Weather Icon"/>
                    <p>{currentWeather.main.temp}<sup>&deg;C</sup></p>
                </div>
                <div className="weather-main">
                    {currentWeather.weather[0].main}
                </div>
            </div>
            <div className="humidity-and-wind-speed">
                <div className="humidity">
                    <p>Humidity</p>
                    <p>{currentWeather.main.humidity}%</p>
                </div>
                <div className="wind-speed">
                    <p>Wind speed</p>
                    <p>{currentWeather.wind.speed} km/j</p>
                </div>
            </div>
        </div>
    )
}

export default weatherDetails