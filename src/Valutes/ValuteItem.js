import React, {useState, useEffect} from "react";
import ValuteGrafics from "./ValuteGrafics";
import axios from 'axios'

function ValuteItem(props){
    const styles={
        p:{

        },

    }


    const [hidden, setHidden] = useState(true)




    return(
            <div onClick={()=> {hidden===true ? setHidden(false): setHidden(true)}} key={props.key} className="ValuteItem" >
                <p style={styles.p}>{props.Valute.CharCode}</p>
                <p style={styles.p}>{props.Valute.Name}</p>
                <p style={styles.p}>{props.Valute.Nominal}</p>
                <p style={styles.p}>{props.Valute.Value}</p>

                {hidden ? <div/> : <ValuteGrafics Valute={props.Valute} key={props.key} />}
            </div>
    )
}

export default ValuteItem