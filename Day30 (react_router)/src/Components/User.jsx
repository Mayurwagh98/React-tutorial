import React from "react";
// import { matchPath } from "react-router-dom";
import {useParams} from "react-router-dom"

// let User = ({match}) =>{

//     return <h1>Hi, this is {match.params.fname}</h1>
// }

let User = () =>{

    let {fname} = useParams()

    return <h1>Hi, this is {fname} page</h1>
}


export {User}