import React from 'react'

function HeaderTittle(){
    const date = new Date()
    const option = {day: "2-digit", month: "2-digit",year: "4-digit"}
    const formattedDate = new Intl.DateTimeFormat(option).format(date)
    return(
        <div className="Header">
            <span className="TittleHeader">Курсы валют на {formattedDate}</span>
        </div>
    );

}

export default HeaderTittle