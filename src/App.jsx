import React, { useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Display from "./components/disp/Display";

function App() {
  const [cv, setCv] = useState('')

  const onSubmitTask = (e) => {
    e.preventDefault();
    setCv(<Display/>);
  };

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <Profile/>
        <Experience/>
        <Education/>
        <div className="button">
          <button>GENERATE CV</button>
        </div>
      </form>
    {cv}  
    </div>
  );
}

export default App
