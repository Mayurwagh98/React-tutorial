import React from "react";
import web from "../src/images/im2.svg"
import {Link} from "react-router-dom"
import {Common} from "./Common"

let Home = () =>{

    return(

        <>

        <Common name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started" />

        </>
    )
}

export {Home}