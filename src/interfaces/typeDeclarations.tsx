export interface eventObjects {
    key: string
}
export interface cityinput {
    city?: string,
    handleInput: (e: string) => void,
    handleEnter: (e: eventObjects) => void
}
export interface weather {
    weatherData: object[]
    dt_txt?: string
    dt?: number
    list?: object[]
    main?: object
    temp?: number
}