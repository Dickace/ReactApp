import React, {useState} from "react";
import ValuteGrafics from "./ValuteGrafics";


function ValuteItem(props){



    const [hidden, setHidden] = useState(true)




    return(
            <li className="ValuteItem" >
                <div onClick={()=> {hidden===true ? setHidden(false): setHidden(true)}} className="ValuteItemText">
                    <p >{props.Valute.CharCode}</p>
                    <p className="ValuteItemText_NameLabel">{props.Valute.Name}</p>
                    <p className="ValuteItemText_NominalLabel">{props.Valute.Nominal}</p>
                    <p className="ValuteItemText_ValueLabel">{props.Valute.Value}</p>
                </div>
                {hidden ? <div/> : <ValuteGrafics Valute={props.Valute} />}
            </li>
    )
}

export default ValuteItem