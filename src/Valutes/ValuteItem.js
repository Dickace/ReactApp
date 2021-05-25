import React, {useState} from "react";
import ValuteGrafics from "./ValuteGrafics";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'

function ValuteItem(props){



    const [hidden, setHidden] = useState(true)




    return(
            <li className="ValuteItem" >
                <div onClick={()=> {hidden===true ? setHidden(false): setHidden(true)}} className="ValuteItemText">
                    <p >{props.Valute.CharCode}</p>
                    <div className="ValuteItemText_NameLabel">
                        <p className="ValuteItemText_NameLabel_ForChart">{props.Valute.Name}</p>
                        {hidden ? <FontAwesomeIcon className={"ValuteItemText_NameLabel_Icon"} icon={faCaretSquareDown}/> : <FontAwesomeIcon className={"ValuteItemText_NameLabel_Icon"} icon={faCaretSquareUp}/>}
                    </div>

                    <p className="ValuteItemText_NominalLabel  ValuteItemText_NominalLabel_ForChart">{props.Valute.Nominal}</p>
                    <p className="ValuteItemText_ValueLabel ValuteItemText_ValueLabel_ForChart">{props.Valute.Value}</p>
                </div>
                {hidden ? <div/> : <ValuteGrafics Valute={props.Valute} />}
            </li>
    )
}

export default ValuteItem;