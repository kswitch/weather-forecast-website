import { weather } from "../interfaces/typeDeclarations"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend} from 'chart.js'
import { Line } from 'react-chartjs-2';

function weatherLineGraph(props: weather) {   
    const {weatherData} = props
    console.log(weatherData);

    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend)

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

    const labels = weatherData.length && weatherData[1].list.map((list:weather) => {
        const value = list.dt
        const day = new Date(value * 1000).toLocaleString('en-US', {weekday: 'short'})
        return day
    })
    const data = {
        labels,
        datasets: [
          {
            label: 'Temperature',
            data: weatherData.length && weatherData[1].list.map((list:weather) => {
                const value = list.main.temp
                return value
            }),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
    };

    return (
        <>
            { weatherData.length ?
                <Line options={options} data={data} />
                :
                <>Loading...</>
            }
        </>
    )
}

export default weatherLineGraph