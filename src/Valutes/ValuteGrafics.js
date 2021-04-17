import React, {useState, useEffect, useRef, useMemo} from "react";
import { Chart, registerables } from 'chart.js';

import axios from "axios";

Chart.register(...registerables);








function ValuteGrafics(props) {
    const Url = "https://go-hellow-example-app.herokuapp.com/api/v1/valuateHistory?Valute=" + props.Valute.$.ID.toString()

    const [valutes, setValutes] = useState()
    const chartContainer = useRef();
    // eslint-disable-next-line no-unused-vars
    const [chartInstance, setChartInstance] = useState(null);
    const options = useMemo(()=>{
        return(
        {
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
        })
    },[])


    useEffect(() => {
        let responseData
            axios({
                    "method": "GET",
                    "url": Url,
                    "params": {}
                }
            )
                .then((response)=>{

                    if (valutes==null){
                        responseData = response
                        var parseString = require('xml2js').parseString
                        parseString(responseData.data, function (err, result){
                            setValutes(result)

                        })
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })



    }, [valutes,Url]);
    useEffect(()=>{
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
                        borderColor: "rgba(0, 59, 70, 1)",
                        backgroundColor: "rgba(0, 59, 70, 0.5)",
                        pointRadius: 2,
                        fill: true,
                        tension: 0.3
                    }
                ]
            })

        }
        if (chartContainer && chartContainer.current && valutes) {
            const newChartInstance = new Chart(chartContainer.current, {
                type: 'line',
                data:setChartData(valutes),
                options: options,
            });
            setChartInstance(newChartInstance);

        }
    },[valutes,options,props.Valute.Name])




    return (
        <div>
            <canvas key={props.key} ref={chartContainer} width={600} height={300} />
        </div>
    );
};

export default ValuteGrafics