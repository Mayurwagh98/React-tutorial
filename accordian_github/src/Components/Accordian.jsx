import React from "react";
import { useState } from "react";
import {questions} from "./data"
import {Myaccordian} from "./Myaccordian"
import "./accordian.css"

let Accordian = () =>{

    let [data, setData] = useState(questions)

    return (

        <>
            <section>

                <h1>React Interview Qestions</h1>

                {
                    data.map((item) =>{

                        return <Myaccordian  key={item.id} {...item} />

                        //here the spread operator is used to pass the remaining props of the questions

                    })

                }
            </section>
        
        </>
    )
}

export {Accordian}