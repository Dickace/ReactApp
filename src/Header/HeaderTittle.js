import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuestionCircle as farQuestionCircle} from "@fortawesome/free-regular-svg-icons";
import {faQuestionCircle as fasQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import TextDescribe from "../TextDescribe";



function HeaderTittle(){
    const date = new Date()
    const option = {day: "2-digit", month: "2-digit",year: "4-digit"}
    const formattedDate = new Intl.DateTimeFormat(option).format(date)
    const [chosen,setChosen] = new useState(false);
    return(
        <div className="Header">

            <span className="TittleHeader">Курсы валют на {formattedDate}</span>
            <div className={"TittleHeader_DescribeBox"}  >
                {chosen ? <FontAwesomeIcon onClick={()=> {chosen===true ? setChosen(false): setChosen(true)}} className={"TittleHeader_DescribeIcon  TittleHeader_DescribeIcon_Close"}  icon={fasQuestionCircle}/> : <FontAwesomeIcon onClick={()=> {chosen===true ? setChosen(false): setChosen(true)}} className={"TittleHeader_DescribeIcon"} icon={farQuestionCircle}/>  }
            </div>

            {chosen ? <div onClick={() => {setChosen(false)}} className={"DescribeBackground"}><TextDescribe /> </div> :<div/>}

        </div>
    );

}

export default HeaderTittle