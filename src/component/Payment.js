import React from 'react'
import { Link } from 'react-router-dom'

function Payment() {
  return (
    <>
      <div className='container my-5'>
        <div className="card my-2">
          <div className="card-body">
            <div className="form-check">
              <input style={{ fontSize: "2rem" }} className="form-check-input ms-2" type="radio" name="payment" />
              <h3 className='ms-5 ps-5'>google pay</h3>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="form-check">
              <input style={{ fontSize: "2rem" }} className="form-check-input ms-2" type="radio" name="payment" />
              <h3 className='ms-5 ps-5'>UPI </h3>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="form-check">
              <input style={{ fontSize: "2rem" }} className="form-check-input ms-2" type="radio" name="payment" />
              <h3 className='ms-5 ps-5'>Wallet /Postpaid</h3>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="form-check">
              <input style={{ fontSize: "2rem" }} className="form-check-input ms-2" type="radio" name="payment" />
              <h3 className='ms-5 ps-5'>Net Banking</h3>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="form-check">
              <input style={{ fontSize: "2rem" }} className="form-check-input ms-2" type="radio" name="payment" />
              <h3 className='ms-5 ps-5'>Credit Card /Debit Card</h3>
            </div>
          </div>
        </div>
        <div className="text-center my-4">
          <Link className='btn btn-primary' to="/feedback">PAY</Link>
        </div>
      </div>
    </>
  )
}

export default Payment
