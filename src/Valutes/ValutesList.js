import React from "react";
import ValuteItem from "./ValuteItem";

function ValutesList(props){



    return(
        <div className={"valutesContainer"} >

        <ul  className='ValutesList'>
            <div className="ValuteItem ValuteItem_Header">
                <div className="ValuteItemText">
                    <p>Код</p>
                    <p className="ValuteItemText_NameLabel">Название валюты</p>
                    <p className="ValuteItemText_Header">Номинал</p>
                    <p className="ValuteItemText_ValueLabel">Цена</p>
                </div>
            </div>
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