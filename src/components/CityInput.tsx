import fetchDataFromWeatherAPI from "../functions/fetchDataFromWeatherAPI";
import {cityinput} from "../interfaces/typeDeclarations"


function cityInput(props: cityinput ) {

    function handleEnter(e: {key: string}) : void {
        if(e.key == 'Enter') {
            // () => {
            //     const data = fetchDataFromWeatherAPI(props.city || 'Lagos')
            //     console.log(data);
            // }
            fetchDataFromWeatherAPI(props.city || 'Lagos')
        }
    }

    return (
        <div className="city">
            <p className="city-text">Your city</p>
            <input 
                type="text" 
                className="city-input" 
                value={props.city} 
                onChange={(e) => props.handleInput(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
                placeholder="e.g Lagos"
            />
        </div>
    )
}

export default cityInput