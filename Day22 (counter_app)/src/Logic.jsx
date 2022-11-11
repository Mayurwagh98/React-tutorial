import { useState } from "react"


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

                <button onClick={increCount}>Inrement</button>
                <button onClick={decreCount}>Decrement</button>
            </div>
            </div>
           
        </div>
        </>
    )
}

export {Counter}