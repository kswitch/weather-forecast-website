export interface eventObjects {
    key: string
}
export interface cityinput {
    city?: string,
    handleInput: (e: string) => void,
    handleEnter: (e: eventObjects) => void
}
export interface weather {
    weatherData: any
    dt_txt?: string
    dt?: number
    list?: object[]
}

export interface lineGraphObjects {
    list: object[]
    dt: number
    main: any
    temp: number
    day: string
}