import React from 'react'

function About() {
  return (
    <>
    <div className='bg-info d-flex justify-content-center text-light' style={{height:"15rem"}}>
      <h1 className='mt-5'>ABOUT MOVIEHUB</h1>
    </div>
    <div className='card container' style={{marginTop:"-6rem"}}>
      <h3>WHO WE ARE</h3>
      <p>Welcome to our movie booking page! We are a team of movie enthusiasts who are passionate about bringing the best movie experiences to our customers. Our goal is to provide a convenient and easy-to-use platform for booking movie tickets online..</p>
      <h3 className='mt-3'>EXPLAINING DETAIN ABOUT THIS SITE</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, hic. Quae, explicabo voluptatibus accusantium sequi officia illum odio, similique repudiandae enim at facilis quod expedita ratione aperiam vero id placeat?</p><br />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium porro molestiae consequuntur id perferendis debitis voluptatum, dolor aperiam, ipsa quod, repudiandae ab. Perferendis qui necessitatibus consectetur officiis non amet sit?</p>
      <div className='d-flex justify-content-center mt-3'>
      <button className='btn btn-info 'style={{width:"10rem"}}>LEARN MORE</button>

      </div>
    </div>
    </>
  )
}

export default About
