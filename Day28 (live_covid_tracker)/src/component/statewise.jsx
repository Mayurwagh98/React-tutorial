import React, { useState, useEffect } from "react"

let Statewise = () =>{

    let [data, setData] = useState([])

    let getCovidData = async() =>{
        let res = await fetch("https://api.covid19india.org/data.json")

        let actualData = await res.json()

        console.log(actualData.statewise);

        setData(actualData.statewise)
    }

    
    useEffect(() =>{
        
        getCovidData()
    }, [])

    return (
        <>

            <div className="container-fluid mt-5">
                <div className="main-heading" >
                    <h1 className="mb-5 text-center" >India Covid-19 Reports</h1>
                </div>

                <div className="table-responsive" >
                    <table className="table table-hover">
                        <thead className="thead-dark" >
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recoverd</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>

                        <tbody className="table-body">
                            {data.map((currValue, index) =>{
                                 return (
                                    <tr key={index}>
                                        <td>{currValue.state}</td>
                                        <td>{currValue.confirmed}</td>
                                        <td>{currValue.recovered}</td>
                                        <td>{currValue.deaths}</td>
                                        <td>{currValue.active}</td>
                                        <td>{currValue.lastupdatedtime}</td>
                                </tr>
                                 )
                                
                            })}
                       
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export {Statewise}