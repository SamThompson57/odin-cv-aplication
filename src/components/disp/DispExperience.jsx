import React from "react";

const DispExperience = () => {
    const expList = []

    const expNum = document.getElementsByClassName("expContainer").length

    const expPosition = document.getElementsByClassName("positionInput")
    const expCompany = document.getElementsByClassName("companyInput")
    const expCity = document.getElementsByClassName("cityInput")
    const expFrom = document.getElementsByClassName("fromInput")
    const expTo = document.getElementsByClassName("toInput")

    for (let i = 0; i < expNum; i++){
        expList.push(
            <div className="dispContainer">
                <div className="dispHeadder"><b>{expCompany[i].value}</b>, {expCity[i].value} - <i>{expPosition[i].value}</i></div>
                <div className="dispDates">{expFrom[i].value} - {expTo[i].value}</div>
            </div>
            )
    }

    if (expList.length < 1) return
    return(
        <div>
            <div className="dispSection">EXPERIENCE</div>
            {expList}
                
        </div>
    )
}

export default DispExperience;