import React from 'react'

function Singin() {
  return (
    <div>
       <h1 className='my-3 text-center text-success'>Sing Up</h1>
        <div className='d-flex justify-content-center'>
            <form className="col-6">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name'  className="form-control" id="name"  minLength={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email'  className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password'  className="form-control" id="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" name='cpassword'  className="form-control" id="cpassword" minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Singin
