import React, {useState} from "react";
// import DeleteIcon from "@material-ui/core/Delete";
import DeleteIcon from '@mui/icons-material/Delete';

let ListComponent = (props) =>{


    let [line, setLine] = useState(false) // initially keeping the linethrough value as false

    let cutLine = () =>{

        setLine(true) // making linethrough value true once user clicks on delete icon
    }

    return(
        <>
            <div className="todo_style">

                <span onClick={cutLine}>

                <DeleteIcon className="deleteIcon" />

                </span>

                <li style={{ textDecoration: line ? "line-through" : "none" }}> 

                {props.text}

                </li>
            </div>

        </>
    
    )
}

export {ListComponent}