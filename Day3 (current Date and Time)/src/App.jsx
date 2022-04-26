import "./styles.css";

export default function App() {
  const name = "Mayur"
  const currDate = new Date().toLocaleDateString()
  const currTime = new Date().toLocaleTimeString()

  return (
    <div className="App">
     <h1>Hello, this is {name}</h1>
     <p>Today's date is: {currDate}</p>
     <p>Current time is: {currTime}</p>
    </div>
  );
}
