import React from "react"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

let Pokemon = () =>{

    let [num, setNum] = useState()

    let [name, setName] = useState()

    let [moves, setMoves] = useState()

    let [image, setImage] = useState()

    useEffect(() =>{

        let getPokemon = async() => {

            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)

            console.log(res.data)

            setName(res.data.name)

            setMoves(res.data.moves.length) // here used moves.length because moves is an array

            setImage(res.data.sprites.back_default)
        }
        
        getPokemon()
    })

    return (

        <>

            <h1>You selcted  <span style={{color: "red"}} >{num}</span> value</h1>
            <h1>My name is <span style={{color: "red"}}>{name}</span> </h1>
            <h1>I have <span style={{color: "red"}}>{moves}</span> moves</h1>
            <img src={image} alt=""  />
            <br />

            <select value = {num} onChange={(event) =>{
                setNum(event.target.value)
            }} >
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        
        </>
    )
}

export {Pokemon}