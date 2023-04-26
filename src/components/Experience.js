import React, { Component } from "react";
import uniqid from "uniqid"

class Experience extends Component {
    constructor(){
        super()
        this.state = {
            count: [uniqid()]
        }
    }

    add = () => {
        if (this.state.count.length >= 5) return
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
            <div id="Experience">
                <div className="sectionName">EXPERIENCE</div>
                {
                    this.state.count.map((id) => {
                        return (
                            <div className="expContainer" id={id}>
                                <div className="button">
                                    <button type="button" className="remove" onClick={() => this.remove(id)}>DELETE</button> 
                                </div>
                                <div className="experiencePosition">
                                    <input type="text" className="positionInput" placeholder="Position"/>
                                </div>
                                <div className="experienceCompany">
                                    <input type="text" className="companyInput" placeholder="Company"/>
                                </div>
                                <div className="experienceCity">
                                    <input type="text" className="cityInput" placeholder="City"/>
                                    </div>
                                <div className="experienceFrom">
                                    <input type="text" className="fromInput" placeholder="From"/>
                                </div>
                                <div className="experienceTo">
                                    <input type="text" className="toInput" placeholder="To"/>
                                </div>
                            </div>
                        )
                    })   
                }
                <div className="button">
                    <button type="button" className="add" onClick={this.add} >ADD EXPERIENCE</button>
                </div>
            </div>  
        );
    }    
}
    

export default Experience