import React from "react";
import web from "../src/images/hero-img.png"
import {Link} from "react-router-dom"
import Common from "./Common"

let About = () =>{

    return(
        <>

            <Common name="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    )
}

export {About}