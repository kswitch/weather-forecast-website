export interface eventObjects {
    key: string
}
// export interface currentWeather {
//     base: string,
//     clouds: object,
//     cod: number,
//     coord: object,
//     dt: number,
//     id: number,
//     main: object,
//     name: string,
//     sys: object,
//     timezone: number,
//     visibility: number,
//     weather: object[],
//     wind: object
// }
export interface cityinput {
    city?: string,
    handleInput: (e: string) => void,
    handleEnter: (e: eventObjects) => void
}
export interface weather extends cityinput {
    weatherData?: object[],
}