import { add, sub, multi, div } from "./Calc";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>Addition of two numbers are {add(2, 3)}</li>

        <li>Subtraction of two numbers are {sub(2, 3)}</li>

        <li>Multiplication of two numbers are {multi(2, 3)}</li>

        <li>Division of two numbers are {div(2, 3)}</li>
      </ul>
    </div>
  );
}
