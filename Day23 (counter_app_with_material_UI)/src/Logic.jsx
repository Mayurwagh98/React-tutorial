import { useState } from "react"
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';

let Counter = () =>{

    let [count, setCount] = useState(0)

    let increCount = () =>{

        setCount(count + 1)
    }

    let decreCount = () =>{

        if(count === 0){

            alert("You have reached the limit")

            setCount(0)
        }
        else{

            setCount(count - 1)
        }
   
    }


    return (
        <>
        <div className="main_div">

            <div className="center_div">
                <h1>{count}</h1>

                <div className="btn_div">
                    <Tooltip title="Inrement">
                        <Button onClick={increCount} className="btn_green"><AddIcon /></Button>
                    </Tooltip>
                
                    <Tooltip title="Decrement">
                        <Button onClick={decreCount} className="btn_red"><RemoveIcon /></Button>
                    </Tooltip>
                
            </div>
            </div>
           
        </div>
        </>
    )
}

export {Counter}