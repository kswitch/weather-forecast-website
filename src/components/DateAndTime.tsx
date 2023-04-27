function dateAndTime() {
    const getDate = new Date()
    const time = getDate.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
    const day = getDate.toLocaleString('en-US', {weekday: 'short'})
    const date = getDate.toLocaleString('en-US', {month: 'short', day:'numeric', year: 'numeric'})

    return (
        <div className="date-and-time">
            {`${time}, ${day}, ${date}`}
        </div>
    )
}

export default dateAndTime