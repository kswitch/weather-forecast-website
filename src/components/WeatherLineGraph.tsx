import { weather, lineGraphObjects } from "../interfaces/typeDeclarations"
import getAverage from "../functions/getAverage";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip} from 'chart.js'
import { Line } from 'react-chartjs-2';
import Loading from "./loading/Loading";

function weatherLineGraph(props: weather) {   
    const {weatherData} = props   
    console.log(weatherData);
         

    function getLabels() {
        const values = weatherData[1].list.map((list: lineGraphObjects) => {
            const value = list.dt
            const day = new Date(value * 1000).toLocaleString('en-US', {weekday: 'short'})
            return day
        })
        const result = [...new Set(values)]
        return result 
    }

    function getAverageTemp() {
        const values: [] = weatherData[1].list.map((list: lineGraphObjects) => {
            const value = list.dt
            const temp: number = list.main.temp
            const day: string = new Date(value * 1000).toLocaleString('en-US', {weekday: 'short'})
            return {day,temp}
        })
        return getAverage(values)
    }

    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: '5-day Forecast',
                align: 'start'
            }
        },
    };

    const labels = weatherData.length && getLabels()

    const data = {
        labels,
        datasets: [
          {
            label: 'Average Temp',
            data: weatherData.length && getAverageTemp().map((item)=> Number(item)),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
    };

    return (
        <>
            { weatherData.length ?
                <div>
                    <Line options={options} data={data} />
                {/* <p>The weather forecast for 4days will be here</p> */}
                </div>
                :
                <Loading />
            }
        </>
    )
}

export default weatherLineGraph