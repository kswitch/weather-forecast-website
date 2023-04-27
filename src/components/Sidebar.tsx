import {useState} from "react"
import CityInput from "./CityInput"
import DateAndTime from "./DateAndTime"
import WeatherDetails from "./WeatherDetails"

function Sidebar() {
    const [city, setCity] = useState('')

    function handleInput(e: string) : void {
        setCity(e)
    }

    return (
        <div className="sidebar">
            <CityInput
                city={city}
                handleInput={handleInput}
            />
            <DateAndTime />
            <WeatherDetails />
        </div>
    )
}

export default Sidebar