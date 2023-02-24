import React from 'react'

function Login() {
  return (
    <>
    <h1 className='my-5 text-center text-success'>Login</h1>
    <div className='d-flex justify-content-center'>
        <form className="col-4">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name='email'  className="form-control" id="email"  />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name='password'className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
    </>
  )
}

export default Login
