import CityInput from "./CityInput"
import DateAndTime from "./DateAndTime"
import WeatherDetails from "./WeatherDetails"
import { weather } from "../interfaces/typeDeclarations";

function Sidebar(props: weather) {   
     
    return (
        <div className="sidebar">
            <CityInput
                city={props.city}
                handleInput={props.handleInput}
                handleEnter={props.handleEnter}
            />
            <DateAndTime />
            <WeatherDetails
                weatherData={props.weatherData}
                // handleInput={props.handleInput} //This would not have any side effect when removed as Weather details doesn't need it
            />
        </div>
    )
}

export default Sidebar