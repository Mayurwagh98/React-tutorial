import React, {useState} from "react";

let Myaccordian = ({question, answer}) =>{

    let [show, setShow] = useState(false)

    return (

        <>

        <div className="main-heding">

            <p onClick={() =>{setShow(!show)}}>{show ? "—":"+"}</p>

            <h2>{question}</h2>
        </div>

        {show && <p className="answers">{answer}</p>}

        {/* {here we are checking if show == true then show the answers} */}

        </>
    )
}

export {Myaccordian}