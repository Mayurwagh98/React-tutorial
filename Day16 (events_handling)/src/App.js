import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let bg = "purple";
  // let name = "Click"

  let [currBg, setBg] = useState(bg);
  let [currentName, setName] = useState("Click");

  let changeBg = () => {
    let newbg = "yellow";

    setBg(newbg);

    setName("Ouchh!");
  };

  let doubleClick = () => {
    // let newdoublebg = "green";

    setBg(bg);

    setName("Ayooo");
  };

  return (
    <>
      <div style={{ backgroundColor: currBg }}>
        <button onClick={changeBg} onDoubleClick={doubleClick}>
          {currentName}
        </button>
      </div>

      <div>
        <button onMouseEnter={changeBg} onMouseLeave={doubleClick}>
          {currentName}
        </button>
      </div>
    </>
  );
}
