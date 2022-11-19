import React, {useState} from "react"
// import Button from "@material-ui/core/Button";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {ListComponent} from "./ListComponent"


let TodoList = () =>{

    let [item, setItem] = useState("")

    let [newItem, setNewItem] = useState([]) // creating empyt array to store multiple todos
 
    let itemEvent = (event) =>{

        setItem(event.target.value) //getting the value added in the input field
    }

    let listOfItems = () =>{

        setNewItem((oldItems) =>{

            return [...oldItems, item] // getting the olditems and new items as well
        })

        setItem("") // making input field empty after adding the todo
    }

    return (
        <div className='main_div'>
          <div className='center_div'>
    
            <br />
    
            <h1>Todo List</h1>
    
            <br />
    
            <input type="text" value={item} placeholder="Add Item" onChange={itemEvent} />
    
            <Button className="newBtn" onClick={listOfItems}>
              <AddIcon />
            </Button>
    
            <br></br>
    
            <ol>
              {newItem.map((val, index) =>{
    
                return <ListComponent key={index} text = {val} />
                
              })}
            </ol>
    
            <br></br>
          </div>
        </div>
      );
}


export {TodoList}
