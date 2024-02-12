import React ,{useEffect, useState}from 'react'
import "./statewise.css"
const Statewise=()=>{
    const[data,setData]=useState([]);
    const getData = async()=>{
        const res=  await fetch('https://data.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
      }
      useEffect(()=>{
        getData();
      },[]);
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center">INDIA COVID-19 DASHBOARD</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark" >
                        <tr >
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((currEle,ind)=>{
                                return(
                                    <tr key={ind}>
                                        <th>{currEle.state}</th>
                                        <td>{currEle.confirmed}</td>
                                        <td>{currEle.recovered}</td>
                                        <td>{currEle.deaths}</td>
                                        <td>{currEle.active}</td>
                                        <td>{currEle.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}


export default Statewise