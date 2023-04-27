interface properties {
    city: string,
    handleInput: (e: string) => void
}

function cityInput(props: properties ) {
    return (
        <div className="city">
            <p className="city-text">Your city:</p>
            <input 
                type="text" 
                className="city-input" 
                value={props.city} 
                onChange={(e) => props.handleInput(e.target.value)} 
                placeholder="e.g Lagos"
            />
        </div>
    )
}

export default cityInput