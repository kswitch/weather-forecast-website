// import fetchDataFromWeatherAPI from "../functions/fetchDataFromWeatherAPI";
import { weather } from "../interfaces/typeDeclarations"

function cityInput(props: weather ) {

    return (
        <div className="city">
            <p className="city-text">Your city</p>
            <input 
                type="text" 
                className="city-input" 
                value={props.city} 
                onChange={(e) => props.handleInput(e.target.value)}
                onKeyDown={(e) => props.handleEnter(e)}
                placeholder="e.g Lagos"
            />
        </div>
    )
}

export default cityInput