function getAverage(arr: object[]): number[] {
    const tempDegArr: number[] = []
    const degArr: number[][] = []

    for (let i=0; i < arr.length; i++) {
        if(i == 0) {
            tempDegArr.push(arr[i].temp)
        }
        else {
            if(arr[i].day == arr[i-1].day) {
                tempDegArr.push(arr[i].temp)
            }
            else {
                degArr.push([...tempDegArr])
                tempDegArr.splice(0)
                tempDegArr.push(arr[i].temp)
            }
        }
    }
    degArr.push([...tempDegArr])
    tempDegArr.splice(0)

    const result = degArr.map(item => {
        return Number(((item.reduce((acc, red) => acc+red, 0)) / item.length).toFixed(2))
    })
    return result  
}
export default getAverage