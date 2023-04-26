import React, { Component } from "react";
import DispEducation from "./DispEducation";
import DispExperience from "./DispExperience";

class Display extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  
  render(){
    return (
      <div className="display">
        <div id="dispHeadder">
          <div id="dispName">{`CV - ${document.getElementById("titleInput").value} ${document.getElementById("fullNameInput").value}`}</div>
          <div id="dispContact">
            <div id="dispAddress">{document.getElementById("addressInput").value}</div>
            <div id="dispNumber">{document.getElementById("contactInput").value}</div>
            <a id="dispEmail" href={`mailto=${document.getElementById("emailInput").value}`}>{document.getElementById("emailInput").value}</a>
          </div>
          
        </div>
        <div id="dispPersonalProfile">
          <div>{document.getElementById("summarryInput").value}</div>
        </div>
        <DispExperience/>
        <DispEducation/>
      </div>
  );
  }
  
};

export default Display;