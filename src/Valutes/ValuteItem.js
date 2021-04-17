import React, {useState} from "react";
import ValuteGrafics from "./ValuteGrafics";


function ValuteItem(props){
    const styles={
        p:{

        },

    }


    const [hidden, setHidden] = useState(true)




    return(
            <div onClick={()=> {hidden===true ? setHidden(false): setHidden(true)}} className="ValuteItem" >
                <p style={styles.p}>{props.Valute.CharCode}</p>
                <p style={styles.p}>{props.Valute.Name}</p>
                <p style={styles.p}>{props.Valute.Nominal}</p>
                <p style={styles.p}>{props.Valute.Value}</p>

                {hidden ? <div/> : <ValuteGrafics Valute={props.Valute} />}
            </div>
    )
}

export default ValuteItem