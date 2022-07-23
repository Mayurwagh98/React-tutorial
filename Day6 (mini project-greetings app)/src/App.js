import "./styles.css";

export default function App() {
  // let currDate = new Date(2020,5,5,16)
  let currDate = new Date();

  currDate = currDate.getHours();

  let greetings = "";
  const cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    greetings = "Good Morning";

    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 19) {
    greetings = "Good Afternoon";

    cssStyle.color = "Orange";
  } else {
    greetings = "Good Night";

    cssStyle.color = "Black";
  }
  return (
    <div className="App">
      <h1>
        Hello Sir, <span style={cssStyle}> {greetings} </span>
      </h1>
    </div>
  );
}
