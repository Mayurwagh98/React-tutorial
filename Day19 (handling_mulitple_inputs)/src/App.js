import "./styles.css";
import { useState } from "react";

export default function App() {
  let [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  let inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // let value = event.target.value;
    // let name = event.target.name;

    let { value, name } = event.target; //destructring

    setFullName((previousValue) => {
      // console.log(previousValue)

      if (name === "fName") {
        return {
          fname: value,
          lname: previousValue.lname, //if we remove this then from the DOM then lastname won't show when we type our firstname
          email: previousValue.email,
          phone: previousValue.phone
        };
      } else if (name === "lName") {
        return {
          fname: previousValue.fname, //if we remove this then from the DOM the firstname won't show when we type our lastname
          lname: value,
          email: previousValue.email,
          phone: previousValue.phone
        };
      } else if (name === "email") {
        return {
          fname: previousValue.fname,
          lname: previousValue.lname,
          email: value,
          phone: previousValue.phone
        };
      } else if (name === "phone") {
        return {
          fname: previousValue.fname,
          lname: previousValue.lname,
          email: previousValue.email,
          phone: value
        };
      }
    });
  };

  return (
    <div className="App">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>

      <h2>
        {fullName.email}
        <br />
        {fullName.phone}
      </h2>

      <input
        type="text"
        placeholder="enter your name"
        name="fName"
        onChange={inputEvent}
        value={fullName.fname}
      />
      <br />

      <input
        type="text"
        placeholder="enter your name"
        name="lName"
        onChange={inputEvent}
        value={fullName.lname}
      />
      <br />

      <input
        type="email"
        placeholder="enter your email"
        name="email"
        onChange={inputEvent}
        value={fullName.email}
      />
      <br />

      <input
        type="number"
        placeholder="enter your mobile number"
        name="phone"
        onChange={inputEvent}
        value={fullName.phone}
      />

      <button type="submit">Submit</button>
    </div>
  );
}
