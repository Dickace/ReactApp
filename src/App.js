import './App.css';
import axios from 'axios'
import React, {useState} from 'react'
import ValutesList from "./Valutes/ValutesList";
import HeaderTittle from "./Header/HeaderTittle";
function App() {
    const [responseData, setResponseData] = useState()
    React.useEffect(()=>{
        axios({
            "method": "GET",
            "url": "https://www.cbr-xml-daily.ru/daily.xml",
            "params": {

            }
        })
            .then((response)=>{
                setResponseData(response.data)
                formatData()

            })
            .catch((error)=>{
                console.log(error)
            })
    },[responseData, setResponseData])

    function formatData(){
        var parseString = require('xml2js').parseString
        parseString(responseData.toString(), function (err, result){
            setValutes(result.ValCurs.Valute)
        })
    }

    const [Valutes, setValutes] = useState(/*[
        {id: 'R12124', NumCode: "540", CharCode: "USD", Nominal: 1, Name: "Dollar USAeeeeeeeee", Value: 68.5215, Previous: 67.5126},
        {id: 'R12125', NumCode: "541", CharCode: "USf", Nominal: 2, Name: "Dollar USf", Value: 68.5217, Previous: 67.5125},
        {id: 'R12126', NumCode: "542", CharCode: "USg", Nominal: 3, Name: "Dollar USg", Value: 68.5218, Previous: 67.5127},
        {id: 'R12127', NumCode: "543", CharCode: "USh", Nominal: 4, Name: "Dollar USh", Value: 68.5219, Previous: 67.5129},
    ]*/)

    return (
      <div>
        <HeaderTittle/>
          {console.log(Valutes)}
          {Valutes ? <ValutesList Valutes={Valutes}/> :<p>No Valute Data</p>}

      </div>
  );
}

export default App;
