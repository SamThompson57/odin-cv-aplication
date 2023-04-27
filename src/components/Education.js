import React, { useState } from "react";
import uniqid from "uniqid"

const Education = () => {
    const [count, setCount] = useState([uniqid()]);

    const add = () => {
        if (count.length >= 3) return
        setCount(count.concat(uniqid()))
    }

    const remove = (id) => {
        const newArr = count.filter(sect => sect !== id)
        setCount(newArr)
    }
        
    return (
        <div id="Education">
            <div className="sectionName">EDUCATION</div>
            {
                count.map((id) => {
                    return (
                        <div className="eduContainer" id={id}>
                            <div className="button">
                                <button type="button" className="remove" onClick={() => remove(id)}>DELETE</button> 
                            </div>
                            <div className="educationInstitution">
                                <input type="text"className="institutionInput" placeholder="Institution"/>
                            </div>
                            <div className="educationLocation">
                                <input type="text"className="locationInput" placeholder="Location"/>
                            </div>
                            <div className="educationLevel">
                                <input type="text"className="levelInput" placeholder="Education Level"/>
                            </div>
                            <div className="educationSubject">
                                <input type="text"className="subjectInput" placeholder="Subject"/>
                            </div>
                            <div className="educationFrom">
                                <input type="text"className="educationFromInput" placeholder="From"/>
                            </div>
                            <div className="educationTo">
                                <input type="text"className="educationToInput" placeholder="To"/>
                            </div>    
                        </div> 
                    )
                })
            }
            <div className="button">
                <button type="button" className="add" onClick={add} >ADD EDUCATION</button>
            </div>
                
        </div>
    );
}    
  

export default Education