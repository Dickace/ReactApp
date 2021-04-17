import React, {useState, useEffect, useRef} from "react";
import { Chart, registerables } from 'chart.js';

import axios from "axios";

Chart.register(...registerables);








function ValuteGrafics(props) {
    const Url = "https://go-hellow-example-app.herokuapp.com/api/v1/valuateHistory?Valute=" + props.Valute.$.ID.toString()
    let responseData
    const [valutes, setValutes] = useState()
    const chartContainer = useRef();
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
            axios({
                    "method": "GET",
                    "url": Url,
                    "params": {}
                }
            )
                .then((response)=>{

                    if (valutes==null){
                        responseData = response
                        formatData()
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })


        if (chartContainer && chartContainer.current && valutes) {
            const newChartInstance = new Chart(chartContainer.current, {
                type: 'line',
                data:setChartData(valutes),
                options: options,
            });
            setChartInstance(newChartInstance);

        }
    }, [valutes]);

    const options =  {
        responsive: true,
        plugins: {
            title: {
                display: true,
            },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Цена'
                },

            }
        }
    }

    function formatData(){
        var parseString = require('xml2js').parseString
        parseString(responseData.data, function (err, result){
            setValutes(result)

        })

    }
    function setChartData(Valute){
        var valArr =[]
        const dataArr = Valute.ValCurs.Record
        dataArr.forEach((element)=>{
            valArr.push({x: element.$.Date,y: parseFloat(element.Value[0].replace(',','.'))})
        })


        return ({
            datasets:[

                {
                    label: props.Valute.Name,
                    data: valArr,
                    borderColor: "rgba(140,99,132,1)",
                    backgroundColor: "rgba(140,99,132,0.5)",
                    pointRadius: 2,
                    fill: true,
                    tension: 0.3
                }
            ]
        })

    }

    return (
        <div>
            <canvas key={props.key} ref={chartContainer} width={600} height={300} />
        </div>
    );
};

export default ValuteGrafics