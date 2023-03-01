import React from 'react'
import { Link } from 'react-router-dom'

function Movieitem(props) {
    let {title,discription,imgurl,released,imdbrating,genre}=props
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={imgurl ? imgurl :"https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg"} height={300} className="card-img-top" alt="..."/>
    <div className="card-body">
         <h5 className="card-title">{title}</h5>
        <div className='d-flex justify-content-between'>
         <h5 className="card-title">{released}</h5>
         <h5 className="card-title"><i className="fa-solid fa-star text-warning"></i>{imdbrating}/10</h5>
        </div>
         <h5 className="card-title">{genre}</h5>
      <p className="card-text">{discription.slice(0,50)}</p>
      <Link to="/movietime" className="btn btn-primary mt-3">Book</Link>
    </div>
  </div>
  )
}

export default Movieitem
