import {useEffect, useState } from "react";
import Chart from "chart.js/auto";
import {Bar, Doughnut, Pie, Line} from 'react-chartjs-2';
import './custom.css';

function Custom(props){
    const [cReq, setReq] = useState({});        //cReq: Request details for chart
    const [Result, setResult] = useState(<></>);       //Result: will be used to store the response from the server
    const [htmlData, setHtml] = useState("No data available.");
    
    //predefined options (settings) for bar charts
    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            },
        },
    }

    function handleInput(){
        console.log('Handle Input')
        let severity = document.getElementById('severity').value;
        let gender = document.getElementById('gender').value;
        let program = document.getElementById('program').value;
        let disability = document.getElementById('disability').value;

        let reqData = {};
        
        if(severity != '0') reqData['Severity'] = severity;
        if(gender != '0') reqData['Gender'] = gender;
        if(program != '0') reqData['Program'] = program;
        if(disability != '0') reqData['Disability'] = disability;

        setReq(reqData);
    }

    function handleResponse(response){
        console.log(response)
        let element;
        if(response.name === 'bar'){
            var chartData = {
                labels: response.labels,
                datasets: [
                    {
                        label: response.title,
                        data: response.data,
                        backgroundColor: 'rgba(53, 162, 235, 0.9)'
                    }
                ]
            }
            element = <Bar className="custom_bar_chart" options={barOptions} data={chartData}/>
        }
        else if(response.name === 'pie'){
            let chartData = {
                labels: response.labels,
                datasets: [
                    {
                        data: response.data,
                        backgroundColor: [
                            '#36a2eb', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#96f'
                        ]
                    }
                ]
            }
            element = <Pie className="pie_chart" data={chartData} />
        }
        else if(response.name === 'doughnut'){
            let chartData = {
                labels: response.labels,
                datasets: [
                    {
                        data: response.data,
                        backgroundColor: [
                            '#fc7e7a', '#61d0c6',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    }
                ]
            }
            console.log('doughnut.......')
            element = <Doughnut className="doughnut_chart" data={chartData}/>
        }
        //'bar_h' for horizontal bar chart
        else if(response.name === "line"){
            let options = JSON.parse(JSON.stringify(barOptions))
            var chartData = {
                labels: response.labels,
                datasets: [
                    {
                        label: response.title,
                        data: response.data,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)'
                    }
                ]
            }
            element = <Line className="bar_cart" options={options} data={chartData}/>
        }
        setResult(
            <>
            <div className="chartTitle">
                {response.title}
            </div>
            {element}
            </>
        )
    }

    const fetchHtmlData = async () => {
        try{
            fetch('/custom',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cReq)
            })
            .then(res => res.json())
            .then(data => setHtml(data));
        }
        catch(err){
            console.log("Error fetching data frame...");
        }
    }

    useEffect(() =>{
        fetchHtmlData();
    }, [cReq])

    useEffect(() => {
        fetchHtmlData();
    }, [htmlData]);


    return (
        <div className="custom-container">
            <Header handleInput={handleInput}/>
            <div className="result" dangerouslySetInnerHTML={{ __html: htmlData }}>
            </div>
        </div>
    )
}

function Header(props){
    return(
        <div className='customHeader'>
                <div className="text">Please select: </div>
                <select name="field" id='disability' onChange={props.handleInput}>
                    <option value='0'>Disability</option>
                    <option value='Mobility impairment'>Mobility impairment</option>
                    <option value='Deafblindness'>Deafblindness</option>
                    <option value='Physical disability'>Physical disability</option>
                    <option value='Neurological disability'>Neurological disability </option>
                    <option value='Learning disability'>Learning disability</option>
                    <option value='Autoimmune disorder'>Autoimmune disorder</option>
                    <option value='Chronic illness'>Chronic illness   </option>
                    <option value='Intellectual disability'>Intellectual disability </option>
                    <option value='Psychiatric disability'>Psychiatric disability  </option>
                    <option value='Hearing impairment'>Hearing impairment</option>
                    <option value='Cognitive impairment'>Cognitive impairment</option>
                    <option value='Speech impairment'>Speech impairment</option>
                    <option value='Visual impairment'>Visual impairment</option>
                    <option value='Developmental disability'>Developmental disability</option>
                </select>
                <select name="field2" id='severity' onChange={props.handleInput}>
                    <option value='0'>Severity</option>
                    <option value='low'>low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
                <select name="field3" id='program' onChange={props.handleInput}>
                    <option value='0'>Program</option>
                    <option value='Smriti Program'>Smriti Program</option>
                    <option value='Samrudhhi Program'>Samrudhhi Program</option>
                    <option value='Jagriti Program'>Jagriti Program</option>
                </select>
                <select name="field4" id='gender' onChange={props.handleInput}>
                    <option value='0'>Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
                <select style={{}}>
                    <option value='0'></option>
                    <option value='BMC School'>School</option>
                    <option value='Disability'>Disability</option>
                    <option value='Severity'>Severity</option>
                    <option value='Gender'>Gender</option>
                    <option value='Age'>Age</option>
                    <option value='Program'>Program</option>
                </select>
                {/* <select name="timeInput" id="timeInput" onChange={props.handleInput}>
                    <option value="365">Last 1 Year</option>
                    <option value='180'>Last 180 Days</option>
                    <option value='60'>Last 60 Days</option>
                    <option value='30'>Last 30 Days</option>
                </select> */}
                {/* <div className="message" id='message'>Please select values...</div> */}
        </div>
    )
}

export default Custom;
