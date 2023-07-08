import {useEffect, useState } from "react";
import Chart from "chart.js/auto";
import './header.css'
import {Bar, Doughnut, Pie} from 'react-chartjs-2'


function AutoReports(props){
    const [duration, setDuration] = useState(365);
    const [d, setd] = useState([]);

    const chart_options = {
        responsive: true,
        legend: {
            display: true,
        },
        plugins: {
            legend: {
                display: false
            },
            title:{
                display: true,
                text: 'No. of Students/Disability'
            }
        },
    };

    function handleResponse(response){
        var dArray = []
        let labels = response['name']
        const chart_data = {
            labels,
            datasets: [{
                data: response['count'],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }],
        }
        dArray.push(<Bar options={chart_options} data={chart_data} />)
        setd(dArray)
    }

    useEffect(() =>{
        fetch('http://127.0.0.1:5000/auto_reports',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {handleResponse(data)})
    }, [duration])

    return (
        <div style={{width: '50%', margin: 'auto'}}>
        <Header handleInput={() => console.log('Handle Input Called')}/>
        {d}
        </div>
    )
}

function Header(props){

    return (
        <div className='pageHeader'>
            <div className="pageTitle">Auto Generated Reports</div>
            {/* <div className="pageHeaderInner">
                <select name="timeInput" id="timeInput" onChange={props.handleInput}>
                    <option value="365">Last 1 Year</option>
                    <option value='180'>Last 180 Days</option>
                    <option value='90'>Last 90 Days</option>
                    <option value='30'>Last 30 Days</option>
                </select>
            </div> */}
        </div>
    )

}

export default AutoReports;