import React, { Component } from "react";

class Profile extends Component {
    constructor(){
        super()
        this.state = {
        }
    }
    render(){
        return (
            <div id="profile">
                <div className="sectionName">PROFILE</div>
                <div className="proContainer">
                    <div className="profileTitle">
                        <input type="text"id="titleInput" placeholder="Title"/>
                    </div>
                    <div className="profileFullName">
                        <input type="text"id="fullNameInput" placeholder="Full Name"/>
                    </div>
                    <div className="profileAddress">
                        <input type="text"id="addressInput" placeholder="Address"/>
                    </div>
                    <div className="profileContact">
                        <input type="tel"id="contactInput" placeholder="Contact Number"/>
                    </div>
                    <div className="profileEmail">
                        <input type="email"id="emailInput" placeholder="Email"/>
                    </div>
                    <div className="profileSummarry">
                        <textarea type="text" id="summarryInput" placeholder="Personal Summarry"/>
                    </div>
                </div>
            </div>
        );
    }    
}
    

export default Profile