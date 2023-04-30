import { weather } from "../interfaces/typeDeclarations";
import WeatherLineGraph from "./WeatherLineGraph";


function Main(props: weather) {
    
    return (
        <div className="main">
            <WeatherLineGraph 
                weatherData={props.weatherData}
            />
        </div>
    )
}

export default Main