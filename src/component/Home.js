import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
  return (
    <div className='img'>
      <div className='box'>
        <div>
        <h1 className='text-light mb-3'><span >MOVIE</span> BOOKING</h1>
        <p className='text-info'>This site is give your most popular movies</p>
        <p className='text-info'>you are book any movies in this website</p>
        <Link className='btn btn-success mt-4' to="/login">Log In</Link>
        <Link className='btn btn-primary mt-4 ms-3' to="/singin">Sing In</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
