import { weather } from "../interfaces/typeDeclarations";
import WeatherLineGraph from "./weatherLineGraph";


function Main(props: weather) {
    
    return (
        <div className="main">
            <canvas id="weather-line-graph">
            </canvas>
            <WeatherLineGraph 
                weatherData={props.weatherData}
            />
            <p>The weather forecast for 4days will be here</p>
        </div>
    )
}

export default Main