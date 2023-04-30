import CityInput from "./CityInput"
import DateAndTime from "./DateAndTime"
import WeatherDetails from "./WeatherDetails"
import { cityinput, weather} from "../interfaces/typeDeclarations";

function Sidebar(props: cityinput & weather) {   
     
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
            />
        </div>
    )
}

export default Sidebar