import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Movieseat() {
  const numCheckboxes = 150;
  const checkboxes = [];
 const [tikets,setikets]=useState(null);
 const [total,settotal]=useState(null);
 let handlechackbox=(e)=>{
  if(e.target.checked){
    setikets(tikets+1)
    settotal(total+200)
  }
  else{
    setikets(tikets-1)
    settotal(total-200)
  }
}
  for (let i = 0; i < numCheckboxes; i++) {
    checkboxes.push(
      <div className="form-check" style={{margin:"0px"}}>
        <input className="form-check-input mx-1" type="checkbox" name={i} placeholder={i} onChange={handlechackbox}/>{i}
      </div>
    );
  }
 
  return (
    <>
      <div className='container'>
        <h1 className='text-center'>SELECT SEATS</h1>
        <div className=' bg-warning w-100 text-center m-1' style={{height:"2rem"}}><h3>SCREEN</h3> </div>
        <div className='d-flex'>
          <div className='row'>
            {checkboxes.map((item) => {
              return (
                <div className='col bg-info'>
                  {item}
                </div>
              )
            })
            }
          </div>
        </div>
        <div className='text-center'>
          <Link className='btn btn-primary mt-3' to="/payment">{tikets} Tikets {total} Rupees</Link>
        </div>
      </div>
    </>
  )
}

export default Movieseat
