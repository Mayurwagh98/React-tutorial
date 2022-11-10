import { useState } from "react";
import "./styles.css";
import { TodoLists } from "./TodoLists";

export default function App() {
  let [inputList, setInputList] = useState("");
  let [Items, setItems] = useState([]);

  let itemEvent = (event) => {
    setInputList(event.target.value);
  };

  let listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(""); //making input field empty once the data is filled
  };

  let deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input
          type="text"
          placeholder="Enter todo"
          onChange={itemEvent}
          value={inputList}
        />
        <button onClick={listofItems}>+</button>
        <ol>
          {/* <li>buy apple</li>
           */}

          {Items.map((item, index) => {
            return (
              <TodoLists
                key={index}
                id={index}
                text={item}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
