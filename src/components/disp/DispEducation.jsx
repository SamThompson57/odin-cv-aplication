import React from "react";

const DispEducation = () => {
    const eduList = []

    const eduNum = document.getElementsByClassName("eduContainer").length

    const eduLevel = document.getElementsByClassName("levelInput")
    const eduSubject = document.getElementsByClassName("subjectInput")
    const eduInstitution = document.getElementsByClassName("institutionInput")
    const eduLocation = document.getElementsByClassName("locationInput")
    const eduFrom = document.getElementsByClassName("educationFromInput")
    const eduTo = document.getElementsByClassName("educationToInput")

    for (let i = 0; i < eduNum; i++){
        eduList.push(
            <div className="dispContainer">
                <div className="dipHeadder"><b>{eduInstitution[i].value}</b>, {eduLocation[i].value} {eduLevel[i].value}: <i>{eduSubject[i].value}</i></div>
                <div className="dispDates">{eduFrom[i].value} - {eduTo[i].value}</div>                
            </div>
            )
    }

    if (eduList.length < 1) return
    return(
        <div>
            <div className="dispSection">EDUCATION</div>
            {eduList}
                
        </div>
    )
}

export default DispEducation;