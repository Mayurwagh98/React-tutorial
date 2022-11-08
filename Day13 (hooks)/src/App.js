import { useState } from "react";
import "./styles.css";

export default function App() {
  let state = useState();
  // [current value, updated value] = initial state
  let [count, setCount] = useState(0);

  let Increment = () => {
    // console.log(count)
    // setCount(count++);

    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>{count}</h1>

      <button onClick={Increment}>Increment</button>
    </div>
  );
}
