import React from "react";
import ValuteItem from "./ValuteItem";

function ValutesList(props){



    return(
        <div>

        <ul className='ValutesList'>
            <li className="ValuteItem ValuteItem_Header">
                <div className="ValuteItemText">
                    <p>Код</p>
                    <p className="ValuteItemText_NameLabel">Название валюты</p>
                    <p className="ValuteItemText_NominalLabel">Номинал</p>
                    <p className="ValuteItemText_ValueLabel">Цена</p>
                </div>
            </li>
            {props.Valutes.map((Valute, index)=>{
                return(
                    <ValuteItem Valute={Valute}
                                key={Valute.$.ID}
                                index={index}
                    />
                )
            })}
        </ul>
        </div>
    );
}

export default ValutesList