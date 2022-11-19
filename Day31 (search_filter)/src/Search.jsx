import React from "react"
import { useState } from "react"
import {Search_res} from "./Search_result"

let Search = () =>{

    let [image, setImage] = useState("")

    let searchImage = (event) =>{

        console.log(event.target.value);

        setImage(event.target.value)
    }

    return(
        <>
        
        <input type="text" placeholder="Search here..."  value={image} onChange={searchImage}  />

        {image === "" ? null :<Search_res name={image} />}
        </>
    )
}

export {Search}