import { weather, lineGraphObjects } from "../interfaces/typeDeclarations"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip} from 'chart.js'
import { Line } from 'react-chartjs-2';

function weatherLineGraph(props: weather) {   
    const {weatherData} = props

    function getLabels() {
        const values = weatherData[1].list.map((list:lineGraphObjects) => {
            const value = list.dt
            const day = new Date(value * 1000).toLocaleString('en-US', {weekday: 'short'})
            return day
        })
        const result = [...new Set(values)]
        return result 
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
            label: 'Temperature',
            data: weatherData.length && labels.map((item,i)=> i),
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