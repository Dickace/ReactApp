import React from "react";
import ValuteItem from "./ValuteItem";

function ValutesList(props){



    return(
        <div>

        <ul className='ValutesList'>

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