import React from 'react'
import { useNavigate } from 'react-router-dom';
import record from "./movietime.json";

function Movietime() {
    // let load=async()=>{
    //     let request=new XMLHttpRequest();
    //     let url="./movietime.json";
    //     request.onreadystatechange=()=>{
    //         if(request.readyState===4){
    //             console.log("hello")
    //             let jsonobj=JSON.parse(request.responseText)
    //             console.log(jsonobj)
    //         }
    //     }
    //     request.open("GET",url,true);
    //     request.send();
    //    // console.log("object")
    // }
    // useEffect(()=>{
    //     load()
    // },[])
    //  console.log(record)
   let navigate=useNavigate();
    const showseat = () => {
      navigate("/movieseat",{push:true})
    }
    return (
        <>
            <div className='container'>
                <div className="row">
                    {
                        record.results.map((item) => {
                            return (
                                <div className="card col-4">
                                    <h5 className="card-header bg-dark text-light">{item.cinema}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.address}t</h5>
                                        <div className='row'>
                                            {
                                                item.time.map((time) => {
                                                    return (
                                                        <div className='col-4'>
                                                            <p className="btn btn-outline-success my-1" onClick={showseat}>{time[0]}<br />{time[1]}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Movietime
