import React from "react";
import web from "../src/images/s1.jpg"
import {Link} from "react-router-dom"

let Card = () =>{

    return (

        <>
         <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="" className="btn btn-primary">
              Check Now
            </Link>
          </div>
        </div>
      </div>
        </>
    )
}

export {Card}