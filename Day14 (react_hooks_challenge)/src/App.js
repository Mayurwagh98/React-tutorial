//1. everytime button is clicked it should show the current time
//2. eveytime page is refreshed it should show the current time

import { useState } from "react";
import "./styles.css";

export default function App() {
  // let state = useState();

  let newTime = new Date().toLocaleTimeString();

  let [currentTime, setTime] = useState(newTime);

  let updateTime = () => {
    // newTime = new Date().toLocaleTimeString();

    let newcurrentTime = new Date().toLocaleTimeString();

    setTime(newcurrentTime);
  };

  return (
    <div className="App">
      <h1>{currentTime}</h1>

      <button onClick={updateTime}>Get time</button>
    </div>
  );
}
