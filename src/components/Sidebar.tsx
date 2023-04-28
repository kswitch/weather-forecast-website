import CityInput from "./CityInput"
import DateAndTime from "./DateAndTime"
import WeatherDetails from "./WeatherDetails"
import {cityinput} from "../interfaces/typeDeclarations"

function Sidebar(props: cityinput) {
    return (
        <div className="sidebar">
            <CityInput
                city={props.city}
                handleInput={props.handleInput}
            />
            <DateAndTime />
            <WeatherDetails/>
        </div>
    )
}

export default Sidebar