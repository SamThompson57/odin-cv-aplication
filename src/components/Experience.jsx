import React, { useState } from "react";
import uniqid from "uniqid"

const Experience = () => {
    const [count, setCount] = useState([uniqid()]);

    const add = () => {
        if (count.length >= 5) return
        setCount(count.concat(uniqid()))
    }

    const remove = (id) => {
        const newArr = count.filter(sect => sect !== id)
        setCount(newArr)
    }

    return (
        <div id="Experience">
            <div className="sectionName">EXPERIENCE</div>
            {
                count.map((id) => {
                    return (
                        <div className="expContainer" id={id}>
                            <div className="button">
                                <button type="button" className="remove" onClick={() => remove(id)}>DELETE</button> 
                            </div>
                            <div className="experiencePosition">
                                <input type="text" className="positionInput" placeholder="Position"/>
                            </div>
                            <div className="experienceCompany">
                                <input type="text" className="companyInput" placeholder="Company"/>
                            </div>
                            <div className="experienceCity">
                                <input type="text" className="cityInput" placeholder="City"/></div>
                            <div className="experienceFrom">
                                <input type="text" className="fromInput" placeholder="From"/>
                            </div>
                            <div className="experienceTo">
                                <input type="text" className="toInput" placeholder="To"/></div>
                            </div>
                    )
                })   
            }
            <div className="button">
                <button type="button" className="add" onClick={add} >ADD EXPERIENCE</button>
            </div>
        </div>  
    );
}    

export default Experience