import React from "react";
// import { useState } from "react";

let Search_res = (props) =>{

    let img = `https://source.unsplash.com/user/erondu/400x400/?${props.name}`

    return (

        <>
            <img src={img} alt="image" />
        </>
    )
}

export {Search_res}