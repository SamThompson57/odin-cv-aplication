import React, { Component } from "react";
import uniqid from "uniqid"

class Education extends Component {
    constructor(){
        super()
        this.state = {
            count: [uniqid()]
        }
    }

    add = () => {
        if (this.state.count.length >= 3) return
        this.setState({
            count: this.state.count.concat(uniqid())
        })
    }

    remove = (id) => {
        const newArr = this.state.count.filter(sect => sect !== id)
        this.setState({
            count: newArr
        })
    }

    render(){
        return (
            <div id="Education">
                <div className="sectionName">EDUCATION</div>
                {
                    this.state.count.map((id) => {
                        return (
                            <div className="eduContainer" id={id}>
                                <div className="button">
                                    <button type="button" className="remove" onClick={() => this.remove(id)}>DELETE</button> 
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
                    <button type="button" className="add" onClick={this.add} >ADD EDUCATION</button>
                </div>
                
            </div>
        );
    }    
}
    

export default Education