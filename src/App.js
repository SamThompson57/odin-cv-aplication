import React, { Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import uniqid from "uniqid"
import Display from "./components/disp/Display";


class App extends Component {
  constructor() {
    super();

    this.state = {
      cv : '',
      id: uniqid()
    };
  }


  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      cv: <Display/>,
      id: uniqid()
    });
  };

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmitTask} id={this.state.id}>
          <Profile/>
          <Experience/>
          <Education/>
          <div className="button">
            <button>GENERATE CV</button>
          </div>
        </form>
      {this.state.cv}  
      </div>
    );
  }
}

export default App;
