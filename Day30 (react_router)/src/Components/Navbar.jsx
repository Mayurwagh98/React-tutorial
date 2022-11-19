import React from "react";
import {Link} from "react-router-dom"

let Navbar = () =>{

    return(

        <>

            <Link className="active"  to="/">About</Link>
            <br />
            <Link className="active"  to="/contact">Contact</Link>
            <br />
            <Link className="active"  to="/user">User</Link>

        </>
    )
}

export {Navbar}