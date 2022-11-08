import { useState } from "react";
import "./styles.css";

export default function App() {
  let time = new Date().toLocaleTimeString();

  let [currentTime, setTime] = useState(time);

  let digitalTime = () => {
    time = new Date().toLocaleTimeString();

    setTime(time);
  };

  setInterval(digitalTime, 1000);

  return (
    <div className="App">
      <h1 style={{ fontSize: "60px", fontFamily: "san" }}>{currentTime}</h1>
    </div>
  );
}
